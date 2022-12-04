<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import {
  Menu as IconMenu,
  Collection,
  CollectionTag,
  Coffee,
  Folder,
  Cpu,
  Histogram,
  School,
  Clock,
} from "@element-plus/icons-vue";
import { watch, reactive } from "vue";
import { useRouter, onBeforeRouteUpdate, stringifyQuery } from "vue-router";
import router from "./router";
import { keyBy } from "lodash";

const msg = "Hello";
const url =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";

const useRouterCurrent = useRouter();
watch(
  () => router.currentRoute.value,
  () => {
    console.log("路由变化了");
    console.log(router.currentRoute.value.path);
    // console.log(router.currentRoute.value)
  }
);

// export default {
//   name: 'App',
//   data() {
//     return {
//       url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
//     }
//   },
//   components: {
//     HelloWorld
//   }
//   // watch: {

//   // },
//   // methods: {

//   // }
// }
</script>

<template>
  <div class="common-layout">
    <el-container class="top-container">
      <el-aside class="top-aside">
        <!-- <el-image
          class='logo'
          style='height:100px;width:160px;margin:0px;padding:0px;'
          :src='url'
        ></el-image> -->
        <el-menu
          active-text-color="#ffd04b"
          background-color="#6f6f6f"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item index="/">
            <template #title>
              <el-icon><Collection /></el-icon>
              <span>所有图书</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/random">
            <el-icon><Coffee /></el-icon>
            <span>试试手气</span>
          </el-menu-item>
          <el-menu-item index="/current">
            <el-icon><CollectionTag /></el-icon>
            <span>当前在读</span>
          </el-menu-item>
          <el-sub-menu index="/type">
            <template #title>
              <el-icon><Folder /></el-icon>
              <span>分类</span>
            </template>
            <el-menu-item index="/program">
              <el-icon><Cpu /></el-icon>
              <span>编程语言</span>
            </el-menu-item>
            <el-menu-item index="/economy">
              <el-icon><Histogram /></el-icon>
              <span>经济</span>
            </el-menu-item>
            <el-menu-item index="/building">
              <el-icon><School /></el-icon>
              <span>建筑</span>
            </el-menu-item>
            <el-menu-item index="/history">
              <el-icon><Clock /></el-icon>
              <span>历史</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- <el-header class='top-head'>头</el-header> -->
        <el-main class="top-main">
          <router-view :msg="msg" :key="router.currentRoute.value.fullPath">
          </router-view>
        </el-main>
        <el-footer class="top-footer">
          <el-row>
            <el-col :span="8">Designed & Powered by tobytywang</el-col>
            <el-col :span="8">Copyright 2022-2022 吴弓小站</el-col>
            <el-col :span="8"
              ><a href="https://beian.miit.gov.cn/">蜀ICP备20003006号</a
              >↗</el-col
            >
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-menu-item {
  padding: 0;
}
.common-layout {
  height: 100%;
}
.top-container {
  background-color: aliceblue;
  height: 100%;
}
.top-aside {
  background-color: antiquewhite;
  width: 200px;
}
.top-head {
  background-color: aqua;
}
.top-main {
  background-color: aquamarine;
}
.top-footer {
  background-color: beige;
}
.logo {
  height: 6em;
  /* padding: 1.5em; */
  will-change: filter;
  height: 100px;
  /* width: 160px; */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.el-aside {
  /* width: 160px; */
  background-color: #c3c5b2;
}
.el-main {
  background-color: #ffffff;
  padding: 20px 10px;
}
.el-footer {
  /* line-height: 4px; */
  background-color: #c3c5b2;
  color: #111111;
  font-size: 12px;
  line-height: 4em;
  height: 4em;
  user-select: none;
}
.el-footer a {
  color: #111111;
}

.el-card {
  margin-bottom: 20px;
}
</style>
