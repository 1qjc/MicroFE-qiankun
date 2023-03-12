<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { getCurrentInstance } from 'vue'

const store = useCounterStore()
const { count } = storeToRefs(store)
const ins = getCurrentInstance()

const changeGlobalState = () => {
  if (ins?.appContext.config.globalProperties.$setGlobalState) {
    console.log('此处可设置全局state')
    ins?.appContext.config.globalProperties.$setGlobalState({ count: 100 })
  }
}
</script>

<template>
  <main>Home</main>
</template>
