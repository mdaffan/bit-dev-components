<template>
  <div class="container">
    <TextArea />
    <div class="break"></div>
    <div class="npm-package">npm i @bit/mdaffan.test.text-area</div>
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
  import TextArea from '@bit/mdaffan.test.text-area';
  // import TextArea from '@/components/Inputs/TextArea.vue';
  export default {
    components: {
      TextArea
    }
  };
</script>

<style></style>
