/* eslint-disable */
<template>
	<div id="app">
		<div class="wrapper">
			<table>
    			<caption>Information About Person</caption>
				<tr>
					<td v-for="item in header"><strong>{{item}}</strong></td>
				</tr>
				<tr v-for="(list, index) in baseData" v-bind:class="{bColor : index%2 != 1}">
					<td v-for="(item, i) in list">
						<div v-if="i == 'number'">
							<span @click="minus(baseData[index])" class="minus">-</span>{{item}}<span @click="plus(baseData[index])" class="plus">+</span>
						</div>
						<div v-else>
							{{item}}
						</div>	
					</td>
				</tr>
				<tr>
					<div class="totalPrice">
						<span class="clear">归零</span>
						<span class="total">总价格</span>
						<span class="number">{{totalPrice}}</span>
					</div>
				</tr>			
    		</table>			
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			Things: [{price: '', count: ''}],
			header : ['name', 'describe', 'price', 'number'],
			baseData : [{
				name : 'zk',
				describe : 123,
				price : 2546,
				number : 0,

			},{
				name : 'zk',
				describe : 123,
				price : 2546,
				number : 0,

			},{
				name : 'zk',
				describe : 123,
				price : 2546,
				number : 0,

			}],
			totalPrice : 0,
		}
	},
	methods: {
		minus: (index) => {
			if(index.number > 0){
				index.number -= 1;
				this.totalPrice -= parseInt(index.price);
			};
		},
		plus: (index) => {
			index.number += 1;
			console.log(index.price)
			this.totalPrice += parseInt(index.price);
			this.totalPrice = 25;
			console.log(this.totalPrice)
		}
	},
}
</script>
<style scoped>
#app{
	width: 100%;
}
.wrapper{
	width: 35rem;
	margin: 10px auto;
	position: relative;
	font-size: 16px;
}
.wrapper table{
	width: 100%;
	border-collapse: collapse;
	border: 1px solid #ddd;
} 
.wrapper table caption{
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 20px;
	background-color: #ddd;
}
.wrapper table .bColor{
	background-color: #ddd;
}
.wrapper table tr{
	border: 1px solid #ddd;
	height: 40px;
	line-height: 40px;
}
.wrapper table tr td{
	text-align: center;
	vertical-align: center;
}
.minus{
	width: 30px;
	margin-left: 20px;
	float: left;
	cursor: pointer;
	background-color: #eee;
}
.plus{
	width: 30px;
	float: right;
	margin-right: 20px;
	cursor: pointer;
	background-color: #eee;
}
.clear{
	float: left;
}

.number{
	float: right;
}
</style> 
/* eslint-disable */