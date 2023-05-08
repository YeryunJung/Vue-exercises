<template>
  <div>
    <!-- <div>
      <h5>React 개발자의 블로그입니다</h5>
      <p>Vue로 만들었음</p>
    </div> -->
    <!-- <button type="button" class="btn btn-primary">Primary</button> -->

    <router-view :블로그글="블로그글"></router-view>
    <!-- <List :블로그글="블로그글" /> -->
  </div>
  
</template>

<script>
// import List from './components/List.vue'
import blogData from '@/assets/blog.js'


export default {
  name: 'App',
  data() {
    return {
      블로그글: blogData,
    }
  },
  components: {
    // List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
