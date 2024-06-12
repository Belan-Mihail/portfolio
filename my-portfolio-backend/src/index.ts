import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { projectRouter } from './routers/projectRouter'
import { seedRouter } from './routers/seedRouter'
import { userRouter } from './routers/userRouter'
import { commentRouter } from './routers/commentRouter'


dotenv.config()

const MONGODB_URI =
     process.env.MONGODB_URI || 'mongodb://localhost/portfolio'
   mongoose.set('strictQuery', true)
   mongoose
     .connect(MONGODB_URI)
     .then(() => {
       console.log('connected to mongodb')
     })
     .catch(() => {
       console.log('error mongodb')
     })

const app = express()
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000']
    })
)

// we need this middleware to be able to check req.body.email in asyncHandler in userRouter.ts
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/api/projects', (req: Request, res: Response) => {
//     res.json(PortfolioData)
// })

// app.get('/api/projects/:slug', (req: Request, res: Response) => {
//     res.json(PortfolioData.find((x) => x.slug === req.params.slug))
// })

app.use('/api/users', userRouter)
app.use('/api/projects', commentRouter)
app.use('/api/projects', projectRouter)
app.use('/api/seed', seedRouter)

const PORT = 4000
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})
