<template>
  <div class="container">
    <Radio label="Okay" name="type" value="nope" v-model="radio" />
    <Radio label="Nope" name="type" value="nope1" v-model="radio" />
    <Radio label="Maybe" name="type" value="nope2" v-model="radio" />
    <div class="break"></div>
    <div class="npm-package">npm i @bit/mdaffan.test.radio</div>
    <div class="break"></div>
    <div class="props">
      <table class="my_table">
        <tr>
          <th>Props/Events</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>value</td>
          <td>string</td>
        </tr>
        <tr>
          <td>name</td>
          <td>string</td>
        </tr>
        <tr>
          <td>label</td>
          <td>string</td>
        </tr>
        <tr>
          <td>@input</td>
          <td>(event)=>{}</td>
        </tr>
        <tr>
          <td>@[any].native</td>
          <td>(event)=>{}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Radio from '@bit/mdaffan.test.radio';
  //   import Radio from '@/components/Inputs/Radio.vue';
  export default {
    components: {
      Radio
    },
    data: function () {
      return {
        radio: 'nope'
      };
    }
  };
</script>

<style></style>
