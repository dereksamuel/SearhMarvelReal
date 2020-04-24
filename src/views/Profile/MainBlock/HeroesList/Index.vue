<template>
  <div>
    <h1>{{ heroes[0].name }} more popular dates:</h1>
    <b-table dark :items="heroes" :fields="fieldsed" />
  </div>
</template>

<script>
export default {
  name: 'HeroesList',
  data () {
    return {
      fieldsed: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'stories.items[0].name',
          label: 'Storie',
          sortable: true
        },
        {
          key: 'id',
          label: 'ID',
          sortable: true
        }
      ]
    }
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
