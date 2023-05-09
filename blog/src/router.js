import Vue from 'vue';
import VueRouter, { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

Vue.use(VueRouter)

const route = [
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: route,
});

export default router; 