
import axios from 'axios'
import Vue from 'vue'



function getAxios(url, obj = {}) {
	return new Promise((resolve, reject)=>{
        axios.get(url, {
            obj
        })
        .then(response=>{
            //console.log(response);
            if(response.data.status){
            	console.log('11')
            }
            else{
                //请求数据成功
                //console.log(response)
                resolve(response.data.data);
            }
        })
        .catch(error=>{
            console.log(error);
            
        })
    })
	
		
	
	
		
}



function getAxiosdata(url, obj = {}) {
	return new Promise((resolve, reject)=>{
        axios.get(url, {
            obj
        })
        .then(response=>{
            //console.log(response);
            if(response.data.status){
            	console.log('11')
            }
            else{
                //请求数据成功
                //console.log(response)
                resolve(response);
            }
        })
        .catch(error=>{
            console.log(error);
            
        })
    })
	
		
	
	
		
}

export default {
	getAxios,
	getAxiosdata
}
