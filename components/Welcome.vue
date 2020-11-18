<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <!-- <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
        />
      </v-col> -->

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="12"
        :style="$vuetify.breakpoint.smAndDown ? 'padding-top: 100px' : ''"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
          >
            <base-heading>Eulier González</base-heading>
            <base-text>
              <br>
              <strong> Full Stack Developer - Front End Specialized</strong>
              <br> Landing Page, SEO, SPA, SSR, PWA, Startup or Consulting. <br>
              Take a look.
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
