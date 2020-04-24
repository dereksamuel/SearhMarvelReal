<template>
    <div>
        <ul v-for="comic in comics" :key="comic.id" style="display: inline-flex;">
            <top-comics :selected="comic" />
        </ul>
    </div>
</template>

<script>
import TopComics from './ComicsTop.vue'

export default {
  name: 'Hero',
  props: {
    comics: {
      type: Array,
      requered: true
    }
  },
  components: {
    TopComics
  }
}

</script>
