import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';

import Quizz from '../components/Quizz.vue';
import About from '../components/About.vue';
import SearchChords from '../components/SearchChords.vue';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    { path: '/', component: SearchChords },
    { path: '/quizz', component: Quizz },
    { path: '/about', component: About },
  ],
});
