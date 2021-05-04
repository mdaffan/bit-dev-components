<template>
  <div class="block">
    <b-radio
      :name="name"
      @change.native="radioInput"
      :native-value="value"
      v-model="defaultValue"
    >
      {{ label }}
    </b-radio>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Radio } from 'buefy';
  import 'buefy/dist/buefy.css';
  Vue.use(Radio);
  export default {
    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      name: String,
      value: String,
      label: String,
      checked: String
    },
    data: function () {
      return { defaultValue: this.checked };
    },
    methods: {
      radioInput(e) {
        console.log(e);
        this.$emit('input', e.target.value);
      }
    }
  };
</script>

<style></style>
