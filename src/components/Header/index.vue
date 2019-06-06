<template>
    <div class="app-header" v-if="isShow">
       <div class="left">
            <i :class="['fa', 'fa-'+icon]"></i>
           <span>{{title}}</span>
       </div>
       <div class="right">
           <img src="@/assets/search_grey.png" alt="">
           <span>搜索</span>
       </div>
    </div>
</template>
<style lang="scss" scoped>
   .app-header{
        width:3.75rem;
        height:50px;
        line-height: 50px;
       
        color:#000;
        display: flex;
        justify-content: space-between;
        padding:0 .2rem;
        background:#F74444;
        opacity: 0.6;
        /* position: fixed;
        z-index:10; */
        .right{
            position: relative;
            img{
                width:30px;
                height: 30px;
                position: absolute;
                left:-40px;
                top:10px;
                
            }
        }
         i{
            font-size: 1.2em;
            padding-right:0.1rem;
        }
    }
</style>
<script>
import router from "@/router"
export default{
data(){
    return{
        icon:'home',
        title:"咪咕首页",
        isShow:true
    }
},
created(){  
    router.beforeEach((to,from,next)=>{
         switch (to.name) {
                case "home":
                    this.title = "咪咕首页"
                    this.icon = "google-wallet"
                    this.isShow = true
                    break;
                case "ticket":
                    this.title = "购票"
                    this.icon = "ticket"
                    this.isShow = true
                    break;
                case "found":
                    this.title = "发现"
                    this.icon = "ravelry"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "我的"
                    this.icon = "cog"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;
            }
        next()
    })
    }
}
</script>
