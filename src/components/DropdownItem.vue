<template>
  <li class="dropdown-option" :class="{'is-disabled':disabled}">
    <slot></slot>
  </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled * {
  color: red;
  pointer-events: none;
  /*背景样式透明 */
  background-color: transparent;
}
</style>
