<template>
<div>
    <Header title="首页"></Header>
    <div id="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
            <img src="https://unsplash.it/500/300/?random" alt="">
                <span class="swiper-title">1121212</span>
            </mt-swipe-item>
            <mt-swipe-item>
            <img src="https://unsplash.it/500/300?image=0" alt="">
                <span class="swiper-title">1</span>
            </mt-swipe-item>
            <mt-swipe-item>
            <img src="https://unsplash.it/g/500/300" alt="">
                <span class="swiper-title">1</span>
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <tag  value="HotNews">
    </tag>
    
    <div v-for=" item in DONE_HOT_NEWS">
        <indexList :src="item.thumbnail |changeBird" :title="item.title" :conurl="item.url"></indexList>   
    </div>
    
    <qyfooter></qyfooter>
   
</div>
</template>
<script>
    import Header from './Header.vue'
    import indexList from './indexList.vue'
    import tag from './tag.vue'
    import qyfooter from './footer.vue'
    import {mapGetters} from 'vuex'
    export default {
        name: 'app',
        components: {
            Header,
            indexList,
            tag,
            qyfooter,        
        },
        created(){
            this.getList();
        },
        computed:{
            ...mapGetters(['DONE_HOT_NEWS'])
        },
        methods:{
            getList:function(){
                this.$store.dispatch('FETCH_HOT_NEWS')
            }
        }
    }
</script>
<style lang="">
      #swiper {
        width: 100%;
        max-height: 500px;
        height: auto;
        height: 200px;
        float: left;
    }

    #swiper img {
        width: 100%;
    }
    .swiper-title {
        position: absolute;
        left: 3%;
        bottom: 10px;
        color: #eee;
    }
</style>