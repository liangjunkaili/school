<template>
  <div class="first">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name:'First',
  data () {
    return{
      msg:'first.vue....................'
    }
  }
}
</script>
<style scoped>
.first h1{
  font-size: large;
}
</style>
