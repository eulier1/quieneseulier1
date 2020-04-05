<template>
  <section class="flex flex-wrap">
    <article class="relative justify-center w-full md:w-1/2 lg:w-1/3 hover:opacity-50" v-for="(project, i) in state.projects" :key="i" :style="{
        backgroundImage: 'url(' + project.thumbnail + ')',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }" style=" height: 360px" @mouseenter="showPreview(i)" @mouseleave="hidePreview()">
      <a :href="project.url" target="_blank" rel="noopener">
        <div class="overlay-colour" :class="{
            'plug-color': project.name == 'Plugstreaming',
            'henrymiller-color': project.name == 'Henry Miller Minister',
            'enev-color': project.name == 'ENEV',
            'barcode-color': project.name == 'PWA Barcode Scanner',
            'cargill-color': project.name == 'Cargill Image Map',
            'moses-color': project.name == 'Moses Walker Jr',
            'pbsa-color ':
              project.name == 'Mentoring PeaceBuilders South Africa'
          }" style="cursor: pointer">
          <div v-show="state.selected === i || i == 2 || i == 6" class="position-center" :class="{
              'text-black': i == 2 || i == 6,
              'text-white': i != 2 && i != 6
            }">
            <h1 class="w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold" :style="{ 'display: block': i == 2 || i == 6 }">
              {{ project.name }}
            </h1>
            <p class="w-full">{{ project.description }}</p>
            <p class="w-full flex flex-wrap" v-if="project.techIcons">
              <span v-for="(icon, j) in project.techIcons" :key="j">
                <i v-if="!icon.startsWith('c-')" :class="'fab fa-'+icon" class="mx-2 mt-2 text-2xl"></i>
                <img v-if="icon.startsWith('c-inkscape')" src="~/assets/c-inkscape.svg" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="inkscape logo" />
                <img v-if="icon.startsWith('c-gsap')" src="~/assets/c-gsap.svg" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="gsap logo" />
                <img v-if="icon.startsWith('c-nuxt')" src="~/assets/c-nuxt.svg" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="nuxt logo" />
                <img v-if="icon.startsWith('c-vuepress')" src="~/assets/c-vuepress.png" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="vuepress logo" />
                <img v-if="icon.startsWith('c-mysql')" src="~/assets/c-mysql.svg" class="mx-2 mt-2 text-2xl" style="width: 45px;
                          height: 25px;" alt="mysql logo" />
                <img v-if="icon.startsWith('c-graphql')" src="~/assets/c-graphql.svg" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="graphql logo" />
                <img v-if="icon.startsWith('c-firebase')" src="~/assets/c-firebase.svg" class="mx-2 mt-2 text-2xl" style="width: 25px;
                          height: 25px;" alt="firebase logo" />
              </span>
            </p>
          </div>
        </div>
      </a>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, computed, reactive } from '@vue/composition-api'
import plugImage from "../assets/plug1.jpg"
import henrymillerImage from "../assets/henrymiller.jpg"
import enevImage from "../assets/enev.jpg"
import barcodeImage from "../assets/barcode.jpg"
import cargillImage from "../assets/cargill.jpg"
import mosesImage from "../assets/moseswalker.jpg"
import pbsaImage from "../assets/pbsa.jpg"

interface Project {
  name: string,
  description: string,
  url?: string,
  thumbnail?: string,
  techIcons?: string[]
}

export default defineComponent({


  setup() {

    const state = reactive({
      projects: [
        {
          name: "Plugstreaming",
          description: "Admin Dashboard to manage radio station",
          url: "https://play.plugstreaming.com/plugradio",
          thumbnail: plugImage,
          techIcons: ["html5", "css3-alt", "js", "node-js", "angular"]
        },
        {
          name: "ENEV",
          description: "Etymology Venezuela Name’s State",
          url: "https://reilue.github.io/ENEV/",
          thumbnail: enevImage,
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-inkscape.svg",
            "c-gsap"
          ]
        },
        {
          name: "Personal Blog",
          description: "Check it 👀",
          url: "https://gallant-bell-850d88.netlify.com/",
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-vuepress"
          ]
        },
        {
          name: "PWA Barcode Scanner",
          description: "Barcode Scanner Mobile Web-Browser based",
          url: "https://festive-goldwasser-4a54e3.netlify.com/",
          thumbnail: barcodeImage,
          techIcons: ["html5", "css3-alt", "js", "node-js", "vuejs", "c-nuxt"]
        },
        {
          name: "Henry Miller Minister",
          description: "Church Donate's Website ",
          url: "https://henrymillerministries.com/",
          thumbnail: henrymillerImage,
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-nuxt",
            "php",
            "laravel",
            "c-mysql"
          ]
        },
        {
          name: "Cargill Image Map",
          description: "Cargill map for kiosk",
          url: "http://cargillctl.madebymod.com/",
          thumbnail: cargillImage,
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-nuxt",
            "php",
            "laravel",
            "c-mysql"
          ]
        },
        {
          name: "My contact?",
          description: "click to send me an 📨",
          url: "mailto:eulier1@gmail.com"
        },
        {
          name: "Moses Walker Jr",
          description:
            "A non profit org, to break the cycle of anti-social skills and behaviors and teach respect towards others",
          url: "https://moses-walker-7fdcd.firebaseapp.com/",
          thumbnail: mosesImage,
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-nuxt",
            "c-graphql",
            "c-firebase"
          ]
        },
        {
          name: "Mentoring PeaceBuilders South Africa",
          description:
            "A non profit org, to manage conflict situations where they do arise",
          url: "https://mentoringpeacebuilders.org/",
          thumbnail: pbsaImage,
          techIcons: [
            "html5",
            "css3-alt",
            "js",
            "node-js",
            "vuejs",
            "c-nuxt",
            "c-graphql",
            "c-firebase"
          ]
        }
      ],
      selected: -1
    })


    function showPreview(i: number) {
      state.selected = i
    }

    function hidePreview() {
      state.selected = -1
    }

    return {
      state,
      showPreview,
      hidePreview
    }
  },

})
</script>

<style lang="postcss">
.plug-color {
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
  }
}
.henrymiller-color {
  &:hover {
    background: rgba(13, 41, 81, 0.8);
    transition: all 0.3s;
  }
}
.enev-color {
  &:hover {
    background: rgba(115, 126, 141, 0.8);
    transition: all 0.3s;
  }
}
.barcode-color {
  &:hover {
    background: rgba(79, 73, 80, 0.8);
    transition: all 0.3s;
  }
}
.cargill-color {
  &:hover {
    background: rgba(251, 142, 60, 0.8);
    transition: all 0.3s;
  }
}
.moses-color {
  &:hover {
    background: rgba(62, 72, 254, 0.8);
    transition: all 0.3s;
  }
}
.pbsa-color {
  &:hover {
    background: rgba(29, 96, 60, 0.8);
    transition: all 0.3s;
  }
}

.overlay-colour {
  width: 100%;
  height: 100%;
  z-index: 999999;
}

article {
  z-index: 1;
}

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
