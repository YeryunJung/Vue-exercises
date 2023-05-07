<template>
  <div>
    <img :src="원룸.image" alt="" class="room-img" />
    <h4 @click="$emit('openModal', 원룸.id)">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }} 만원</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    원룸: Object,
  },
};
</script>

<style></style>
