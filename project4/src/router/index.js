/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NotFound from '../components/NotFound'
import Picture from '../components/Picture'
import Carousel from '../components/Carousel'
import Home from '../components/Home'
import MyPage from '../components/myPage/MyPage'
import children1 from '../components/myPage/children1'

import Shopping from '../components/shopping/shopping'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home'
    },
    {
      path: '*',
      name: 404,
      component: NotFound
    },
    {
      path: '/home',
      aliad: '/Home',
      name: 'Home',
      component: Home,
      children: [{
    	  path: '/myPage',
    	  name: 'myPage',
    	  component: MyPage,
        children: [{
          path: '/children1',
          name: 'children1',
          component: children1
        },
        {
          path: '/children2',
          name: 'children2',
          component: children2
        },
        {
          path: '/children3',
          name: 'children3',
          component: children3
        }]
    	}]
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    }]
})
/* eslint-disable */