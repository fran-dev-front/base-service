import axios from 'axios'
export function getToken(){
  return localStorage.getItem(TOKEN)
}

export function hasExpiredToken(token){
  
  const tokeDecode = jwtDecode(token)
  const expiredDate = tokeDecode.exp * 1000;
  const currentDate = new Date().getTime();
  if(currentDate > expiredDate){
    return true;
  } 
    return false;
}

export async function authFetch(url, params, logout){
  const token = getToken()
  if(!token){
    logout();
  } else {
    if(hasExpiredToken(token)){
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`, 
        }
      }
      try {
        const response = await axios.post(url, paramsTemp)
        const result = response.json()
        return result;
        
      } catch (error) {
        return error;
      }
    }
  }
}