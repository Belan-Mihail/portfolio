import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ProjectModel } from '../models/projectModel'
import PortfolioData from '../data/PortfolioData'
import { UserModel } from '../models/userModel'
import { sampleUsers } from '../data/UserData'





export const seedRouter = express.Router()

seedRouter.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
      await ProjectModel.deleteMany({})
      const createdProducts = await ProjectModel.insertMany(PortfolioData)

      await UserModel.deleteMany({})
      const createdUsers = await UserModel.insertMany(sampleUsers)


    res.json({ createdProducts, createdUsers })
    })
  )