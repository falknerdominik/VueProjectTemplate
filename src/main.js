import Vue from 'vue';
import App from './App.vue';

import Router from './Router';
import Store from './stores/Store';

import ServicePlugin from './services/Services';

import PlainLayout from './layouts/PlainLayout'
import MenuLayout from './layouts/MenuLayout'

// vue global config
Vue.config.productionTip = false;

// vue plugins
Vue.use(ServicePlugin);

// vue global components
// layouts here for App.vue
Vue.component('PlainLayout', PlainLayout);
Vue.component('MenuLayout', MenuLayout);

// noinspection JSUnusedGlobalSymbols
new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app');
