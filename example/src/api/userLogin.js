import * as base from 'base-service'


export default class LoginApiService extends base.BaseService {
  constructor(){
    const baseUrl = "https://ecommerce-game-woz.herokuapp.com"
    const endpoint = "auth/local"
    super(baseUrl, endpoint);
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