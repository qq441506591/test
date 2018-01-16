<template>
  <nav class='tabs one-top-px'>
  	<router-link class='tab' v-for='(tabItem,index) in tabsData' :to='tabItem.path' :key='index'>
  		{{tabItem.title}}
  	</router-link>
  </nav>
</template>

<script>
export default {
	name:'tabs',             //给自己个name，防止被其他组件多次引用时被改名
	data(){
		return {
			tabsData:[
				{title:'首页',path:'/home'},
				{title:'发现',path:'/discover'},
				{title:'订单',path:'/order'},
				{title:'我的',path:'/mine'},
			]
		}
	}


}
</script>

<style scoped>
.tabs{
		position: absolute;
		left: 0;
		bottom:0;
		width:100%;
		height: 49px;
		display: flex;
		background: white;
	}
	/*.tabs:before{
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				border-top: 1px solid #000;
				position: absolute;
				top: -1px;
				left: 0;
				transform: scaleY(0.5);	
				z-index: 1;
			}*/
	.tabs .tab{
		flex:1;
		text-align: center;
		line-height: 49px;
		font-size: 16px;
		color:#8e8e93;
	}
	/*被选中的独特显示*/
	.tabs .tab.router-link-active{
		color:#0089cd;
	}
	
	
	.tabs .tab:last-child{
		border:none
	}
	
	
	.page{
		position: absolute;
		top:0;
		left: 0;
		bottom: 49px;
		width:100%;
	}
	/*.page.subpage{
		bottom:0;
		z-index: 1;
	}*/
		

</style>
