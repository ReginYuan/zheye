<template>
  <!--  ref="dropdownRef" 获取dom节点-->
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >{{title}}</a>
    <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    // 获取并定义节点类型
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 控制弹窗
    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        // 如果获取的节点是存在的并且isOpen是true,则设置isOpen为false关闭弹窗
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
    // 挂载并渲染事件
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    // 卸载载并移除事件
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }

})
</script>>
<style lang="sass" scoped>

</style>
