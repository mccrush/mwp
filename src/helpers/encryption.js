import CryptoJS from 'crypto-js'
import { secret } from './../../apiKey'

export const encryption = (string) => CryptoJS.AES.encrypt(string, secret).toString()
export const decryption = (string) => CryptoJS.AES.decrypt(string, secret).toString(CryptoJS.enc.Utf8)