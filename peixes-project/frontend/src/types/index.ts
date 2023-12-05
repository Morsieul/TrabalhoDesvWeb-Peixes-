export type User = {
    jwt: string,
    id: number,
    username: string,
    email: string,
    role: string
  }

  export type Comment = {
    id: string,
  description: string,
  rating: number,
  }

  export type Picture = {
    id: string,
    url: string,
    name: string,
    description: string,
    thumbnail ?: string,
    author: User,
    comments: Comment[]
  }