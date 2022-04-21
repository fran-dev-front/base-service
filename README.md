# base-service

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/base-service.svg)](https://www.npmjs.com/package/base-service) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save base-service-fran-dev
```

## Usage

The main purpose is to create a class ob the basic methods for the API requests.
Create a service with your BASE_PATH and API endpoint and you will access to the following methods.
All methods use Axios request.  

-> postData(formdata)
   -> formdata is the data send to the API.
   -> postData has the POST method. 
   -> headers : "Content-Type":"application/json"
   -> Url pass as parameter on the constructor of your class. (endpioint of api)


Create (service).js file

```jsx

//Methods of BaseService

  async postData(formData){}
  async postDataAuth(formData, logout){}
  async getAll(page, numberOfItems){}             //page & numberOfItems are optional defaults = ""
  async getAllAuth(logout, page, numberOfItems){} //page & numberOfItems are optional defaults = ""
  async getAllById(id){}          
  async getAllByIdAuth(id, logout){}
  async getById(id){}
  async deleteAuth(id, logout){}
  async delete(id, logout){}

/////////////////////////////////

//service.js
import { BaseService } from 'base-service-fran-dev'
import { BASE_URL } from '../constants/constants'

export default class Service extends BaseService(){
  constructor(){
    const baseUrl = BASE_URL;
    const endpoint = "endpoint"
    super(baseUrl, endpoint);
  }
}
//////////////////////

//App.js

import Service from './service.js' //import service

async function functionName(){
    let Service = new Service();
    let response = await Service.postData({data})
}
logout()

```

## License

MIT © [fran-dev](https://github.com/fran-dev)
