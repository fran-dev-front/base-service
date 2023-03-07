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

/////////////////////postData////////////////////////
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

/////////////////////postData with auth////////////////////////
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

/////////////////////edit data////////////////////////
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

/////////////////////postData Auth////////////////////////
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

<<<<<<< HEAD
/////////////////////Get all ////////////////////////
=======
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


>>>>>>> 0b81cb8662f7b8e333dfd9e5c08e70d3ccdad665
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

/////////////////////Get all auth////////////////////////
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

/////////////////////Get by id////////////////////////
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

/////////////////////Get by id auth////////////////////////
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

/////////////////////Get by id////////////////////////
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

/////////////////////delete auth////////////////////////
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

/////////////////////delete auth////////////////////////
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

/////////////////////delete////////////////////////
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

/////////////////////Get by id auth////////////////////////
  async filter(filters, logout=''){
    let response = ''
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
      if(logout != ''){
        response = await authFetch(this.url, params, logout)
      }else{
        response = await axios(params)
      }  
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

  async uploadImg(formData, logout){
    let urlParams = this.url
    try{
      const params = {
        method: "POST",
        url: `${this.url}`,
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