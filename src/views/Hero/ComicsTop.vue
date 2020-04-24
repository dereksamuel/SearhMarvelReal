<template>
    <div>
        <img :src="`${selected.thumbnail.path}.${selected.thumbnail.extension}`" alt="" width="300px" class="img">
        <p style="width: 250px;">
            TITLE:
            <em>
                <a :href="selected.urls[0].url" target="_blanck" :title="selected.thumbnail.path" style="color: red;">{{ selected.title }}</a>
            </em>
        </p>
        <p style="width: 250px;">
            CONTRIBUIDOR:
            <em style="color: red;">
                {{ selected.creators.items[0].name }}
            </em>
        </p>
        <p style="width: 250px;">
            PRICE:
            <em style="color: red;">
                {{ selected.prices[0].price }} $
            </em>
        </p>
        <p style="width: 250px;">
            DESCRIPTION:
            <em style="color: red;">
                {{selected.description ? selected.description : reidrectDescription}}
            </em>
        </p>
    </div>
</template>

<script>
export default {
  name: 'ComicTop',
  props: {
    selected: {
      type: Object,
      requered: true
    }
  },
  data () {
    return {
      reidrectDescription: 'no description of the comic'
    }
  }
}

</script>
