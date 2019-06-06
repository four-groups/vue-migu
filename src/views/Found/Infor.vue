<template>
    <div class="infor">
        <!-- head  start -->
        <inforHead></inforHead>
        <!-- head end -->
        <!-- 主体  start -->
        <div class="mainCon">
            <div class="loop-module">
                <!-- 资讯 -->
                <div class="module">
                    <div class="module-con news">
                        <inforItem></inforItem>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>7
import inforItem from "./inforItem"
import inforHead from "./inforHead"
export default {
   
    components:{
        inforItem,inforHead
    }
}
</script>

<style lang="scss" scoped>
   
    .mainCon{
        background: #efefef;
        margin-bottom: 44px;
/*         padding: 45px 0 10px 0;
 */        .module{
            margin-bottom: 10px;
            background: #fff;
            border-top:1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            position: relative;
            .module-con{
                width:100%;
                height: auto;
                .loop-time{
                    height: 35px;
                    line-height: 35px;
                    padding: 0 12px;
                    background: #efefef;
                }
                
            }
        }
    }
                    
</style>
