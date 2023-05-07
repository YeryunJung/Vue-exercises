<template>
  <div class="black-bg" v-if="모달창열렸어">
    <div class="white-bg">
      <img :src="원룸들[누른상품번호].image" alt="" style="width: 100%" />
      <h4>{{ 원룸들[누른상품번호].title }}</h4>
      <p>{{ 원룸들[누른상품번호].content }}</p>
      <!-- <input @input="month = $event.target.value" /> -->
      <input type="range" min="1" max="12" />
      <input v-model.number="month" />
      <p>
        {{ month }}개월 선택함 : {{ 원룸들[누른상품번호].price * month }} 원
      </p>
      <button @click="$emit('closeModeal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    // 데이터가 변화할 때마다 코드 실행됨
    // a는 변경전 데이터 b는 변경후 데이터
    month(a, b) {
      if (a >= 13) {
        alert("13이상 입력 금지");
      }
    },
  },
  props: {
    원룸들: Array,
    누른상품번호: Number,
    모달창열렸어: Boolean,
  },
};
</script>

<style></style>
