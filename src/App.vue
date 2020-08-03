<template>
    <div id="app">
        <div id="nav">
            <router-link
                to="/"
                :include='keepAlive'
            >Home</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['keepAlive'])
    }
}
</script>
<style lang="scss">
@import "./assets/css/normalize.scss";
@import "./assets/css/common.scss";
@import "./assets/css/custom_element.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
