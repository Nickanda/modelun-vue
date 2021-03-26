<template>
  <v-footer dark padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Made by Nicholas Yang</strong> -
      <a 
      href="https://github.com/Nickanda/modelun-vue"
      target="_blank"
      
        >(Open Source)</a
      >
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({}),
};
</script>