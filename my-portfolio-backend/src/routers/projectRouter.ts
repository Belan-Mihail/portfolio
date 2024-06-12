import express from "express";
import asyncHandler from "express-async-handler";
import { ProjectModel } from "../models/projectModel";

export const projectRouter = express.Router();

projectRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const projects = await ProjectModel.find();
    res.json(projects);
  })
);

projectRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const project = await ProjectModel.findOne({ slug: req.params.slug });
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  })
);
