import axios from 'axios';
import {API_KEY} from '../constans/api';

class GetDataApi {
    async getData(url){
        try{
      const res = await axios.get(url, {
            params: {
                apikey: API_KEY,
                limit: 50
            }
        });
        return res.data.data.results;
    }catch(error){
        console.log(error.message);
        return false;
    }

     }
 }
 export const getDataApi = new GetDataApi();

 
 
