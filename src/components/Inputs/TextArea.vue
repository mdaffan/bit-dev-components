<template>
  <div>
    <textarea
      class="textarea__input input"
      @keyup="$emit('key-up', $event.target.value)"
      @keydown="$emit('key-down', $event.target.value)"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      :placeholder="placeholder"
      autocomplete="off"
    ></textarea>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      },
      placeholder: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  .textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
    &__input {
      height: 4.4rem;
      border: none !important;
      border-radius: 4px;
      padding-left: 4rem;
      box-shadow: 0px 1px 4px #0000001a;
      &::placeholder {
        color: #5b607e;
      }
      &:focus {
        box-shadow: 2px 2px 4px 0px rgba(23, 30, 72, 0.164);
      }
    }
  }
  .input {
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    display: inline-flex;

    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
  }
</style>
