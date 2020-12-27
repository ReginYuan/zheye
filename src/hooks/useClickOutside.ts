import { ref, onMounted, onUnmounted, Ref } from 'vue'
// 通用弹窗组件
// 自定义弹窗函数   获取页面传来dom的节点参数
const useClickOutside = (elementRef: Ref <null | HTMLElement>) => {
const isClickOutside = ref(false)
 const handler = (e: MouseEvent) => {
// 如果dom节点存在 则执行以下代码
if (elementRef.value) {
// 如果dom节点存在并是捕捉页面的节点
 if (elementRef.value.contains(e.target as HTMLElement)) {
  // 设置传回的值为false
 isClickOutside.value = false
} else {
 // 相反设置传回的值为true
isClickOutside.value = true
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
     // 返回
return isClickOutside
}

export default  useClickOutside
