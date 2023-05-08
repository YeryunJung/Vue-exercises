<template>
  <div>
    <div v-for="(글, idx) in 블로그글" :key="idx">
      <h5>{{글.title}}</h5>
      <p>{{글.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    블로그글: Array,
  }
}
</script>

<style>

</style>