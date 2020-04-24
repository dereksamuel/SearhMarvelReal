<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <MainLayout v-else/>
  </div>
</template>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Marvel&display=swap')
  #app
    padding 60px 0 60px 0
    font-family 'Marvel'
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff // Le ponemos un color de letra blanco para que resalte
    background-color #202020 // Le cambiamos el color de fondo por un azul marino oscuro
</style>

<script>
import { mapState } from 'vuex'

import LoadLayout from '@/layouts/Loading'
import MainLayout from '@/layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>
