import axios from 'axios'
import * as types from './mutation-types.js'

const BIRD = "https://bird.ioliu.cn/v1/?url=";

const state = {
    totalTime: 2,
    HotNews: {}
}


const getters = {
    [types.DONE_HOT_NEWS]: state => {
        return state.HotNews
    }
}


const mutations = {
    [types.TOGGLE_HOT_NEWS](state, all) {
        state.HotNews = all;
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
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}