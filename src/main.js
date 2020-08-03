import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters/common'
import * as directives from './directive/common'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })
Object.keys(directives).forEach(key => { Vue.directive(key, directives[key]) })

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')