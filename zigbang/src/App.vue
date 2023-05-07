<template>
  <div class="menu">
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
    <!-- 반복문 쓸 때 key(유니크한 문자나 숫자)를 꼭 써야함 -->
    <!-- <a v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a> -->
    <!-- a는 요소 i는 인덱스 -->
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <!-- 바뀔 일이 많이 없으면 하드코딩도 가능(로고 등) -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>50 만원</p>
    <button @click="신고수++">허위매물신고</button>
    <span>신고수 : {{ 신고수 }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>50 만원</p>
  </div>
  <!-- <div v-for="(작명, idx) in products" :key="idx">
    <h4>{{ products[idx] }}</h4>
    <p>50 만원</p>
  </div> -->
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
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      신고수: 0,
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
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
