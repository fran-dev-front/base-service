class BaseService{
  constructor(baseUrl, endPoint) {
    this.baseUrl = baseUrl;
    this.endPoint = endPoint;
    this.url = this.baseUrl+'/'+this.endPoint
  }

  params = {
    method: "GET",
    headers: {
      "Content-Type":"application/json"
    },
  }

  async getAll(formData){
    try {
      const url = this.url
      const params = {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
        body: JSON.stringify(formData)
      }
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
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