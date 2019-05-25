import axios from 'axios';
import {backend} from '../contant/url';
const qs = require('qs')
const api = {
  async get (url, data) {
    try {
      let res = await axios.get(backend + url, {params: data})
      res = res.data
      return new Promise((resolve) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      alert('服务器出错')
      console.log(err)
    }
  },
  async post (url, data) {
    try {
      let res = await axios.post(backend + url, qs.stringify(data))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      // return (e.message)
      alert('服务器出错')
      console.log(err)
    }
  },
}
export { api };