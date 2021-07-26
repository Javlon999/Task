import axios from 'axios';

import config from '../../config/index';


const request =axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://api.itv.uz/api/content/main/8',
    
  })
 
  request.defaults.params={};
  request.defaults.params['_f']='json';
  request.defaults.params['api_key']=config.API_KEY
  request.defaults.headers.common['Accept']='application/json';
  request.defaults.headers.common['Content-Type']='application.json; charset=utf-8';

  
  request.interceptors.response.use(
    (response)=>response,
    (error)=>{
      return Promise.reject(error);
    }
  );
  export default {
    request,
  }
      