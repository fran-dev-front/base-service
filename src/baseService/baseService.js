import axios from 'axios'
import { authFetch } from './fetch'

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


class BaseService{

  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.url = this.baseUrl+'/'+this.endPoint
  }

  async Post(formData){
    try{
      let url = this.url
      let response = await axios.post(url, formData)  
      return response;
    }catch (error){
      return null;
    }
  }

  async PostAuth(formData, logout){
    try{
      let url = this.url
      let response = await authFetch(url, params, logout);//axios.post(url, formData)  
      return response;
    }catch (error){
      return null;
    }
  }
  
  async getAllAuth(){
     
    const url = this.url
      let res = await axios.post(url, formData)  
      .then(function(response){
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  async getById(){
    const url = this.url
    let res = await axios.post(url, formData)  
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  async getByIdAuth(){
    const url = this.url
    let res = await axios.post(url, formData)  
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  async edit(){
    const url = this.url
    let res = await axios.post(url, formData)  
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  async editAuth(){
    const url = this.url
    let res = await  axios.post(url, formData)  
    .then(function(response){
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }
}

export default BaseService;