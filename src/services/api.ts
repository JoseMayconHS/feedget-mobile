import axios from 'axios'

import { API_CREDENTIALS } from '../credentials/api'

export const API_ENDPOINTERS = {
  POST: {
    feedback: 'feedback'
  }
}

export const API = axios.create({
  baseURL: 'http://10.0.0.109:3333/',
  headers: {
    ...API_CREDENTIALS
  }
})
