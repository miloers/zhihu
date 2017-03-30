<template>
<div id="indexList">
  <div class="grid">
        <div class="grid-padding grid-img ">
            <img :src="src">
        </div>

        <div class="grid-title grid-padding">
            <span>{{title}}</span>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        props:["src","title"],
    }
</script>
<style lang="">
     .grid {
            display: flex;
            height: 100px;
            box-shadow: 5px 5px 5px #ccc;
            border-radius: 5px;
            border-top: 1px solid #e4e2e2;
            font-family: 'Franklin Gothic Medium','microsoft yahei' 'Arial Narrow', Arial, sans-serif;
            max-width: 95%;
            margin: 0.5rem auto;
            
        }
        
        .grid-img {
            flex: 1;
        }
        
        .grid-title {
            flex: 4;
        }
        
        .grid-padding {
            padding: 0.5rem;
        }
        
        img {
            width: 83px;
            border-radius: 5px;
        }
</style>
