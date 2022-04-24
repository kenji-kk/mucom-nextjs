import axios from "axios"

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}:8080`
})

export default client
