import Vue from 'vue';
import VueRouter, { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'

Vue.use(VueRouter)

const route = [
  {
    path: "/list",
    component: List,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: route,
});

export default router; 