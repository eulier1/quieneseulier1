<template>
	<main>
		<hero />
		<project />
	</main>
</template>

<script>
	import Hero from "~/components/Hero.vue";
	import Project from "~/components/Projects.vue";

	export default {
		components: { Hero, Project }
	};
</script>

<style lang="stylus"></style>
