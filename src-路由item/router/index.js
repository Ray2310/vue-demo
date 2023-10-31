import Vue from 'vue'
import VueRouter from "vue-router";
//1. 导入
import Layout from '@/views/Layout'
import ArticleDetail from '@/views/ArticleDetail'
//1.1 导入二级路由
import Article from '@/views/Article' 
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'

Vue.use(VueRouter)

//2. 配置路由
const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      component: Layout ,
      redirect: '/article',
      //2.1 配置当前路由嵌套的二级路由
      children: [
        {
          path : '/article',
          component: Article
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: 'collect',
          component: Collect
        },
        {
          path: 'user',
          component: User
        }
      ]
    },
    {path: '/detail/:id', component: ArticleDetail}
  ]
})

export default router