import axios from "axios"

const client = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}:8080`
})

export default client
