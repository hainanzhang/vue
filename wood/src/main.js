import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Icon,DatetimePicker,SwitchCell,SwipeItem,Swipe,Popup  } from 'vant';
import BScroll from 'better-scroll'

import scroller from '@common/components/scroller/scroller'
Vue.component(scroller.name, scroller)

Vue.prototype.$center = new Vue();


Vue.use(Icon).use(DatetimePicker).use(SwitchCell).use(Swipe).use(SwipeItem).use(Popup);


Vue.config.productionTip = false

new Vue({
	BScroll,
	router,
  render: h => h(App),
  //router
  //Scroll
}).$mount('#app')
