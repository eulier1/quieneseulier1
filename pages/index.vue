<template>
	<main>
		<hero />
		<project />
	</main>
</template>

<style lang="stylus"></style>

<script lang="ts">

import { defineComponent, computed, reactive } from "@vue/composition-api";
import Hero from "~/components/Hero.vue"
import Project from "~/components/Projects.vue"

export default defineComponent({
  components: { Hero, Project }
})
</script>
