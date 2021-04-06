module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/prepend-styles.scss";`
      }
    }
  }
};
