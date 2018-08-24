import Vue from 'vue';
import App from './app.vue';
import router from './router/index.js';

import '../node_modules/reset-css/reset.css';
import './assets/border.css';

import './assets/images/[fox]wallls.com_179505.jpg';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App),
  router
}).$mount(root);