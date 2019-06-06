<template>
    <div class="found">
       
        <router-view></router-view>
       <!--  <router-link to="./found/infor"> 资讯</router-link>
        <router-link to="./found/topic">话题</router-link>
        <router-link to="./found/mall">商城</router-link>
        <router-link to="./found/yticket">约票</router-link> -->
        <!--  <Tabbar></Tabbar> -->
    </div>
</template>
<script>
//import Tabbar from "@/components/Tabbar"
import Infor from "./Infor"
import Topic from "./Topic"
import Mall from "./Mall"
export default {
    components:{
        //Tabbar
        Infor,Topic,Mall
    }
}
</script>
<style lang="scss" scoped>

</style>
