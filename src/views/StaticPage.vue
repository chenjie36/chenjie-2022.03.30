<template>
  <div class="dynamicPage">
    <img class="dynamicPage-moblie" src="../assets/img/moblie.png" alt="">
    <img class="dynamicPage-ipad" src="../assets/img/ipad.jpg" alt="">
    <img class="dynamicPage-pc" src="../assets/img/PC.jpg" alt="">
  </div>
</template>

<style scoped lang='scss'>
.dynamicPage {
  width: 100%;
  height: 100%;
  &-moblie, &-ipad, &-pc {
    display: none;
  }

  // 移动端
  @media (max-width: 768px){
    &-moblie {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  // ipad
  @media screen and (min-width : 768px) and (max-width : 1024px){
     &-ipad {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  // PC
  @media (min-width: 1024px){
     &-pc {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
