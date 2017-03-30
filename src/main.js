// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css' //主页显示完成后其他页面也就不显示了

import store from './store/index.js'
//Vue.config.productionTip = false
Vue.use(Mint)

Vue.filter("changeBird", function(value) {
        return 'http://lovestreet.leanapp.cn/zhihu/resource?url=' + value;
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})