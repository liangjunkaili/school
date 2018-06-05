import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Index from '@/pages/index'
import { error } from 'util';

Vue.use(Router)
var flag = 1;

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path:'/Index',
      name:'Index',
      component:Index
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
router.beforeEach((to, from, next) => {

  if(flag === 1){
    next();
  }

  if (flag === 2) {
    next(false);
  }

  if (flag === 3) {
    next('/');
  }

  if (flag === 4) {
    next(error);
  }

})
router.afterEach((to,from) => {
  window.scrollTo(0,0);
})
export default router
