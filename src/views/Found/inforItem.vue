<template>
    <div class="inforItem">
        <ul class="newList"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <div class="loop-time">5月08日   周三</div>
            <inforItem1 
                v-for="infor in infors"
                :key="infor.refer_id"
                :infor="infor"
             ></inforItem1>
     </ul>
    </div>
</template>

<script>
import inforItem1 from "./inforItem1"
import { Toast } from 'mint-ui';
export default {
     components:{
        inforItem1
    },
     data(){
        return {
            infors:[],
             limit:6,
             page:1,
             loading:false, //默认为无限滚动
             hasMore:true //默认是有更多数据的
        }
    },
    methods:{
        loadMore(){
            console.log("loadmore")
            if(!this.hasMore){
                Toast({
                //iconClass:'fa spinner'
                message: '不要在拉我了，腿要断了',
                iconClass:"fa fa-hand-o-up",
                position: 'bottom',
                duration: 3000
            })
                this.loading = true;
                return false;
            }
            this.getInfors()
        },
        getInfors(){
            let {page,limit} = this;
            this.loading = true; //关闭无限滚动
            let instance = Toast({
                message:"正在加载中...",
                iconClass:'fa fa-spinner',
                duration: -1
            })
             this.$http.get("/api/migu/refer/list",{
                params:{
                    limit,
                    page
                }
        }).then(res=>{
          // console.log(res.data.data.object_list);
           this.infors = this.infors.concat(res.data.data.object_list);
           this.loading = false; //数据请求成功开启无限滚动
           instance.close();
           if(this.page * this.limit >= res.data.data.total){
               this.hasMore = false; //没有更多数据了
               return false;
           }
           this.page++
        })
     }
    }
}
</script>

<style lang="scss" scoped>
    .news{
      li{
          padding:8px 12px;
          border-top:1px solid #e7e7e7;
      }
      .news-origin{
          line-height: 25px;
      }
      .light-grey{
          color: #999;
      }
      .font-12{
          font-size: 12px !important;
      }
  }
    
</style>
