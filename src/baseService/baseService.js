import React, {useState} from 'react'
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
    console.log('!!error', error)
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
      return response;
    }catch (error){
      console.log('baseservice',error.message)
      return error.message;
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
      return error;
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
      return response;
    }catch (error){
      return error;
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
      return result
    }catch (error){
      return error;
    }
  }

  async edit(formData, logout){
    try{
      const params = {
        method: "PUT",
        url: `${this.url}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
      let result = await authFetch(this.url, params, logout) 
      return result
    }catch (error){
      return error;
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
      return response;
    }catch (error){
      return error;
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
      return response;
    }catch (error){
      return error;
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
      return response;
    }catch (error){
      return error;
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
      return response;
    }catch (error){
      return error;
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
      return error;
    }
  }

  async deleteAuth(id, logout){
    const params = {
        method: "DELETE",
        url: `${this.url}/${id}`,
        headers: {
          "Content-Type":"application/json"
        },
      }
    try{
      let response = await authFetch(this.url, params, logout)  
      return response;
    }catch (error){
      return error;
    }
  }

  async deleteAuthForm(id, formData,logout){
    const params = ''
    if(id){
        params = {
        method: "DELETE",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      }
    }else{
        params = {
        method: "DELETE",
        url: `${this.url}`,
        data: formData,
        headers: {
          "Content-Type":"application/json"
        },
      } 
    }
    try{
      let response = await authFetch(this.url, params, logout)  
      return response;
    }catch (error){
      return error;
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
      return error;
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
      return response;
    }catch (error){
      console.log(error)
      return error;
    }
  }
  async uploadDoc(id, formData, logout){
    let urlParams = this.url
    try{
      const params = {
        method: "PUT",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"multipart/form-data",
        },
      }
      let response = await authFetch(urlParams, params, logout)   
      return response;
    }catch (error){
      return error;
    }

  }

  async uploadImg(id, formData, logout){
    let urlParams = this.url
    try{
      const params = {
        method: "POST",
        url: `${this.url}/${id}`,
        data: formData,
        headers: {
          "Content-Type":"multipart/form-data",
        },
      }
      let response = await authFetch(urlParams, params, logout)   
      return response;
    }catch (error){
      return error;
    }

  }

}
export default BaseService;