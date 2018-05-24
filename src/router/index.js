import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Menu from '@/pages/Menu'
import UserSettings from '@/pages/UserSettings'
import UserEmailsSubscriptions from '@/pages/UserEmailsSubscriptions'
import UserProfile from '@/pages/UserProfile'
import UserProfilePreview from '@/pages/UserProfilePreview'
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
      path: '/index',
      name: 'Index',
      component: Menu,
      redirect: '/First',
      children: [{
        path: '/First',
        name: 'First',
        component: First
      }]
    },
    {
      path: '/settings',
      // 你也可以在顶级路由就配置命名视图
      component: UserSettings,
      children: [
        {
        path: 'emails',
        component: UserEmailsSubscriptions
        },
        {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }]
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
