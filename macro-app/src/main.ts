import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'

import './global.css'
import './assets/main.css'
import { useCounterStore } from './stores/counter'

const app = createApp(App, {
  data: () => {
    return { a: 1 }
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
import { registerMicroApps, start, initGlobalState } from 'qiankun'

registerMicroApps([
  {
    name: 'a',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/a'
  },
  {
    name: 'b',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/b'
  }
])

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  count: useCounterStore().count
})

const callback = (value: { count?: number }, prev: Object) => {
  console.log('[onGlobalStateChange - master]:', value, prev)
  const { count } = storeToRefs(useCounterStore())
  count.value = value.count!
}

onGlobalStateChange(callback)

app.config.globalProperties.$onGlobalStateChange = onGlobalStateChange
app.config.globalProperties.$setGlobalState = setGlobalState

// 启动 qiankun
start()
