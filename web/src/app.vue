<template>
    <div id="app">
        <header-tab></header-tab>
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页</router-link>
                <router-link class="nav-item" to="/about">关于</router-link>
                <router-link class="nav-item" to="/test1">测试</router-link>
            </p>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderTab from './views/common/header.vue';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    HeaderTab
  }
}
</script>
