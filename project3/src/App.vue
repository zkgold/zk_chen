<template>
  <div id="app">
  	<div>
	    <ul>
	      <li>25</li>
	      <li>25</li>
	      <li>25</li>
	    </ul>
	</div>
	<carousel :slides="slides" :inv="invTime"></carousel>
  </div>
</template>

<script>
import carousel from './CarouselRow'
export default {
  name: 'App'
  data (){
  	return {
  		invTime : 2000,
  		slides : [{

  		},{

  		}]
  	}
  },
  components: {
  	carousel
  }
}
</script>

<style>
#app {
  width:200px;
  margin: 100px auto;
  background-color: #ddd;

}
li{
  list-style:none;
}
</style>
