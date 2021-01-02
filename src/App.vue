/* eslint-disable quotes */ /* eslint-disable semi */
<template>
  <div id="container" class="container">
    <global-header :user="currentUser"></global-header>
    <form class="form-biaodan" >
      <div class="mb-3">
        <label class="form-label">邮箱地址:</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址:</label>
        <input
          type="email"
          class="form-control"
          v-model="emailRef.val"
          @blur="validateEmail"
          id="exampleInputEmail1"
        />
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码:</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
// 用户信息
const currentUser: UserProps = {
  isLogin: true,
  name: 'ReginYuan',
  id: 0

}
// 专栏简介
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '袁修飞的专栏',
    description: '这是袁修飞的专栏,有一段非常有意思简介,可以更新一下哦',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150'
  },
  {
    id: 2,
    title: '袁修飞的专栏',
    description: '这是袁修飞的专栏,有一段非常有意思简介,可以更新一下哦',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: '袁修飞的专栏',
    description: '这是袁修飞的专栏,有一段非常有意思简介,可以更新一下哦',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: '袁修飞的专栏',
    description: '这是袁修飞的专栏,有一段非常有意思简介,可以更新一下哦',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 5,
    title: '袁修飞的专栏',
    description: '这是袁修飞的专栏,有一段非常有意思简介,可以更新一下哦',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }

]
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ValidateInput
  },
  // eslint-disable-next-line space-before-function-paren
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确格式的电子邮箱格式' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    // 判断emaild的正则表达式
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // email验证的方法
    const validateEmail = () => {
      // 判断email内容是否为空
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '内容不能为空'
        // 验证email是否可用
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱格式错误'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>

<style>
.container {
  text-align: center;
  float: none;
}
.container .form-biaodan .form-label {
  float: left;
}
</style>
