<template>
    <div id="header">
         <mt-header :title="title">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>