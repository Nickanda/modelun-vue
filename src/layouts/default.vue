<template>
  <v-app>
    <NavBar />

    <v-main>
      <Nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default {
  name: "App",

  components: {
    Footer,
    NavBar,
  },

  data: () => ({}),
};
</script>