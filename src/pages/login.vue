<template>
  <v-container fluid class="d-flex">
    <v-row class="col-9">
      <v-img src="/landing-background.jpg" style="height: 95vh" />
    </v-row>
    <v-row class="col-3">
      <div class="text-h3">Sign in</div>
      <v-btn class="mr-2" v-on:click="socialLogin" theme="primary">
        <v-icon>mdi-google</v-icon>
        Sign in with Google.
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  layout: "login",

  data: () => ({}),

  methods: {
    async socialLogin() {
      if (!this.authenticatedUser) {
        const provider = new this.$fireModule.auth.GoogleAuthProvider();

        this.$fire.auth
          .signInWithPopup(provider)
          .then((res) => {
            this.$router.replace("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log(this.authenticatedUser);
      }
    },
  },
};
</script>
