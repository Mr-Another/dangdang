import Vue from 'vue'
import Router from 'vue-router'
import index from "../pages/index"
import Carts from "../pages/Carts"
import Hunt from "../pages/Hunt"
import Find from "../pages/Find"
import Mine from "../pages/Mine"
import RankList from "../pages/RankList"
import Shop from "../pages/Shop"
import Goods from "../pages/Goods"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:index},//redirect 配置首页
    {path: '/Carts',component:Carts},
    {path: '/Hunt',component:Hunt},
    {path: '/Find',component:Find},
    {path: '/Mine',component:Mine},
    {path: '/RankList',component:RankList},
    {path: '/Shop',component:Shop},
    {path: '/Goods',component:Goods},
  ]
})
