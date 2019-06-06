<template>
    <div class="activity" style="width:100%">
        <!-- header -->
         <inforHead></inforHead>
         <div class="mainCon">
             <section class="module">
                 <div class="swiper-container find-Poster module-scoll swiper-container-horizontal swiper-container-android">
                    <ul class="swiper-wrapper clearfix">
                        <li class="swiper-slide pull-left swiper-slide-active">
                                <img src="@/assets/260.jpg" alt="">
                        </li>
                    </ul>
                </div>
                <div class="activity-types clearfix">
                    <router-link to="/home">
                        <div class="pull-left activity-types-name day-s">
                            <h3 class="font-16 grey">每日签到</h3>
                        </div>
                    </router-link>
                    <div class="font-16 grey pull-left activity-types-name">
                        <router-link to="/home">
                            <div class="seeFilm-card as299">积分兑影卡</div>
                        </router-link>
                         <router-link to="/home">
                            <div class="seeFilm-card as761">光大联名卡</div>
                        </router-link>
                    </div>
                </div>
             </section>
             <section class="module">
                 <div class="module-name font-16 grey">
                     <span>活动</span>
                     <span class="inline-block pull-right font-14 light-grey moreCon"></span>
                    <ul>
                        <li>
                            <div class="find-Poster content-pic swiper-container-horizontal swiper-container-android">
                                <img src="@/assets/155.jpg" alt="">
                            </div>
                            <div class="activity-detail clearfix">
                                <span class="inline-block pull-left font-14 grey">影迷福利日周四、周五第二张9.9元</span>
                                <span class="inline-block pull-left font-12 light-grey">2018-01-01~2018-12-31</span>
                            </div>
                        </li>
                        <li>
                            <div class="find-Poster content-pic swiper-container-horizontal swiper-container-android">
                                <img src="@/assets/385.jpg" alt="">
                            </div>
                            <div class="activity-detail clearfix">
                                <span class="inline-block pull-left font-14 grey">七夕约票买二免一</span>
                                <span class="inline-block pull-left font-12 light-grey">2018-08-14~2018-08-19</span>
                            </div>
                        </li>
                        <li>
                            <div class="find-Poster content-pic swiper-container-horizontal swiper-container-android">
                                <img src="@/assets/694.jpg" alt="">
                            </div>
                            <div class="activity-detail clearfix">
                                <span class="inline-block pull-left font-14 grey">520约票，七夕再来，我们还为你免单！</span>
                                <span class="inline-block pull-left font-12 light-grey">2018-05-18~2018-05-20</span>
                            </div>
                        </li>
                    </ul>
                 </div>
             </section>
         </div>
    </div>
</template>

<script>
import inforHead from "./inforHead"
export default {
     components:{
        inforHead
    },
}
</script>

<style lang="scss" scoped>
.swiper-container-android{
    img{
        width:100%;
    }
}
 .find-Poster{
        position: relative;
        font-size: 0;
        
            img{
            width:100%;
            height: 125px;
        
        }
    }
    .mainCon{
        margin-bottom: 0 !important;
        padding-bottom: 0;
        background: #efefef;
        padding-top:42px;
        .module{
            margin-bottom:10px;
            background: #fff;
            border-top:1px solid #f1f1f1;
            border-bottom:1px solid #f1f1f1;
            position: relative;
            padding-top: 5px;
           .module-name{
               background: url("../../assets/module-icon.png") no-repeat 0 11px;
               background-size: 3px 23px;
               padding-left:8px;
               padding-right:12px;
               height: 45px;
               line-height: 45px;
           }
           .day-s{
              background: url("../../assets/957.png") no-repeat;
              background-size: 100% auto;
           }
           .as299{
               background: url("../../assets/299.png") no-repeat;
               background-size: auto 100%;
                width: 100%;
           }
           .as761{
               background: url("../../assets/761.png") no-repeat;
               background-size: auto 100%;
              width: 100%;
           }
            .swiper-container{
                margin:0 auto;
                overflow: hidden;
                z-index: 1;
            }
            .swiper-wrapper{
                transform: translate3d(0,0,0);
                position: relative;
                width: 100%;
                height: 100%;
                z-index: 1;
                display: flex;
                box-sizing: content-box;
            }
            .pull-left{
                float: left;
            }
            .swiper-slide{
                flex-shrink: 0;
                height: 100%;
                position: relative;
            }
        }
    }
    .activity-types-name{
        width:50%;
        height: 120px;
        background-size: 100% auto;
        h3{
            height: 60px;
            line-height: 60px;
            padding-left:12px;
        }
        .grey{
            color:#666;
        }
    }
    .seeFilm-card{
        height: 60px;
        line-height: 60px;
        padding-left: 12px;
    }
    .font-16{
        font-size: 16px !important;
    }
    .light-grey{
        color: #999;
    }
    .font-14{
            font-size: 14px !important;
    }
    .inline-block{
        display: inline-block !important;
    }
    .pull-right{
        float: right;
    }
    .activity-detail{
        padding:0 12px;
        span{
            width: 50%;
            height: 40px;
            line-height: 40px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &:last-child{
                text-align: right;
            }
        }
        
    }
    .font-16{
        font-size: 16px !important;
    }
</style>

