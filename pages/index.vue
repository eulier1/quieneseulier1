<template>
	<main>
		<hero />
		<project />

		

	</main>
</template>

<style lang="stylus"></style>

<script lang="ts">
import Vue from "vue"
import Hero from "~/components/Hero.vue"
import Project from "~/components/Projects.vue"

export default Vue.extend({
  components: { Hero, Project }
})
</script>
