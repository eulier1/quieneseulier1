<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="info white--text"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="12"
      >
        <!-- <base-bubble-1 /> -->

        <base-heading
          class="text-center"
          style="padding: 200px 0 10px 0"
        >
          Project?, let's talk. ☕
        </base-heading>
        <v-footer
          height="88"
          class="justify-center"
          style="background: transparent; padding: 0 0 200px 0"
        >
          <social-media large />
        </v-footer>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'GetInTouch',
    components: {
      SocialMedia: () => import('@/components/SocialMedia'),
    },
  }
</script>
