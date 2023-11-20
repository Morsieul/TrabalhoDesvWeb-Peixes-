export type User = {
    jwt: string,
    id: number,
    username: string,
    email: string,
    role: string
  }

  export type Comment = {
  description: string,
  rating: number,
}