<template>
  <div class="container">
    <Textfield placeholder="Enter some text here..." />
    <div class="break"></div>
    <div class="npm-package">npm i @bit/mdaffan.test.textfield</div>
    <div class="break"></div>
    <div class="props">
      <table class="my_table">
        <tr>
          <th>Props/Events</th>
          <th>Type</th>
        </tr>

        <tr>
          <td>placeholder</td>
          <td>string</td>
        </tr>
        <tr>
          <td>type</td>
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
  import Textfield from '@bit/mdaffan.test.textfield';
  export default {
    components: {
      Textfield
    }
  };
</script>

<style></style>
