/* eslint-disable no-undef */
<template>
  <div class="validate-input-container pb-3">
    <input type="text"
    class="form-control"
    :class="{'is-invalid':inputRef.error}"
    :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
       />
      <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>


<script lang='ts'>
import { defineComponent, reactive, PropType } from 'vue'

// 判断emaild的正则表达式
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// 定义规则类型接口
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
// 生成实例
export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup (props, context) {
    // 定义响应式数据
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''

    })
    // KeyboardEvent键盘事件
    const  updateValue = (e: KeyboardEvent) => {
       const   targetValue = (e.target as HTMLInputElement).value
       inputRef.val = targetValue
       context.emit('update:modelValue', targetValue)
    }
    // 触发事件
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        // 获取错误信息
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      emailReg,
      updateValue
    }
  }
})
</script>>
