<template>
  <div>
    {{ text }}
    <TextField v-model="text" />
    <Checkbox />
    <Radio />
    <Switch />
  </div>
</template>

<script>
  import TextField from './components/Inputs/Textfield.vue';
  import Checkbox from './components/Inputs/Checkbox.vue';
  import Radio from './components/Inputs/Radio.vue';
  import Switch from './components/Inputs/Switch.vue';
  export default {
    name: 'App',
    components: {
      TextField,
      Checkbox,
      Radio,
      Switch
    },
    data: function () {
      return {
        text: ''
      };
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
