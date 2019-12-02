<template>
  <section
    ref="heroSection"
    class="relative flex h-screen items-center justify-center content-center flex-wrap bg-designer text-white"
  >
    <span
      class="absolute top-0 left-0 pt-4 pl-4 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >🇻🇪</span
    >
    <article
      class="w-full flex justify-center flex-wrap"
    >
      <h1
        class="w-full flex justify-start text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                ml-4 pl-4 sm:ml-8 sm:pl-4 md:ml-16 md:pl-8 lg:ml-32 lg:pl-16 xl:ml-48 xl:pl-32 font-thin"
        :style="{
          transform: 'translateY(' + '-' + yPos * 0.8 + 'px)',
          opacity: opacity
        }"
      >
        Hi, i'm Eulier González
      </h1>
      <div
        class="w-full text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex items-center justify-start
                ml-4 pl-4 sm:ml-8 sm:pl-4 md:ml-16 md:pl-8 lg:ml-32 lg:pl-16 xl:ml-48 xl:pl-32"
        style="height: 7.5vh;"
        :style="{
          transform: 'translateY(' + yPos * 0.01 + 'px)',
          opacity: opacity
        }"
      >
        <h2 class="font-thin">I'd worked as</h2>
        <h2
          ref="devElemTitle"
          class="font-dev"
          style="opacity: 0; display: none"
        >
          {{ developerTitle }}<span ref="devElemMarker">{{ marker }} </span>
        </h2>
        <div ref="desElemTitle" style="opacity: 0">
          <svg
            ref="svg"
            style="width: auto;"
            class="ml-1 mt-1 h-8 sm:h-10 md:h-12 md:ml-4 xl:h-16"
            enable-background="new"
            preserveAspectRatio="xMidYMid"
            version="1.1"
            viewBox="122.98 9.18 167.24 70.004"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="translate(116.61 -100.62)"
              d="m11.802 115.99h-0.52l-3.32 0.38q-0.45 0-0.45-0.67t0.64-1.38q0.64-0.7 1.66-0.7h2.5q0.51-2.82 3.33-2.82 0.89 0 0.89 0.71-0.45 1.02-0.77 1.92h1.67q11.33 0 20.54 4.48 4.55 2.24 7.3 6.17 2.75 3.94 2.75 8.99 0 3.59-1.66 6.88-1.67 3.3-4.45 5.7-2.79 2.4-6.27 4.35-3.49 1.95-7.27 3.17-7.74 2.5-13.69 2.5-3.27 0-5.19-0.77-1.92-0.77-1.92-1.92 0-0.51 0.45-0.51 0.19 0 0.38 0.06-0.44-2.24-0.44-7.58 0-5.35 1.18-14.31 1.18-8.96 2.66-14.65zm-0.96 32.38q0.12 3.07 1.24 4.32t4.52 1.25q5.88 0 13.4-3.52t10.92-7.94q4.73-6.08 4.73-11.52 0-3.39-1.66-6.01-1.67-2.63-4.55-4.2-2.88-1.56-5.88-2.62-3.01-1.06-6.53-1.5-6.02-0.77-9.67-0.77h-2.24q-4.35 14.72-4.35 29.18 0 2.24 0.07 3.33zm49.08-5.44-2.3-0.06q-2.11 5.37-2.11 8.19 0 2.81 1.92 2.81 2.24 0 6.27-5.05 1.34-1.73 1.6-1.73 0.45 0 0.45 0.51 0 1.79-3.52 4.96t-5.31 3.17q-1.8 0-3.11-0.99t-1.31-3.3q0-2.11 1.06-5.41 1.05-3.29 1.12-3.8-0.96-0.26-0.96-1 0-0.73 1.08-0.73h0.45q2.56-5.06 2.95-5.83 1.79-3.39 6.84-3.39 2.18 0 3.01 3.91 0.39 1.98 0.39 3.29t-0.96 2.31q-0.96 0.99-2.5 1.37-2.69 0.77-5.06 0.77zm-1.72-1.86 2.56 0.13q2.62 0 3.77-0.57 1.15-0.58 1.19-2.28 0.03-1.69-0.29-2.84-0.58-2.05-1.6-2.05-1.28 0-3.04 2.75t-2.59 4.86zm27.58-7.93q-0.13 1.28-1.66 3.65-1.54 2.36-2.37 2.36-0.26 0-0.26-0.48t0.71-2.24q0.7-1.76 0.7-2.27 0-0.96-1.15-0.96-0.19 0-2.11 0.32-1.6 0.39-4.2 2.05-2.59 1.66-2.59 3.65 0 0.7 0.32 1.28 0.83 1.66 2.91 2.81 2.08 1.16 3.59 2.18 1.5 1.02 1.5 2.69 0 2.81-4.32 5.41-4.32 2.59-7.39 2.59-0.51 0-0.83-0.42-0.32-0.41-0.32-0.86 0-0.77 0.7-0.77 2.11 0 5.92-1.31t3.81-2.85q0-1.6-4.54-4.35-1.73-1.03-3.17-2.47t-1.44-2.65q0-1.22 0.67-2.05t1.31-1.5q0.64-0.68 1.22-1.19 0.57-0.51 1.31-1.02t1.31-0.9q0.58-0.38 1.35-0.77l1.21-0.64q1.35-0.64 1.92-0.83 0.58-0.19 1.22-0.45 1.47-0.57 2.37-0.57 2.3 0 2.3 2.56zm14.21-13.25q0 0.83-1.22 2.11-1.21 1.28-1.53 1.99-0.84 2.11-1.8 2.36-1.28 0-1.28-2.11 0-1.34 1.99-2.94 1.98-1.6 3.45-1.6 0.32 0 0.39 0.19zm-10.31 18.75-0.19-0.83q0-0.26 0.8-2.56t1.89-3.65q1.09-1.34 3.2-1.34 0.83 0 0.96 0.57-1.02 1.6-2.72 5.32-1.7 3.71-2.4 5.5-1.66 4.16-2.82 9.28-0.06 0.19-0.06 0.51 0 0.77 0.64 0.77 0.38 0 2.08-0.96t2.18-0.96 0.54 0.26q0 0.76-3.26 2.84-3.27 2.08-4.48 2.08-1.22 0-1.22-1.15 0-0.57 0.48-1.95t1.22-3.49q0.73-2.11 1.12-3.26 0.38-1.15 0.8-2.37 0.41-1.22 0.6-1.82 0.2-0.61 0.39-1.19 0.25-1.15 0.25-1.6zm20.04 30.15q-0.58 3.26-5.67 5.98-5.09 2.72-9.69 2.72-4.61 0-4.61-3.39t3.13-9.51q3.14-6.11 5.25-8.48 0.19-0.25 1.28-0.64-1.09-0.64-1.53-0.89-1.03-0.45-1.03-1.06t0.61-1.21q0.61-0.61 1.25-0.61h0.25q3.91 1.47 7.36 6.46 3.46 4.99 3.46 9.35 0 0.89-0.06 1.28zm4.54-32.52q0 0.58-0.96 0.58h-0.58q-0.7 4.29-1.02 5.06-1.6 4.09-4.45 6.56-2.85 2.46-5.92 2.46-1.79 0-2.59-1.02-0.8-1.03-0.8-3.27 0-5.5 3.42-10.62 3.43-5.12 7.2-5.12 0.32 0 0.96 0.13 0-2.31 1.67-2.31 1.85 0 1.85 2.95l-0.12 3.13q0.25 0 0.7 0.45 0.64 0.64 0.64 1.02zm-7.55 33.35v-0.83q0-3.4-1.83-6.79-1.82-3.39-4.38-5.63-0.13 0.19-1.57 2.24-1.44 2.05-2.43 3.58-0.99 1.54-2.27 3.78-2.69 4.61-2.69 7.26 0 2.66 3.14 2.66 3.13 0 7.52-2.18 4.38-2.17 4.51-4.09zm3.65-33.03q-0.71-0.12-0.84-2.01-0.12-1.89-0.89-1.89-1.99 0-3.71 2.56-1.73 2.56-3.01 5.98-1.28 3.43-1.28 5.64 0 2.2 1.6 2.2 2.37 0 5.25-3.8 2.88-3.81 2.88-8.68zm8.51 2.05-0.19-0.83q0-0.26 0.83-2.59 0.83-2.34 1.85-3.65 1.03-1.31 3.14-1.31 0.83 0 0.96 0.57-5.25 10.76-6.27 15.36 10.56-17.02 16.19-17.02 1.28 0 1.28 0.83 0 0.58-0.45 1.28-3.26 5.44-6.08 12.48-2.81 7.04-2.81 10.56 0 1.15 0.51 1.15l2.49-1.28q0.39 0 0.39 0.58t-1.41 1.54-2.82 0.96q-1.85 0-1.85-2.63 0-2.62 1.02-5.95 1.03-3.33 3.2-8.51 2.18-5.19 2.34-5.63 0.16-0.45 0.16-0.84 0-0.38-0.19-0.38-1.22 0-7.81 9.54-6.59 9.53-6.72 11.26-0.07 0.45-1.22 1.25t-1.76 0.8-0.67-0.45q0.13 0.19 2.37-6.4 3.52-10.11 3.52-10.69zm23.87 4.29-2.3-0.06q-2.12 5.37-2.12 8.19 0 2.81 1.92 2.81 2.24 0 6.28-5.05 1.34-1.73 1.6-1.73 0.44 0 0.44 0.51 0 1.79-3.52 4.96t-5.31 3.17-3.1-0.99-1.31-3.3q0-2.11 1.05-5.41 1.06-3.29 1.12-3.8-0.96-0.26-0.96-1 0-0.73 1.09-0.73h0.45q2.56-5.06 2.94-5.83 1.79-3.39 6.85-3.39 2.18 0 3.01 3.91 0.38 1.98 0.38 3.29t-0.96 2.31q-0.96 0.99-2.49 1.37-2.69 0.77-5.06 0.77zm-1.73-1.86 2.56 0.13q2.63 0 3.78-0.57 1.15-0.58 1.18-2.28 0.03-1.69-0.29-2.84-0.57-2.05-1.6-2.05-1.28 0-3.04 2.75t-2.59 4.86zm13.83-2.36-0.26-1.09q0-0.39 0.13-0.71 1.02-4.03 2.08-5.5 1.05-1.47 3.1-1.47 0.77 0 0.9 0.51-0.07 0.19-0.93 2.24t-1.57 3.84q-1.98 4.8-3.07 9.6 2.11-4.16 6.53-10.02 4.41-5.85 7.29-5.85 1.54 0 1.54 1.95t-1.47 4q-0.51 0.7-1.38 1.38-0.86 0.67-1.28 0.67-0.41 0-0.41-0.32t0.6-1.86q0.61-1.53 0.61-2.05 0-0.51-0.32-0.51-2.24 0-6.62 6.91-4.39 6.92-6.5 13.51-0.38 0.51-1.21 1.02-0.84 0.51-1.32 0.51t-0.67-0.32q0-1.72 0.42-3.13 0.41-1.41 1.05-1.67 1.41-5.31 1.99-7.93l0.64-2.69q0.13-0.45 0.13-1.02z"
              stroke="#FFF"
              fill="rgba(39, 37, 35, 1)"
            />
          </svg>
        </div>
      </div>
    </article>
    <div class="absolute bottom-0">
      <div class="mouse">
        <div class="scroller"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Vivus from "vivus";
