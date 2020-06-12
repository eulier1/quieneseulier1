<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <!-- <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col> -->

      <v-col
        class="text-center pa-5"
        cols="12"
        md="12"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-1
              style="transform: translateX(5%) translateY(-10%)"
            />
            <base-heading class="info--text mb-10">
              Services
            </base-heading>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="3"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="#69A1BB"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="service.icon"
              />
            </v-avatar>

            <base-text>
              <div
                class="font-weight-bold mb-2 grey--text"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-col>
          <base-bubble-2
            style="transform: rotateX(180deg) rotateY(180deg) translate(80%);"
          />
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',

    data: () => ({
      services: [
        {
          name: 'Design',
          icon: 'mdi-pencil-outline',
          blurb: '',
        },
        {
          name: 'SPA & SSR',
          icon: 'mdi-cog-outline',
          blurb: '',
        },
        {
          name: 'Hosting',
          icon: 'mdi-server',
          blurb: '',
        },
        {
          name: 'Support',
          icon: 'mdi-account',
          blurb: '',
        },
      ],
    }),
  }
</script>
