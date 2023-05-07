<template>
  <!-- v-if 문법 추가 -->
  <div v-if="1 == 1">안녕하세요</div>
  <div v-else-if="1 == 3">안녕하세요2</div>

  <div class="black-bg" v-if="모달창열렸어">
    <div class="white-bg">
      <h4>{{ 원룸들[누른상품번호].title }}</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸어 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
    <!-- 반복문 쓸 때 key(유니크한 문자나 숫자)를 꼭 써야함 -->
    <!-- <a v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a> -->
    <!-- a는 요소 i는 인덱스 -->
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <!-- 바뀔 일이 많이 없으면 하드코딩도 가능(로고 등) -->
  <!-- <div>
    <img :src="원룸들[0].image" alt="" class="room-img" />
    <h4 @click="모달창열렸어 = true">{{ products[0] }}</h4>
    <h4>{{ 원룸들[0].title }}</h4>
    <p>{{ 원룸들[0].price }} 만원</p>
    <button @click="신고수++">허위매물신고</button>
    <button @click="increase">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" alt="" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>50 만원</p>
    <button @click="increase">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" alt="" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>50 만원</p>
    <button @click="increase">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div> -->
  <div v-for="(작명, idx) in 원룸들" :key="idx">
    <img :src="원룸들[idx].image" alt="" class="room-img" />
    <h4
      @click="
        모달창열렸어 = true;
        누른상품번호 = idx;
      "
    >
      {{ 원룸들[idx].title }}
    </h4>
    <p>{{ 원룸들[idx].price }} 만원</p>
  </div>
</template>

<script>
import data from "./assets/oneroom";

export default {
  name: "App",
  data() {
    // 데이터 보관함
    return {
      누른상품번호: 0,
      원룸들: data,
      모달창열렸어: false,
      price1: 60,
      price2: 70,
      스타일: "color: blue",
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      신고수: [0, 0, 0],
    };
  },
  // 함수
  methods: {
    increase() {
      this.신고수 += 1;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

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

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
