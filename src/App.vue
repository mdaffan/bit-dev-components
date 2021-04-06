<template>
  <div>
    <!-- {{ text }}
    <TextField v-model="text" />
    <Checkbox />
    <Radio />
    <SignaturePad />
    <c-switch /> -->
  </div>
</template>

<script>
  import TextField from './components/Inputs/Textfield.vue';
  import Checkbox from './components/Inputs/Checkbox.vue';
  import Radio from '@bit/mdaffan.test.radio';
  import Switch from './components/Inputs/Switch.vue';
  import SignaturePad from '@bit/mdaffan.test.signature-pad';
  // import SignaturePad from '@bit/mdaffan.test.signature-pad';
  export default {
    name: 'App',
    components: {
      TextField,
      Checkbox,
      Radio,
      SignaturePad,
      'c-switch': Switch
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
