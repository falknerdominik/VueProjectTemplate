import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './stores/Store'
import ServicePlugin from './services/Services'

Vue.config.productionTip = false;

Vue.use(ServicePlugin);

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
