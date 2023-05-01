<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <!-- 바뀔 일이 많이 없으면 하드코딩도 가능(로고 등) -->
    원룸샵
    <h4 class="red" :style="스타일">XX 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p>{{ price2 }} 만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    // 데이터 보관함
    return {
      price1: 60,
      price2: 70,
      스타일: "color: blue",
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    };
  },
  components: {},
};
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
