<template>
  <div class="black-bg" v-if="모달창열렸어">
    <div class="white-bg">
      <img :src="원룸들[누른상품번호].image" alt="" style="width: 100%" />
      <h4>{{ 원룸들[누른상품번호].title }}</h4>
      <p>{{ 원룸들[누른상품번호].content }}</p>
      <p>{{ 원룸들[누른상품번호].price }} 원</p>
      <!-- <button @click="모달창열렸어 = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    원룸들: Array,
    누른상품번호: Number,
    모달창열렸어: Boolean,
  },
};
</script>

<style></style>
