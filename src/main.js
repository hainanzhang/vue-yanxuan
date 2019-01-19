import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from './components/component'
//import Vant from 'vant'



import BScroll from 'better-scroll'
  
 
Vue.prototype.$center = new Vue();
//Vue.use(Vant);
Vue.use(common);

Vue.config.productionTip = false

new Vue({
	BScroll,
	router,
  render: h => h(App),
  //router
  //Scroll
}).$mount('#app')
