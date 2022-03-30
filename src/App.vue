<template>
  <div id="app">
    <nav>
      <router-link to="/animateEx">提示屏幕旋转</router-link> |
      <router-link to="/staticPage">响应式布局展示图片</router-link> |
      <router-link to="/dynamicPage">通过接口获取JSON实现响应式布局</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  color: #000;
}

#app {
  width: 100%;
  height: 100vh;
  text-align: center;
}
</style>
