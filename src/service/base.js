import axios from 'axios'
import { Loading } from 'element-ui'

axios.defaults.baseURL = "http://10.0.14.48/chairman/"; //测试
// axios.defaults.baseURL = "https://store.sany.com.cn/chairman/"; //生产

//设置超时时间
axios.defaults.timeout = 3000


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    beforeReq(config)
    return config;
}, function(error) {
    reqFail(error)
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    resSuccess(response)
    return response.data;
}, function(error) {
    resError(error)
    return Promise.reject(error);
});


/**
 * 发起请求前执行函数
 *
 * @param {Object} config
 */
function beforeReq(config) {
    Loading.service({
        lock: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}


/**
 * 请求失败执行函数
 *
 * @param {*} error
 */
function reqFail(error) {
    let loading = Loading.service()
    loading.close()
}


/**
 * 响应成功执行函数
 *
 * @param {*} response
 */
function resSuccess(response) {
    let loading = Loading.service()
    loading.close()
}


/**
 * 响应错误执行函数
 *
 * @param {*} error
 */
function resError(error) {
    let loading = Loading.service()
    loading.close()
}


export {
    axios
}