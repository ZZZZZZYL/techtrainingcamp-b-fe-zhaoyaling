import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home=()=>import("@/components/Home")

const Toutiao=()=>import('@/components/pages/Toutiao')
const My=()=>import('@/components/pages/My')
const Search=()=>import('@/components/pages/Search')
const Searchresult=()=>import('@/components/pages/Searchresult')
export default new Router({
  routes: [
    {
      path: '/',
     redirect:{'name':'home'}
    }, 
    {
      path: '/',
      name: 'home',
      component: Home
    },  {
      path: '/toutiao',
      name: 'toutiao',
      component: Toutiao
  },{
      path: '/my',
      name: 'my',
      component: My
    },{
      path: '/search',
      name: 'search',
      component: Search,
      
    }
  ]
})
