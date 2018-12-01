<template>
  <div class="slide-bgc">
    <!-- 图片位置 -->
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
      <div class="slide-img">
        <!-- 用vue的transition方法进行图片轮替 -->
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </div>
      <h3>{{ slides[nowIndex].title }}</h3>
      <ul class="slide-pages">
        <li v-for="(item, index) in slides" @click="goto(index)" v-bind:key="index">
          <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
        </li>
      </ul>
    </div>
    <!-- 左右滑动arrow -->
    <div class="arrow left-arrow el-icon-arrow-left" @click="goto(prevIndex)" @mouseover="clearInv" @mouseout="runInv"></div>
    <div class="arrow right-arrow el-icon-arrow-right" @click="goto(nextIndex)" @mouseover="clearInv" @mouseout="runInv"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bgColor: '',
      nowIndex: 0,
      isShow: true,
      inv: 2000,
      slides: [{title: "a", src: "https://goss3.veer.com/creative/vcg/veer/612/veer-147343102.jpg"},
      {title: "a", src: "https://goss1.veer.com/creative/vcg/veer/612/veer-146030491.jpg"},
      {title: "a", src: "https://goss2.veer.com/creative/vcg/veer/612/veer-145710371.jpg"},
      {title: "a", src: "https://goss1.veer.com/creative/vcg/veer/612/veer-146127378.jpg"}]
    }
  },
  computed: {
    //计算上一张或下一张图片
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    //对图片下方数字的方法
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.bgColor = this.slides[this.nowIndex].bgColor
      }, 10)
    },
    //开始轮替
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    //结束轮替
    clearInv () {
      clearInterval(this.invId)
    }
  },
  //mouted方法见vue的生命周期图
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped>
/* scoped 私属style */
*{
  margin: 0;
  padding: 0;
}
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(730px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-730px);
}
.slide-bgc{
  position: absolute;
  width: 100%;
  min-width: 740px;
  height: 336px;
  background-color: #ddd;
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 730px;
  /* width: 100%; */
  height: 336px;
  margin: 0 auto;
  overflow: hidden;
}
.slide-show h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: green;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
}
.slide-pages {
  position: absolute;
  bottom: 25px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}

.arrow{
  position: absolute;
  top: 130px;
  font-size: 3em;
  color: #ccc;
  opacity: .6;
  cursor: pointer;
}
.left-arrow{
  left: 90px;
}
.right-arrow{
  right: 90px;
}
</style>
