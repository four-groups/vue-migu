<template>
    <div class="topicItem">
        <div class="module-con">
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
            <div class="handle clearfix">
                <div class="pull-right">
                    <div class="inline-block">
                        <i class="fa fa-thumbs-o-up"></i>
                        <span class="font-14 high-grey pull-right">0</span>
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
     .find-Poster{
            position: relative;
            font-size: 0;
            img{
                height: 125px;
                width:100%;
            }
            .mongoliaLayer{
                position: absolute;
                top:0;
                right: 0;
                left:0;
                bottom:0;
                z-index: 50;
                background: rgba(0,0,0,0.5);
            }
            .topic-con{
                position: absolute;
                top:22%;
                left:15%;
                text-align: center;
                width:70%;
                z-index: 100;
                h3{
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .topic-btn{
                    width:70px;
                    height:25px;
                    line-height: 25px;
                    text-align: center;
                    border:1px dashed #fff;
                    border-radius:15px;
                    margin:0 auto 15px; 
                }
                .white{
                    color:#fff;
                }
                .font-13{
                    font-size: 13px !important;
                }
                .font-18{
                    font-size: 18px !important;
                }
                p{
                    .topicNum{
                        width:70%;
                        margin:0 auto;
                    }
                    .inline-block{
                        display: inline-block !important;
                    }
                }
            }
        }
        .handle{
            width:100%;
            line-height: 35px;
            .pull-right{
                float: right;
                margin-right: 5px;
                .inline-block{
                    display: inline-block !important;
                    .fa-thumbs-o-up{
                        display: inline-block;
                        width:17px;
                        height: 17px;
                        font-size: 18px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        padding-right: 1px;
                    }
                    .font-14{
                        font-size: 14px !important;
                    }
                }
            }
        }
</style>

