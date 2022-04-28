import axios from 'axios'
import authFetch from './fetch'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error)
    return Promise.reject(error);
});


export class BaseService{
  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.url = this.baseUrl+'/'+this.endPoint
  }
  async postData(formData){
    try{
      const params = {
        method: "POST",
        url: this.url,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)  
      return response.data;
    }catch (error){
      return null;
    }
  }
  async postDataAuth(id, formData, logout){
    try{
      const params = {
        method: "POST",
        url: this.url,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let result = await authFetch(this.url, params, logout) 
      return result ? result : null
    }catch (error){
      return null;
    }
  }
  async editData(id, formData){
    try{
      const params = {
        method: "PUT",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)  
      return response.data;
    }catch (error){
      return null;
    }
  }
  async editDataAuth(formData, logout){
    try{
      const params = {
        method: "PUT",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let result = await authFetch(this.url, params, logout) 
      return result ? result : null
    }catch (error){
      return null;
    }
  }
  async getAll(page="", numberOfItems=""){
    let urlParams = this.url
    if(page!=""){
      urlParams = `${this.url}/?page=${id}`
      if(numberOfItems!=""){
        urlParams = `${this.url}/&items=${numberOfItems}`
      }
    }
    try{
      const params = {
        method: "GET",
        url: urlParams,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)  
      return response.data;
    }catch (error){
      return null;
    }
  }
  async getAllAuth(logout, page="", numberOfItems=""){
    let urlParams = this.url
    if(page!=""){
      urlParams = `${this.url}/?page=${id}`
      if(numberOfItems!=""){
        urlParams = `${this.url}/&items=${numberOfItems}`
      }
    }
    try{
      const params = {
        method: "GET",
        url: urlParams,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await authFetch(urlParams, params, logout)   
      return response.data;
    }catch (error){
      return null;
    }
  }
  async getAllById(id){
    try{
      const params = {
        method: "GET",
        url: `${this.url}/${id}`,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)   
      return response.data;
    }catch (error){
      return null;
    }
  }
  async getAllByIdAuth(id, logout){
    try{
      const params = {
        method: "GET",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await authFetch(this.url, params, logout)   
      return response.data;
    }catch (error){
      return null;
    }
  }
  async getById(id){
    try{
      const params = {
        method: "POST",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)  
      return response;
    }catch (error){
      return null;
    }
  }
  async deleteAuth(id, logout){
    try{
      const params = {
        method: "DELETE",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await authFetch(this.url, params, logout)  
      return response;
    }catch (error){
      return null;
    }
  }
  async delete(id){
    try{
      const params = {
        method: "DELETE",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await axios(params)  
      return response;
    }catch (error){
      return null;
    }
  }
}


// filter(filters: IRequestFilter[]): Observable<T[]> {
//   let filterstring = '?';
//   const concatReduce = (accumulator, currentValue) => accumulator + currentValue.key + '=' + currentValue.value + "&";
//   filterstring = filters.reduce(concatReduce, filterstring);
//   const url = this.url + filterstring;
//   console.log(url.substring(0, url.length - 1));
//   return this.http.get<T[]>(url.substring(0, url.length - 1), { headers: this.headers })
//     .pipe(
//       tap(data => console.log()),
//       // catchError(this.handleError)
//     );
// }


export default BaseService;