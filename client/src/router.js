import Vue from 'vue';
import Router from 'vue-router';
import Problems from './components/Problems.vue';
import Code from './components/Code.vue';
import Ping from './components/Ping.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Problems',
      component: Problems,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/code/:id',
      name: 'Code',
      component: Code,
      props: true,
    },
  ],
});
