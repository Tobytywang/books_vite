<script lang="ts" setup></script>

<template>
  <div class="book">
    <el-row>
      <el-col :xs="24" :sm="16" :md="8" :span="8" class="img">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
      </el-col>
      <el-col :xs="24" :sm="8" :md="16" :span="16" class="description">
        <p>《C++ Primer Plus》</p>
        <p>作者：克里斯·罗兰</p>
        <P>出版社：科技处办事</P>
        <p>出版时间：2002年10月</p>
        <p>字数：10万字</p>
        <p>价格：38.8元</p>
      </el-col>
      <el-col :span="24" class="content">文字</el-col>
    </el-row>
  </div>
</template>

<style scoped>
.book {
  color: black;
  padding: 0px 10px;
}

.book .img img {
  width: 100%;
}
.book .description {
  text-align: left;
}
.book .content {
  text-align: left;
}
</style>
