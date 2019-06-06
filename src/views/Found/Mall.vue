<template>
    <div class="mall">
        <inforHead></inforHead>
        <div class="mainCon">
            <section class="module no-margin-bottom">
                <div class="swiper-container find-Poster module-scoll">
                    <ul class="swiper-wrapper clearfix">
                        <li class="swiper-slide pull-left">
                            <router-link 
                                to="/home"
                                v-for="(banner,index) in banners"
                                :key="index"
                            >
                                <img :src="'http://movie.miguvideo.com/'+banner.imgSrc" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="find-Menu">
                    <ul class="clearfix">
                        <router-link
                            v-for="moviearound in moviearounds"
                            :key="moviearound._id"
                            to="/home"
                        >
                            <li class="pull-left">
                                <img :src="'http://movie.miguvideo.com/'+moviearound.imgSrc" alt="">
                                <span class="block font-15 grey">{{moviearound.name}}</span>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </section>
        </div>
        <router-link class="title" tag="div" to="">
            <span>商城</span>
            <i class="fa fa-chevron-right"></i>
        </router-link>
        <div class="box">
        <router-link 
            class="container" 
            tag="div" 
            to=""
            v-for="movieCard in movieCards"
            :key="movieCard._id"
        >
        <div class="t"><img :src="'http://movie.miguvideo.com/'+movieCard.imgSrc" alt=""></div>
        <div class="b">
        <p>{{movieCard.name}}</p>
        <span>￥{{movieCard.movie_price}}</span>
        </div>
        </router-link>
    </div>
    </div>
</template>

<script>
import inforHead from "./inforHead"
export default {
    components:{
        inforHead
    },
     data(){
        return{
            movieCards:[],
            moviearounds:[],
            banners:[]
        }
    },
    created(){//Vue.prototype
        this.$http.get("/api/migu/find/store",{
          
        }).then(res=>{
            
            this.movieCards = res.data.data.object_list[2].list;
            //console.log(this.movieCards);
            this.moviearounds = res.data.data.object_list[1].list;
            this.banners = res.data.data.object_list[0].list;
            //console.log(this.moviearounds);
        })
    }


}
</script>

<style lang="scss" scoped>
    .mainCon{
        margin-bottom:0 !important;
        padding-bottom: 0;
        background: #efefef;
        .module{
            margin-bottom: 10px;
            background:#fff;
            border-top:1px solid #f1f1f1;
            border-bottom:1px solid #f1f1f1;
            position: relative;
            .find-Poster{
                position: relative;
                font-size: 0;
            }
            .swiper-container{
                margin:0 auto;
                overflow: hidden;
                z-index:1;
            }
        }
    }
    .swiper-wrapper{
        transform: translate3d(0,0,0);
        position: relative;
        width: 100%;
        height: 100%;
        z-index:1;
        display: flex;
        box-sizing: content-box;
        .pull-left{
            float: left;
        }
        .swiper-slide{
            flex-shrink: 0;
            width:100%;
            height: 100%;
            position: relative;
            a{
                img{
                width:100%;
                height: 125px;
            }
            }
        }
    }
    .find-Menu{
        padding:12px 0;
        li{
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            img{
                width: 25px;
            }
            span{
                height: 24px;
                line-height: 24px;
            }
            .grey{
                color: #666;
            }
            .font-15{
                font-size: 15px !important;
            }
            .block{
                display: block !important;
            }
        }
    }
     .title{
       display:flex;
        justify-content: space-between;
        span{
             margin-top:10px;
            padding-left: 8px;
            font-size: 16px !important;
            height:25px;
            line-height: 25px;
            color: #666;
            border-left:3px solid red
        }
        i{
            margin-top:15px;
            margin-right:10px;
        }
    }
    .box{
        margin-top:10px;
        width:100%;
        .container{
            width:50%;
            float:left;
            padding-bottom: 5px;
            background: #fff;
            height:1.5rem;
            .t img{
                width:100%;
            }
            .b {
                
                span{
                    color:#F74444;
                    margin-top:10px;
                    margin-left: 11px;
            }
                p{
                    margin-left: 11px;
                }
            }
        }
        }

</style>

