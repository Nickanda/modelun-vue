<template>
  <v-app>
    <v-row class="pt-3 pl-3 pr-3">
      <v-toolbar>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <NuxtLink to="/staff" class="black--text text-decoration-none">
            <b>Seekonk Model UN</b>
          </NuxtLink>
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          
        </v-btn>
      </v-toolbar>
    </v-row>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Staff Dashboard</v-list-item-title>
          <v-list-item-subtitle>Made by <a href="https://www.roblox.com/users/79439738/profile">NicholasY4815</a></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "App",

  components: {
    Footer,
  },

  data: () => ({}),
};
</script>