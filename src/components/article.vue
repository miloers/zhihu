<template>
    <div>
    <Header :title="DONE_NEWS_DETAIL.title"></Header>
    <div v-html="DONE_NEWS_DETAIL.body">    
    </div>
   </div>

</template>

<script>

 import {mapGetters} from 'vuex'
 import Header from './HeaderList.vue'
  export default{
        data(){
            return{
                conurl:''
            }
        },
		components: {
         Header
        },
        computed:{
            ...mapGetters(['DONE_NEWS_DETAIL'])
        },
        created:function(){
            this.conurl=this.$route.query.conurl;
            this.getList();
        },
        methods:{
              getList:function(){
                  	this.$store.dispatch('FETCH_NEWS_DETAIL',this.conurl)
            }
        },
		   
    }
</script>
<style>
@import 'http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3';
</style>