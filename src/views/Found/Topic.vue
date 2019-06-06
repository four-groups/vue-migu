<template>
    <div class="topic">
         <!-- head  start -->
       <inforHead></inforHead>
        <!-- head end -->
        <div class="module">
            <!-- 话题列表 start -->
           <!--  <div class="module-con">
                <router-link to="/found">
                    <div class="find-Poster">
                        <img src="@/assets/list.jpg" alt="" class="lazy">
                        <div class="mongoliaLayer"></div>
                        <div class="topic-con">
                            <div class="topic-btn font-13 white">话题讨论</div>
                            <h3 class="font-18 white">看《追龙II》之前，你得先知道这些</h3>
                            <p class="font-13 white">
                                <span class="topicNum inline-block">已有0位小伙伴围观</span>
                            </p>
                        </div>
                    </div>
                </router-link>
                <div class="handle clearfix"></div>
            </div> -->
            <!-- 话题 end -->
            <TopicItem></TopicItem>

        </div>
        
    </div>
</template>

<script>
import TopicItem from "./TopicItem"
import inforHead from "./inforHead"
export default {
    components:{
        TopicItem,inforHead
    }
}
</script>

<style lang="scss" scoped>
    .module{
        margin-bottom: 10px;
        background: #fff;
        border-top:1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        position: relative;
        padding-top: 45px;
        .module-con{
            width:100%;
            height:auto;
        }
       
    }
</style>
