import Vue from 'vue';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faPlus, faClipboardList, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// ...

import Buefy from 'buefy';
import store from './store';
import router from './router';
import App from './App.vue';
import 'buefy/dist/buefy.css';

library.add(faPlus, faClipboardList, faFileImport);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
