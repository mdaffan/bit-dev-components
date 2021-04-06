<template>
  <div id="app">
    <div id="nav">
      <router-link to="/components/inputs/text-field">TextField</router-link> |
      <router-link to="/components/inputs/text-area">TextArea</router-link> |
      <router-link to="/components/inputs/radio">Radio</router-link> |
      <router-link to="/components/inputs/checkbox">Checkbox</router-link> |
      <router-link to="/components/inputs/switch">Switch</router-link> |
      <!-- <router-link to="/components/inputs/text-field">Buttons</router-link> | -->
      <router-link to="/components/signature-pad">Signaturepad</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  .container {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    .npm-package {
      padding: 10px;
      margin: 10px;
      border-radius: 4px;
      background: black;
      color: white;
    }
    .props {
      border-radius: 4px;
      padding: 10px;
      margin: 10px;
      background: lightseagreen;
      color: black;
    }
  }
  .break {
    flex-basis: 100%;
    height: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
