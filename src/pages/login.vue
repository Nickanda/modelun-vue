<template>
  <v-container fluid>
    <v-row class="col-7">
      <v-img
        src="/landing-background.jpg"
        class="col-7 d-xs-none d-sm-none"
        style="height: 95vh"
      />
    </v-row>
    <v-row class="col-5">
      <div class="text-h1">Sign in with your Google Account.</div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  layout: "login",

  data: () => ({}),
};
</script>
