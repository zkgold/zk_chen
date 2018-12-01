<template>
  <div id="app">
    <span class="title">Components</span>
    <div class="componentList">
      <ul>
        <router-link to="/"><li>{{ msg }}</li></router-link>
        <router-link to="/home"><li>Home</li></router-link>
        <router-link to="/picture"><li>Picture</li></router-link>
        <router-link to="/carousel"><li>Carousel</li></router-link>
        <router-link to="/shopping"><li>Shopping</li></router-link>
      </ul>
    </div>
    <div class="componentShow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Vue',
      h: 'Home'
    }
  },
  components: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  list-style: none;
}
.title{
  color: green;
}
.componentList{
  width: 100%;
  height: 100px;
}
.componentList li{
  margin-left: 50px;
  float: left;
  list-style: none;
  color: green;
}

.componentShow{
  width: 100%;
}
</style>
