import { User } from "../models/userModel";
import bcrypt from 'bcryptjs'

export const sampleUsers: User[] = [
    {
      name: 'Mike',
      email: 'bilanmo1488@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Peter',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]