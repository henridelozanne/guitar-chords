import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';

import Quizz from '../components/Quizz.vue';
import About from '../components/About.vue';
import SearchChords from '../components/SearchChords.vue';
import FindChordName from '../components/FindChordName.vue';
import Tuner from '../components/Tuner.vue';

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
