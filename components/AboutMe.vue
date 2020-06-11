<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text text-center">
          About Me
        </base-heading>

        <base-text class="mb-10 pa-10">
          A Venezuela-Born, Web Developer/Designer living in Buenos Aires.
          <br>
          I grew up in a bronce's craddle, living a fantastic, gaming bubble.
          <br>
          When all of that collapse thanks to the goverment, which responsability or at least in theory and according to Simon Bolivar, is to provide the greatest amount of happiness, social security & political stability possible.
          <br>
          But that doesn't happen, and reality bites. I constantly were in depression.
          <br>
          Why i'm talking all of this?, cause i don't wanna waste each other times with chit chat, faking glamarous presentionals and hollow, shallow, cable news interviews
          <br>
          You are looking for a person you can <strong>communicate</strong>, in a <strong>honest</strong>, <strong>transparent</strong> way while <strong>delivery-oriented results</strong> based on a budget.
          <br>
          Crisis is the most powerful motivator, each decisions you make need a purpose. So, since 4 years ago, i've been working creating web product using web technologies.
          <br>
          I'm interest in people which can colaborate with technologies.
        </base-text>

        <base-heading class="info--text text-center">
          Languages & Tools
        </base-heading>

        <v-alert

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
        </v-alert>
        <base-bubble-2 style="transform: translate(-190px, -5%)" />
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="$vuetify.breakpoint.mdAndDown ? 'https://i.imgur.com/s2nmCQz.jpg' : 'https://i.imgur.com/xq9bLUY.jpg'"
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
          name: 'Node.js',
          value: 93,
        },
        {
          name: 'Vue',
          value: 90,
        },
        {
          name: 'Nuxt',
          value: 89,
        },

        {
          name: 'Css/Sass',
          value: 87,
        },
        {
          name: 'Typescript',
          value: 85,
        },
        {
          name: 'Js',
          value: 85,
        },
        {
          name: 'Python',
          value: 82,
        },
      ],
    }),
  }
</script>
