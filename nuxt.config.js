export default {
  head: {
    title: "Seekonk Model UN",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Seekonk Model UN"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", hred: "image/to/favicon" }]
  },

  css: [],

  plugins: [],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://websiteurl.com'
    }
  },

  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios"
  ]
}