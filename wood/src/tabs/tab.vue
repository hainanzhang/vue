<template>
	<div class="tab">
		<router-link :to='info.like'>
			{{info.name}}
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'tab-item',
		props:['info']
	}
</script>

<style>
	.tab{
		font-size: .05rem;
	}
</style>