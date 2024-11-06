import CryptoJS from 'crypto-js'
const secret = import.meta.env.VITE_anonKey

export const encryption = (string) => CryptoJS.AES.encrypt(string, secret).toString()


export const decryption = (string) => {
  if (string) {
    console.log('decryption string = ', string);
    const decSTR = CryptoJS.AES.decrypt(string, secret)
    console.log('decryption decSTR = ', decSTR);

    const decSTRtoString = decSTR.toString(CryptoJS.enc.Utf8)
    console.log('decryption decSTRtoString = ', decSTRtoString);
    return decSTRtoString
  }
  return ''
}