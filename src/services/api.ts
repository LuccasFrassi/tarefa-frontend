import axios from 'axios'

const api = axios.create({
  baseURL: 'https://notes-tarefas-backend.herokuapp.com'
})

export default api;