<template>
  <div>
    <h1>User Settings</h1>
    <NavBar/>
    <transition name="slide">
      <router-view/>
    </transition>
    <router-view name="helper"/>
  </div>
</template>
<script>
import NavBar from '@/pages/NavBar';
export default {
  components:{
    NavBar
  }
}
</script>

