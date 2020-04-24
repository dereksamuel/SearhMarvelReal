<template>
    <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="my-4 font-diablo">Description of {{ heroes[0].name }}</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id" style="border: 2px transparent red;">
        <b-card class="p-2" style="width: 240px; background: #202020 ;">
          <!-- Nombre héroe -->
          <div>
              <img :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`" width="201px" :alt="hero.name" style="border-radius: 50%;">
          </div>
          <div class="d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2">
            <small class="elite-kills" style="height: 221px;">
              <em style="font-size: 1rem;">{{ hero.description ? hero.description : `${respDes} ${hero.name}` }}</em>
            </small>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'TopHeroes',
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      respDes: 'No description of'
    }
  }
}
</script>

<style scoped>
  .card {
    border: none;
  }
</style>
