import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Project {
  public _id?: string

  @prop({ required: true })
  public name!: string

  @prop({ required: true, unique: true })
  public slug!: string

  @prop({ required: true })
  public github!: string

  @prop()
  public livepage?: string

  @prop({ required: true })
  public description!: string

  @prop({ required: true })
  public tech!: string[]

  
  @prop({ required: true })
  public images!: string[]


  @prop({ required: true })
  public isYoutubeproject!: boolean


  @prop({ required: true, default: 0 })
  public features!: string[]
  
}

export const ProjectModel = getModelForClass(Project)