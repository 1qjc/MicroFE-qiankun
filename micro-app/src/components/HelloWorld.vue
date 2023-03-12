<template>
  <div>
    route a
    <div class="r">
      <embed
        src="http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="700px"
        width="500px"
      />
      <iframe
        src="http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
        frameBorder="0"
        scrolling="auto"
        height="700px"
        width="500px"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.r {
  display: flex;
  justify-content: space-between;
}
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
