import axios from 'axios'

class BaseService{
  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.url = this.baseUrl+'/'+this.endPoint
  }

  async getAll(formData){
      const url = this.url
      let res = await  axios.post(url, formData)  
      return res.data;
      // .then(function(response){
      //   console.log(response.data);
      // })
      // .catch(function(error){
      //   console.log(error);
      // });

  }
  
  // getAllAuth(){

  // }

  // getById(){

  // }

  // getByIdAuth(){

  // }

  // edit(){

  // }

  // editAuth(){

  // }
}

export default BaseService;