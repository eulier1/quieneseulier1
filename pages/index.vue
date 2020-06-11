<template>
	<div>
		<core-app-bar />

		<core-view />

		<core-footer />
	</div>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
	  CoreView: () => import('@/components/core/View'),
	  CoreFooter: () => import('@/components/core/Footer'),
    },
  }
</script>