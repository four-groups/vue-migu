<template>
    <div class="inforItem1">
         <li>
                <a href="">
                    <div class="new-con clearfix">
                        <div class="pull-left news-name font-14 grey">{{infor.name}}</div>
                        <div class="pull-right news-pic">
                            <img v-lazy="'http://movie.miguvideo.com'+infor.img1" alt="">
                        </div>
                    </div>
                </a>
                <div class="news-origin clearfix">
                    <div class="pull-left font-12 light-grey">{{infor.contForm}}</div>
                    <div class="pull-right clearfix Fabulous">
                        <img src="@/assets/up.png" alt="" class="thumbs-up pull-left">
                        <span class="font-14 high-grey pull-right">{{infor.__v}}</span>
                    </div>
                </div>
            </li>
    </div>
</template>

<script>
export default {
    /* props:["limit","page"], */
    props:{
        infor:Object
    }
}
</script>

<style lang="scss" scoped>
    .new-con{
        width: 100%;
        .news-name{
            width: 66%;
        }
        .pull-left{
            float: left;   
        }
        .news-pic{
            width: 32%;
            img{
                width:100%;
            }
        }
        .pull-right{
        float: right;
    }
     }
     .thumbs-up{
         width: 22px;
         margin-right: 8px;
         margin-bottom: -2px;
     }
     .font-14{
         font-size: 14px !important;
     }
     .pull-left{
         float: left;
     }
     .pull-right{
         float: right;
     }
</style>
