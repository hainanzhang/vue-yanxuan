import API from '../../api'
import functionAxios from '../ajax/axios.js'


function catelist(){
	return functionAxios.getAxios(API.CATE_LIST_URL)
}
function focuslist(){
	return functionAxios.getAxios(API.HOME_BANNER_LIST_URL)
}
function topdata(){
	return functionAxios.getAxios(API.POLICY_LIST_URL)
}
function categorylist(){
	return functionAxios.getAxios(API.HOME_CATE_LIST_URL)
}
function categoryList(){
	return functionAxios.getAxios(API.HOME_ACTIVITY_URL)
}


function tagList(){
	return functionAxios.getAxios(API.HOME_TAG_LIST_URL)
}

function catehotsell(){
	return functionAxios.getAxios(API.HOME_CATE_HOT_SELL_URL)
}


function popularlist(){
	return functionAxios.getAxios(API.HOME_POPULAR_LIST_URL)
}


function flashsale(){
	return functionAxios.getAxios(API.HOME_FLASH_SALE_URL)
}

function newitemlist(){
	return functionAxios.getAxios(API.HOME_NEW_ITEM_URL)
}

function shoppingguide(){
	return functionAxios.getAxios(API.HOME_SHOPPING_GUIDE_URL)
}











export default{
	catelist,
	focuslist,
	topdata,
	categorylist,
	categoryList
}

