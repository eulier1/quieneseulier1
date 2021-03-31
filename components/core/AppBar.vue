<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    :flat="!isScrolling"
  >
    <v-slide-x-transition>
      <!-- <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
      /> -->
      <h3
        v-if="showLogo"
        class="shrink"
        style="padding: 15px;height: 50px"
      >
        Eulier González
      </h3>
    </v-slide-x-transition>

    <v-spacer />

    <social-media />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
    },
  }
</script>
