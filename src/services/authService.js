import http from './httpServices'
import { apiUrl } from '../config.json'
import jwtDecode from 'jwt-decode'

const endPoint = `${apiUrl}/auth/login`
const tokenKey = 'token'

http.setJwt(getJwt())

export function login(username, password) {
  const { data } = http.post(endPoint, { email: username, password: password })
  localStorage.setItem(tokenKey, data.accessToken)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey)
    return jwtDecode(token)
  } catch (err) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

const auth = {
  login,
  logout,
  getCurrentUser,
  getJwt,
}

export default auth
