<template>
  <NavbarComponent></NavbarComponent>
  <RouterView></RouterView>
</template>

<script>

import { RouterView } from 'vue-router'
import NavbarComponent from '../components/front/navbarComponent.vue'

export default {
  components: {
    RouterView, NavbarComponent
  }
}
</script>
