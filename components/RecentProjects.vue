<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
    :style="$vuetify.breakpoint.mdAndDown ? 'margin-top: 0': 'margin-top: -200px'"
  >
    <v-row
      no-gutters
    >
      <v-col
        class="white text-center pl-12 pb-12 pa-12 pr-12 white--text"
        style="display:flex; justify-content:center; align-content: center; flex-wrap: wrap;"
        cols="12"
        md="8"
      >
        <base-heading
          v-if="$vuetify.breakpoint.smAndDown"
          class="black--text font-weight-light"
        >
          Recent Projects
        </base-heading>

        <base-text
          class="mb-5"
          style="width: 100%"
        />

        <v-card
          color=""
          style="cursor: pointer; box-shadow: 0px 0px 0px white;"
          class="outlined"
        >
          <v-container class="pa-5">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project.id"
                cols="12"
                md="6"
              >
                <v-hover>
                  <template v-slot="{ hover }">
                    <div
                      :class="`elevation-${hover ? 24 : 6}`"
                      class="mx-auto pa-4 transition-swing"
                    >
                      <v-img
                        :src="$vuetify.breakpoint.mdAndDown ? project.thumbnail : project.thumbnailXl"
                        height="300"
                        @click.stop="popupDialog(project)"
                      />
                    </div>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
            <v-btn
              v-if="!showAllProject"
              color="primary mt-10"
              large
              @click="showAllProjects"
            >
              All Projects
            </v-btn>
          </v-container>
        </v-card>
      </v-col>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ currentProject.name }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-list
            three-line
            subheader
          >
            <a
              :href="currentProject.url"
              target="_blank"
            >
              <v-img
                :src="$vuetify.breakpoint.lgAndDown ? currentProject.thumbnail : currentProject.thumbnailXl"
                max-height="380"
              />
            </a>
          </v-list>
          <v-divider />
          <v-list
            three-line
            subheader
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Description</v-list-item-title>
                <v-list-item-subtitle> {{ currentProject.description }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Rol</v-list-item-title>
                <v-list-item-subtitle> {{ currentProject.role }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list>
            <v-list-item>
              <v-list-item-title>Languages & Tools</v-list-item-title>
            </v-list-item>
            <v-list-item-group v-model="model">
              <v-list-item
                v-for="(item, i) in currentProject.techStack"
                :key="i"
                :href="item.url"
                target="_blank"
              >
                <v-list-item-icon>
                  <v-img
                    :src="require(`../assets/${item.icon}.svg`)"
                    aspect-ratio="1"
                    class=""
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-dialog>

      <v-col
        class="hidden-sm-and-down"
        md="4"
        style="display:flex; justify-content:center; align-content: center; flex-wrap: wrap;"
      >
        <base-heading style="width: 100%">
          Recent Projects
        </base-heading>
        <!-- <v-img
          :src="require('@/assets/recentprojects.png')"
          height="100%"
        /> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import Projects from '../api/projects'

  export default {
    name: 'RecentProjects',

    data: () => ({
      items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        },
        {
          icon: 'mdi-send',
          text: 'Send',
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
        },
      ],
      model: 1,
      allProjects: Projects,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      currentProject: {},
      showAllProject: false,
    }),
    computed: {
      projects: {
        get: function () {
          if (!this.showAllProject) { return this.allProjects.slice(4, 8).reverse() } else { return this.allProjects.slice(0).reverse() }
        },
        set: function () {},
      },
    },
    methods: {
      popupDialog (project) {
        this.currentProject = project
        this.dialog = true
      },
      showAllProjects () {
        this.projects = this.allProjects.slice(0).reverse()
        this.showAllProject = true
      },
    },

  }
</script>
