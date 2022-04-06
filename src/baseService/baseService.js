import axios from 'axios'

class BaseService{
  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.url = this.baseUrl+'/'+this.endPoint
  }

  async getAll(formData){
      const url = this.url
      await axios.post(url, formData)  
      .then(function(response){
        console.log(response.data);
        return response.data
      })
      .catch(function(error){
        console.log(error);
      });
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