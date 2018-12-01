<template>
	<div id="app">
		<span>This is Home</span>
		<router-link to="/MyPage">myPage</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped>
#app{
	color:green;
}
</style>
