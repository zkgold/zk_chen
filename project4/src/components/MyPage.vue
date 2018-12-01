<template>
	<div id="app">
		<span>This is myPage</span>
		<span>下面是vue-router的基本操作</span>
		<!-- 路径跳转的写法 -->
		<router-link to="/children1"<li>children1</li></router-link>
		<li v-link="{path: '/children2}">children2</li>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped>
#app{
	color: green;
	list-style: none;
}
li{
	margin-bottom: 10px;
}
</style>
