import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/filter/vueFilter.service";
import WebsocketService from "@/service/websocket/Websocket.service";
Vue.config.productionTip = false;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();
Vue.use(ElementUI);
var GlobalVueIns = new Vue({
    router: router,
    store: store,
    render: function (h) { return h(App); }
}).$mount('#app');
$(document).ready(function () {
    console.log('hello');
});
new WebsocketService(GlobalVueIns.$eventHub);
//# sourceMappingURL=main.js.map