<template>
  <div>
    <h1>COMICS</h1>
    <br>
    <Hero :comics="heroesComics" />
  </div>
</template>

<script>
import Hero from './Hero'
import setError from '@/mixins/setError'
import { getApiDetailedHeroItems } from '@/api/search'

export default {
  name: 'HeroView',
  mixins: [setError],
  components: {
    Hero
  },
  data () {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
      hero: null,
      items: null
    }
  },
  computed: {
    heroesComics () {
      return this.hero ? this.hero.results.slice(0, 20) : null
    }
  },
  created () {
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { heroId } = this.$route.params
    getApiDetailedHeroItems({ id: heroId })
      .then(({ data }) => {
        this.hero = data.data
        console.log(this.hero)
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
        console.log('Done2!' + heroId)
      })
  }
}
</script>
