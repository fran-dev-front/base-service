import * as base from 'base-service'
import { BASE_URL } from '../constants/constants'


export class LoginApiService extends base.BaseService {
  constructor(){
    const baseUrl = BASE_URL;
    const endpoint = "auth/login"
    super(baseUrl, endpoint);
  }
}
export class UserManages extends base.BaseService{
  constructor(){
    const baseUrl = BASE_URL;
    const endPoint = 'auth/user';
    super(baseUrl, endPoint)
  }
}

export class Suppliers extends base.BaseService{
  constructor(){
    const baseUrl = BASE_URL;
    const endPoint = 'inventory/suppliers';
    super(baseUrl, endPoint)
  }
}


// export async function loginApi(formData){

//   const BASE_PATH = "https://ecommerce-game-woz.herokuapp.com";

//   try {
//     const url = `${BASE_PATH}/auth/local`;
//     //const url = `http://tender-chandrasekhar.74-208-27-206.plesk.page/api/v1/auth/login/`;
//     const params = {
//       method: "POST",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(formData)
//     }
//     const response = await fetch(url, params);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error)
//     return null;
//   }
// }