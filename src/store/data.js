import axios from 'axios'
import * as types from './mutation-types.js'

const BIRD = "https://bird.ioliu.cn/v1/?url=";

const state = {
    totalTime: 2,
    HotNews: {},
    NewsDetail: {}
}


const getters = {
    [types.DONE_HOT_NEWS]: state => {
        return state.HotNews
    },
    [types.DONE_NEWS_DETAIL]: state => {
        return state.NewsDetail
    }
}


const mutations = {
    [types.TOGGLE_HOT_NEWS](state, all) {
        state.HotNews = all;
    },
    [types.TOGGLE_NEWS_DETAIL](state, all) {
        String.prototype.replaceAll = function(s1, s2) {
            return this.replace(new RegExp(s1, "gm"), s2);
        }
        all.body = all.body.replaceAll('src=\"', 'src=\"http://lovestreet.leanapp.cn/zhihu/resource?url=')
        all.body = all.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
        state.NewsDetail = all;
    }
}

const actions = {
    [types.FETCH_HOT_NEWS]({ commit }) {
        axios.get(BIRD + 'http://news-at.zhihu.com/api/3/news/hot')
            .then(res => {
                console.log(res.data);
                commit(types.TOGGLE_HOT_NEWS, res.data.recent)
            })
            .catch(err => console.log(err));
    },
    [types.FETCH_NEWS_DETAIL]({ commit }, conurl) {
        axios.get(BIRD + conurl)
            .then(res => commit(types.TOGGLE_NEWS_DETAIL, res.data))
            .catch(err => console.log(err));
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}