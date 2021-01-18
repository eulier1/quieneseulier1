<template>
  <section id="about" class="overflow-hidden">
    <v-row class="white" no-gutters>
      <v-col class="pa-5" cols="12" md="6">
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text text-center"> About Me </base-heading>

        <base-text class="mb-10 pa-10">
          A Venezuela-Born, Web Full Stack Developer living in Buenos Aires.
          <br />
          I migrate in 2019, now working location-independent.
          <br />
          Responsability & honest communication is what you need and get.
          <br />
          Facing a lot adversity taught me that.
          <br />
          Why i'm talking all of this?, cause i don't wanna waste each other
          times with chit chat, faking glamarous presentionals and hollow,
          shallow, cable news interviews.
          <br />
          Delivery-oriented results based on a budget.
          <br />
          4 years of experience, using web technologies.
          <br />
        </base-text>

        <base-heading class="info--text text-center"> Blog </base-heading>

        <v-container class="pa-5">
          <v-row>
            <v-col
              cols="12"
              md="12"
              style="
                display: flex;
                justify-content: center;
                align-content: center;
                flex-wrap: wrap;
              "
            >
              <v-btn
                color="primary mt-10"
                large
                @click="showAllProjects"
                href="https://gallant-bell-850d88.netlify.app/2021/january/nuxt-prefetch-optimizations.html"
                target="_blank"
              >
                Take a look!
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- <v-alert

          color="white"
          class="pa-12"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert> -->
        <base-bubble-2 style="transform: translate(-190px, -5%)" />
      </v-col>

      <v-col class="hidden-sm-and-down" md="6">
        <v-img
          :src="
            $vuetify.breakpoint.mdAndDown
              ? 'https://i.imgur.com/s2nmCQz.jpg'
              : 'https://i.imgur.com/xq9bLUY.jpg'
          "
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: "Node.js",
        value: 93,
      },
      {
        name: "Vue",
        value: 90,
      },
      {
        name: "Nuxt",
        value: 89,
      },

      {
        name: "Css/Sass",
        value: 87,
      },
      {
        name: "Typescript",
        value: 85,
      },
      {
        name: "Js",
        value: 85,
      },
      {
        name: "Python",
        value: 82,
      },
    ],
  }),
}
</script>
