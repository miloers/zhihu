<template>
    <div class="qy_tag">
        {{value}}
    </div>
</template>
<script>
    export default{
          props:["value"],
    }
</script>

<style>
.qy_tag{
    clear:both;padding:0.5rem;font-family:Trajan 'microsoft yahei';color:#808080;padding-left: 1rem;font-size:16px;
}
</style>