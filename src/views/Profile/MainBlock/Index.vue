<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>
        <hr>
      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>
    </div>

    <div class="grid-item item-right">
      <TopImg :heroes="changeheroeImg"/>
    </div>

  </div>
</template>

<script>
import TopHeroes from './TopHeroes/Index'
import TopImg from './TopImg/Index'
import HeroesList from './HeroesList/Index'

export default {
  name: 'MainBlock',
  components: {
    TopHeroes,
    HeroesList,
    TopImg
  },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasHeroes () {
      return this.profileData.data.results.length > 0
    },
    topHeroes () {
      return this.profileData.data.results.slice(0, 3)
    },
    hasHeroesList () {
      return this.profileData.data.results.length >= 1
    },
    heroesList () {
      return this.profileData.data.results.slice(0, 3)
    },
    changeheroeImg () {
      return this.profileData.data.results.slice(0, 3)
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2
</style>
