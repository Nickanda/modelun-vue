const settings = require('./settings.json');

export default {
  srcDir: 'src',
  buildDir: 'functions/.nuxt',

  build: {
    extractCSS: true,
  },

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
    },
    googleAnalytics: {
      id: settings.googleAnalytics
    }
  },

  buildModules: [
    "@nuxtjs/google-analytics"
  ],

  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    "@nuxtjs/firebase",
  ],

  firebase: {
    config: {
      apiKey: settings.firebase.apiKey,
      authDomain: settings.firebase.authDomain,
      databaseURL: settings.firebase.databaseURL,
      projectId: settings.firebase.projectId,
      storageBucket: settings.firebase.storageBucket,
      messagingSenderId: settings.firebase.messagingSenderId,
      appId: settings.firebase.appId,
      measurementId: settings.firebase.measurementId
    },
    services: {
      analytics: true,
      auth: true,
      database: true,
      functions: true,
      messaging: true
    }
  },

  googleAnalytics: {
    id: settings.googleAnalytics
  },
}