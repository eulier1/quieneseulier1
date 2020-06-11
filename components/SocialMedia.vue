<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
      :href="item.url"
      target="_blank"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/eulier-gonzalez-69079096/',
        },
        {
          name: 'Email',
          icon: 'mdi-email',
          url: 'mailto:eulier1@gmail.com',
        },
        {
          name: 'Blog',
          icon: 'mdi-forum',
          url: 'https://gallant-bell-850d88.netlify.com/',
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          url: 'https://twitter.com/arthard101',
        },
      ],
    }),
  }
</script>
