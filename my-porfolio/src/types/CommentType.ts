import PortfolioDataType from "./PortfolioDataType"
import { UserInfo } from "./UserInfo"

export type Comment = {
    _id: string
    user: string
    project: PortfolioDataType
    content: string
    isApproval: boolean
  }

 