import { gsap } from "gsap";

export default {
  data() {
    return {
      yPos: -10,
      opacity: 1,
      isAnimationDone: false,
      designerTitle: "",
      developerTitle: "",
      marker: "_",
      counterStart: 0,
      interval: ""
    };
  },
  mounted() {
    const { svg, desElemTitle, devElemTitle, devElemMarker } = this.$refs;

    this.designerTitle = new Vivus(svg, { type: "oneByOne", duration: 1500 });
    let tl1 = gsap.timeline({ repeat: -1 });
    tl1.from(desElemTitle, { opacity: 0 });
    tl1.call(() => {
      this.designerTitle.reset();
      this.designerTitle.play(1);
    });
    tl1.to(desElemTitle, { opacity: 1, duration: 5 });
    tl1.to(desElemTitle, { opacity: 0, duration: 1 });
    tl1.to(desElemTitle, { opacity: 0, display: "none" });
    tl1.to(devElemTitle, { display: "block", opacity: 1 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.call(() => {
      this.developerTitle = "D";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "De";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Dev";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Devel";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Develo";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Develop";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Develope";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.1 });
    tl1.call(() => {
      this.developerTitle = "Developer";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.15 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.call(() => {
      this.developerTitle = "Develope";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "Develop";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "Develo";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "Devel";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "Deve";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "Dev";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "De";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "D";
    });
    tl1.to(devElemTitle, { opacity: 1, duration: 0.12 });
    tl1.call(() => {
      this.developerTitle = "";
    });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 1, duration: 0.45 });
    tl1.to(devElemMarker, { opacity: 0, duration: 0.45 });

    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let { heroSection } = this.$refs;
      let { top, bottom } = heroSection.getBoundingClientRect();
      this.yPos = (Math.abs(top) - 50) * 0.8 + 40;
      this.opacity = (Math.abs(bottom) - Math.abs(bottom) * 0.95 ) * 0.01 ;
      if (top === 0) {
        this.opacity = 1
      }
      console.log(this.opacity);
    }
  }
};
</script>

<style>
.bg-designer {
  background: rgba(39, 37, 35, 1)
}

.font-dev {
  font-family: "Fira Code", monospace;
  padding-left: 8px;
}

.mouse {
  width: 3px;
  padding: 0.2vh 1vh;
  height: 30px;
  border: 2px solid transparent;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 1.5px;
  height: 15px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 4.3s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  80% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(18px);
    opacity: 0;
  }
}
</style>
