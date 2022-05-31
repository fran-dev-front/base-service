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
    if (error.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    return Promise.reject(error);
});


export class BaseService{
  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.urlFilter = [];
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
  async postDataAuth(formData, logout){
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
  async editDataAuth(id, formData, logout){
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
  // baseurl/bussines?id=1&username=memo&page=0
  async filter(filters, logout){
    let startOfsString = '?'
    filters.map((value) => {
      this.urlFilter.push(value['key']+'='+value['value'])
    })
    let tempurl = this.urlFilter.join('&')
    console.log(`${this.url}${startOfsString+tempurl}`)
    try{
      const params = {
        method: "GET",
        url: `${this.url}${startOfsString+tempurl}`,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let response = await authFetch(this.url, params, logout)   
      return response.data;
    }catch (error){
      print(error)
      return error;
    }
  }

}


export default BaseService;