<template>
  <v-app>
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