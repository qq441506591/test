<template>
<header class='header'>
	<div class='head-address'>福中三路深圳市民中心</div>
	<div class='head-search'>搜索商家、商品名称</div>
</header>
	
	
</template>


<script>
	
export default {
	name:'home-header'
}
	
	
</script>



<style scoped>
.header{
	width: 100%;
	height: 80px;
	background-image:linear-gradient(90deg,#0af,#0085ff);
}
.head-address{
	color:white;
	line-height: 40px;
}
.head-search{
	text-align: center;
	margin:0 auto;
	background: white;
	line-height: 30px;
	width:80%;
}
</style>