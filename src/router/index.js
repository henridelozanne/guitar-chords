import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';

import Quizz from '../pages/Quizz.vue';
import About from '../pages/About.vue';
import SearchChords from '../pages/SearchChords.vue';
import FindChordName from '../pages/FindChordName.vue';
import Tuner from '../pages/Tuner.vue';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    { path: '/', component: SearchChords },
    { path: '/find-chord-name', component: FindChordName },
    { path: '/quizz', component: Quizz },
    { path: '/about', component: About },
    { path: '/tuner', component: Tuner },
  ],
});
