import Vue from 'vue'
import Router from 'vue-router'
import classification from './classificationRouter'
import identifyingObjects from './identifyingObjectsRouter'
import shippingCart from './shoppingCartRouter'
import my from './myRouter'
import home from './homeRouter'

Vue.use(Router);



export default new Router({
	mode: 'history',
    routes: [
    	home,
	  	classification,
    	identifyingObjects,
    	shippingCart,
    	my
    ]
})