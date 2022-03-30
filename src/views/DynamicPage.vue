<template>
  <div class="dynamicPage">
    <img v-for="item in imgData" :key="item.id" :src="item.src" :class="`dynamicPage-${item.type}`" alt="">
  </div>
</template>

<script>
import Ajax from '@/util/axios'
export default {
  data () {
    return {
      imgData: []
    }
  },
  mounted () {
    Ajax('GET', '/imgData.json', '', this.dealData, true)
  },
  methods: {
    dealData (data) {
      this.imgData = JSON.parse(data)
    }
  }
}
</script>

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
