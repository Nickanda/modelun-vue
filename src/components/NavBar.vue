<template>
  <v-row class="pt-3 pl-3 pr-3">
    <v-toolbar class="overflow-hidden">
      <v-toolbar-title>
        <NuxtLink to="/" class="black--text text-decoration-none">
          <b>Seekonk Model UN</b>
        </NuxtLink>
      </v-toolbar-title>

      <v-spacer />

      <v-btn>
        <NuxtLink to="/login" class="black--text text-decoration-none">
          <b>Login</b>
        </NuxtLink>
      </v-btn>
    </v-toolbar>
  </v-row>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({}),
};
</script>