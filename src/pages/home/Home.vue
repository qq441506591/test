<template>
<div>
<page pageId='home'>
	<home-header></home-header>
	<home-banner></home-banner>
	<home-list></home-list>
</page>

<router-view></router-view>

</div>
</template>

<script>
import Page from '../../common/Page.vue'
import Header from '../../components/home/index/Header.vue'
import Banner from '../../components/home/index/Banner.vue'
import List from '../../components/home/index/list.vue'
export default {
	components:{
		[Page.name]:Page,
		[Header.name]:Header,
		[Banner.name]:Banner,
		[List.name]:List
	}
}
</script>

<style>

</style>
