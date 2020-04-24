<template>
  <!-- Contenedor principal -->
  <div class="hero-portrait-wrapper mb-5 mb-sm-0">
    <!-- Avatar -->
    <b-card class="p-2 bg-dark" style="width: 240px;">
      <!-- Nombre héroe -->
      <!-- Si es hardcore, pintamos el fondo rojo -->
      <h5 class="text-truncate m-0 text-center title-name font-diablo" :class="{'bg-danger': hero.hardcore}">
        {{ hero.name }}
        <!-- Si es condicional, pintamos la hoja verde -->
      </h5>
      <hr>
      <div @click="goToHero(hero.id)" class="focuss">
          <img v-if="hero.id" :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`" width="120px" style="display: block; margin-left: auto; margin-right: auto;">
      </div>
      <div class="d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2">
        <small class="elite-kills">
          <!-- Jefes (Élites) asesinados -->
          Find
          <span class="text-monospace">{{ hero.comics.returned }}</span>
          comics
        </small>
        <!-- Nivel. De color rojo si el héroe está muerto -->
        <small class="level-circle" :class="{'text-danger': hero.series.available > 400}"> {{ hero.series.available }} </small>
      </div>
    </b-card>
  </div>
</template>

<script>
import goToHero from '@/mixins/goToHero'

export default {
  name: 'TopHero',
  mixins: [goToHero],
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.hero-portrait-wrapper
  .title-name
    color white
    font-weight 900
  .level-circle
    width 26px
    height 26px
    padding 4px
    font-weight bold
    text-align center
    border-radius 13px
    background-color #15202b
    box-shadow 0 0 0 2px #6c757d
.text-danger
    color red
.focuss:hover
    cursor pointer
</style>
