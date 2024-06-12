import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CommentModel } from "../models/commentModel";
import { ProjectModel } from "../models/projectModel";
import { UserModel } from "../models/userModel";
import { isAuth } from "../utils";
export const commentRouter = express.Router();

commentRouter.get(
  "/:slug/comment",

  asyncHandler(async (req: Request, res: Response) => {
    const comment = await CommentModel.find({ project: req.params.slug })

    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: "No comments yet" });
    }
  })
);

commentRouter.post(
  "/:slug/comment",
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const project = await ProjectModel.findOne({ slug: req.params.slug });
    const currentUser = await UserModel.findOne({_id: req.user._id})
    
      const createdComment = await CommentModel.create({
        user: currentUser?.name,
        project: project?.slug,
        content: req.body.content,
      });
      res
        .status(201)
        .json({ message: "Comment created", comment: createdComment });
    
  })
);

commentRouter.put(
  "/:slug/comment/:id",
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const comment = await CommentModel.findOne({ _id: req.params.id })
    const id = req.params.id
    console.log(id)
    const currentUser = await UserModel.findOne({_id: req.user._id})
    const content = req.body.content
    if (currentUser?.name === comment?.user) {
      await CommentModel.findByIdAndUpdate(id, {content: content}, {new: true});
      res
        .status(201)
        .json({ message: "Comment Updated" });
    } else {
      res.status(403).json({ message: "No allow" });
    }
    
  })
);

commentRouter.delete(
  "/:slug/comment/:id",
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    
    const comment = await CommentModel.findOne({ _id: req.params.id })
    const id = req.params.id
    const currentUser = await UserModel.findOne({_id: req.user._id})
    if (currentUser?.isAdmin || currentUser?.name === comment?.user) {
      await CommentModel.deleteOne({ _id: Object(id) });
      res
        .status(200)
        .json({ message: "Comment deleted" });
    } else {
      res.status(403).json({ message: "No allow" });
    }
      
      
    
  })
);
