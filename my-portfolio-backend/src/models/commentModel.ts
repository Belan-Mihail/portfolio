import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

// import { Project } from './projectModel'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Comment {
  public _id?: string
  
  @prop({ required: false })
  public user!: string

  @prop({ required: false })
  public project!: string

  @prop({ required: true })
  public content!: string

  @prop({ required: true, default: false })
  public isApproval!: boolean
}

export const CommentModel = getModelForClass(Comment)