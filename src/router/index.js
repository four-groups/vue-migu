import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from "./home"
import found from "./found"
import mine from "./mine"
import ticket from "./ticket"
export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    home,found,mine,ticket,
    {path:"/notfound",component:()=>import("@/views/Notfound")},
    
    {path:"*",redirect:"/notfound"}
  ]
})
