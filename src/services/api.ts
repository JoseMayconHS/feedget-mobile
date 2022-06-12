import axios from 'axios'

export const API_ENDPOINTERS = {
  POST: {
    feedback: 'feedback'
  }
}

export const API = axios.create({
  baseURL: 'http://10.0.0.109:3333/'
})
