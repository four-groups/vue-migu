<template>
    <div class="tabbar">
        <!-- 可以使用数据写 -->
        <TabItem txt='看片' mark='home' :sel="selected" @changeSelected="changeSelected"> 
            <img slot="normalImg" src="@/assets/normal-home.png" alt="">
            <img slot="activeImg" src="@/assets/home-active.png" alt="">
        </TabItem>
        <TabItem txt='购票' mark='ticket' :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="@/assets/normal-tickets.png" alt="">
            <img slot="activeImg" src="@/assets/tickets-active.png" alt="">
        </TabItem>
        <TabItem txt='发现' mark='found' :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="@/assets/normal-find.png" alt="">
            <img slot="activeImg" src="@/assets/find-active.png" alt="">
        </TabItem>
        <TabItem txt='我的' mark='mine' :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="@/assets/normal-member.png" alt="">
            <img slot="activeImg" src="@/assets/mine-active.png" alt="">
            </TabItem> 
    </div>
</template>

<script>
import TabItem from './Tabitem'
export default {
    data(){
        return {
            selected:this.$route.name
        }
    },
    methods:{
        changeSelected(val){
            this.selected = val
        }
    },
    components:{
        TabItem
    }
}
</script>
<style lang='scss' scoped>
.tabbar{
    position: fixed;
    bottom:0;
    left: 0;
    height: 60px;
    width:100%;
    display: flex;
    border-top:1px solid #ccc;
    align-items: center;
    background:#fff;
}
</style>
