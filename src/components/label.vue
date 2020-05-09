<template>
	<span class="inline-block bg-lemon px-1 text-sm text-gray-300 mr-2 float-left"
		>#{{ title }}</span
	>
</template>
<script>
export default {
	name: 'labels',
	props: {
		title: String,
		color: String
	}
};
</script>
<style scoped></style>
