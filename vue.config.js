module.exports = {
    css: {
        loaderOptions: {
            sass: {},
            scss: {
                //全局引入样式变量文件
                prependData: `@import "~@/assets/css/variable.scss";`
            },
            less: {}
        }
    },
    publicPath: './'
}