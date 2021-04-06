<template>
  <section>
    <div class="block">
      <b-radio :name="name" @change.native="radioInput" :native-value="value">
        {{ label }}
      </b-radio>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import { Radio } from 'buefy';
  import 'buefy/dist/buefy.css';
  Vue.use(Radio);
  export default {
    props: {
      name: String,
      value: String,
      label: String,
      checked: String
    },
    methods: {
      radioInput(e) {
        this.$emit(e.target.value);
      }
    }
  };
</script>

<style></style>
