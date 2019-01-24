import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import myRouter from './my' 
import homeRouter from './home'
import classificationRouter from './classification'
import shoppingcartRouter from './shoppingcart'

export default new Router({
	mode: 'history',
    routes: [
    	myRouter,
    	homeRouter,
    	classificationRouter,
    	shoppingcartRouter
    ]
})