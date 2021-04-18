import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://stackoverflowmine.herokuapp.com/api`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
