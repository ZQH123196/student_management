import Vue from 'vue';
import App from './app.vue';

import './assets/images/[fox]wallls.com_179505.jpg';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root);