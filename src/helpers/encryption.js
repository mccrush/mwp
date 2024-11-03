import CryptoJS from 'crypto-js'
//import { secret } from './../../apiKey'
const secret = '123'
console.log('decryption secret = ', secret);

export const encryption = (string) => CryptoJS.AES.encrypt(string, secret).toString()




export const decryption = (string) => {
  console.log('decryption string = ', string);
  const decSTR = CryptoJS.AES.decrypt(string, secret)
  console.log('decryption decSTR = ', decSTR);

  const decSTRtoString = decSTR.toString(CryptoJS.enc.Utf8)
  console.log('decryption decSTRtoString = ', decSTRtoString);
}