<template>
  <div class="b-checkbox is-flex mr-15">
    <input
      class="sh-custom-checkbox is-thinner"
      type="checkbox"
      id="selection"
      v-model="all_projects"
      @input="
        all_projects ? (selected = []) : (selected = data.map(item => item.uid))
      "
    />
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '../../styles/_theme-colors.scss';
  .sh-custom-checkbox {
    position: relative;
    height: 2rem;
    width: 2rem;
    visibility: hidden;
    margin-right: 0.5rem;
    vertical-align: middle;
    cursor: pointer;
    z-index: 5;

    &::before {
      content: '';
      position: absolute;
      visibility: visible;
      border-radius: 4px;
      width: 2rem;
      height: 2rem;
      z-index: 2;
      background-color: $white;
      // border-radius: 1.5rem;
      border: 2px solid $primary;
    }

    &:hover::before {
      background-color: $white;
    }

    &::after {
      border-width: 0px 0px 0px 0px;
      visibility: visible;
    }

    &:checked::before {
      background-color: $white;
      border: 2px solid $primary;
      // border-radius: 1.5rem;
      overflow: hidden;
      visibility: visible;

      backface-visibility: none;
    }

    &:checked::after {
      position: absolute;
      content: '';
      z-index: 3;
      visibility: visible;

      left: 8px;
      top: 4px;
      width: 5px;
      height: 9px;
      border: solid $primary;
      border-width: 0px 2px 2px 0px;
      transform: rotate(45deg);
    }

    &.is-vhidden {
      cursor: default;
      &::before {
        content: '';
        position: absolute;
        visibility: visible;
        border-radius: 4px;
        width: 2rem;
        height: 2rem;
        z-index: 2;
        background-color: transparent;
        // border-radius: 1.5rem;
        border: 2px solid transparent;
      }

      &:hover::before {
        background-color: transparent;
      }

      &::after {
        border-width: 0px 0px 0px 0px;
        visibility: visible;
      }

      &:checked::before {
        background-color: transparent;
        border: 2px solid transparent;
        // border-radius: 1.5rem;
        overflow: hidden;
        visibility: visible;

        backface-visibility: none;
      }

      &:checked::after {
        position: absolute;
        content: '';
        z-index: 3;
        visibility: visible;

        left: 8px;
        top: 4px;
        width: 5px;
        height: 9px;
        border: solid transparent;
        border-width: 0px 2px 2px 0px;
        transform: rotate(45deg);
      }
    }

    &.is-dot {
      &:checked::after {
        position: absolute;
        content: '';
        z-index: 3;
        visibility: visible;
        left: 6px;
        top: 6px;
        width: 6px;
        height: 5px;
        border: solid $primary;
        border-width: 4px;
        border-radius: 5px;
      }
    }

    &.is-square {
      &:checked::after {
        position: absolute;
        content: '';
        z-index: 3;
        visibility: visible;
        width: 8px;
        height: 5px;
        border: solid #2585d3;
        border-width: 4px !important;
        left: 6.3px !important;
        top: 5.5px !important;
        border-radius: 0;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }

    &.is-thinner {
      height: 2rem;
      width: 2rem;

      &::before {
        border: 1.5px solid #171e48;
        height: 2rem;
        width: 2rem;
        border-radius: 2px;
        opacity: 0.5;
      }

      &:checked::before {
        opacity: 1;
        border: 1.5px solid $primary;
        height: 2rem;
        width: 2rem;
        border-radius: 3px;
      }

      &:checked::after {
        border-width: 0px 2px 2px 0px;
        left: 8px;
        top: 4px;
      }

      &.rounded {
        &::before {
          border-radius: 100%;
          height: 2.4rem;
          width: 2.4rem;
        }
        &:checked::before {
          opacity: 1;
          // border: 1.5px solid $white;
          background: $primary;
          height: 2.4rem;
          width: 2.4rem;
          border-radius: 100%;
        }

        &:checked::after {
          left: 9px;
          top: 6px;
          width: 5px;
          height: 9px;
          border: solid $primary;
          border-width: 0px 2px 2px 0px;
          transform: rotate(45deg);
          border: solid $white;
          border-top: none;
          border-left: none;
        }
      }

      &.fill {
        &:checked::before {
          opacity: 1;
          // border: 1.5px solid $white;
          background: $primary;
          height: 2rem;
          width: 2rem;
          border-radius: 4px;
        }

        &:checked::after {
          left: 8px;
          top: 4px;
          width: 5px;
          height: 9px;
          border: solid $primary;
          border-width: 0px 2px 2px 0px;
          transform: rotate(45deg);
          border: solid $white;
          border-top: none;
          border-left: none;
        }
      }
    }

    &.is-rounded {
      &::before {
        content: '';
        visibility: visible;
        border-radius: 1.5rem;
      }
    }
  }
</style>
