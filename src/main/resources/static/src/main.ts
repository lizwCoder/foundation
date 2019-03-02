import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/filter/vueFilter.service"

import * as $ from 'jquery'


import WebsocketService from "@/service/websocket/Websocket.service"

Vue.config.productionTip = false

Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

let GlobalVueIns = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




$(document).ready(function(){
    console.log('hello')
});



new WebsocketService(GlobalVueIns.$eventHub);


