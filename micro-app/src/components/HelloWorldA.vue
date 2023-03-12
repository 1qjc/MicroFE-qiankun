<template>
  <div>
    <div>route b</div>
    <div>{{ $store.state.count }}</div>
    <button @click="add">click</button>
    <div>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorldA',
  props: {
    msg: String
  },
  methods: {
    add() {
      this.$store.commit('increment')
      if (this.$setGlobalState) {
        console.log('此处可设置全局state')
        this.$setGlobalState({ count: this.$store.state.count })
      }
    },
    reset() {
      this.$store.commit('reset')
      if (this.$setGlobalState) {
        this.$setGlobalState({ count: 0 })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
