<template>
  <div class="container">
    <c-switch />
    <div class="break"></div>
    <div class="npm-package">npm i @bit/mdaffan.test.switch</div>
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
          <td>checked</td>
          <td>boolean</td>
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
  import Switch from '@bit/mdaffan.test.switch';
  //   import Switch from '@/components/Inputs/Switch.vue';
  export default {
    components: {
      'c-switch': Switch
    }
  };
</script>

<style></style>
