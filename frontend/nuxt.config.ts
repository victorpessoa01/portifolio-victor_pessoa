export default {
  devServer: {
    port: 3001
  },
  css: [
      'vuetify/styles',
    ],
  buildModules: ['@nuxt/typescript-build'],
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['/plugins/vuetify.ts'],
  compatibilityDate: '2024-10-18', 
};