/* eslint-disable quotes */ /* eslint-disable semi */
<template>
  <div id="container" class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

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
    ColumnList,
    GlobalHeader
  },
  // eslint-disable-next-line space-before-function-paren
  setup () {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
.container {
  text-align: center;
  float: none;
}
</style>
