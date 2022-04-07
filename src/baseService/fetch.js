import axios from 'axios'
import jwtDecode from "jwt-decode"

function getToken(){
  console.log('entro a token')
  const TOKEN = 'token'
  return localStorage.getItem(TOKEN)
}

function hasExpiredToken(token){
  
  const tokeDecode = jwtDecode(token)
  const expiredDate = tokeDecode.exp * 1000;
  const currentDate = new Date().getTime();
  if(currentDate > expiredDate){
    return true;
  } 
    return false;
}

async function authFetch(url, params, logout){
  const token = getToken()
  if(!token){
    logout();
  } else {
    console.log('entro a si hay token')
    //if(hasExpiredToken(token)){
      //logout();
    //} else {
      console.log('entro a axios')
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`, 
        }
      }
      console.log(paramsTemp)
      try {
        const response = await axios(paramsTemp)
        const result = response.json()
        return result;
        
      } catch (error) {
        return error;
      }
   // }
    
  }
}

export default authFetch;