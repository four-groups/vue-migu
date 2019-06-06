<template>
       <div class="head">
            <router-link to="/found">
                <img src="@/assets/hisBack.png" alt="" class="hisBack">
            </router-link>
            <span class="font-17 grey">发现</span>
        </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
     .head{
        border-bottom: 1px solid #E6E6E6;
        height: 44px;
        line-height: 44px;
        padding: 0;  
        position: fixed;
        left:0;
        right:0;
        z-index: 100;
        background: #fff;
        text-align: center;
        .hisBack{
           position: absolute;
            top: 10px;
            left: 12px;
            width: 24px; 
        }
        .grey{
            color:#666;
        }
        .font-17{
            font-size:17px !important;
        }
    }
</style>

