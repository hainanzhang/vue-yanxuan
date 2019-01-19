import API from '../../api'
import functionAxios from '../ajax/axios.js'



function listmap(){
	return functionAxios.getAxiosdata(API.CATEGOEY_LIST_URL)
}
function group(){
	return functionAxios.getAxiosdata(API.CATEGOEY_LIST_GROUP_URL)
}



export default{
	listmap,
	group
}
