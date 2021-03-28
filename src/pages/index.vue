<template>
  <v-container fluid>
    <v-img
      src="/landing-background.jpg"
      style="height: 90vh"
    >
      <v-container fill-height fluid class="x-ctn">
        <v-row class="x-row flex-column" justify="center">
          <div
            class="text-h1 white--text text-center"
            style="
              -webkit-text-stroke-width: 3px;
              -webkit-text-stroke-color: #000;
            "
          >
            Seekonk Model UN
          </div>
          <div
            class="text-h4 white--text text-center"
            style="
              -webkit-text-stroke-width: 2px;
              -webkit-text-stroke-color: #000;
            "
          >
            Coming soon...
          </div>
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <p class="text-center">general content here...</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "index",

  data: () => ({}),
};
</script>
