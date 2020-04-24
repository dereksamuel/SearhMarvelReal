<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <b-form @submit.prevent="onSubmit">

          <b-form-group
            id="input-group-1"
            label="Character:"
            label-for="input-text"
            description="Format: YourProfile#1234"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="Character"
            />
          </b-form-group>

          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="outline-primary" size="lg">Submit</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeForm',
  data () {
    return {
      form: {
        battleTag: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const { battleTag } = this.form
      this.$router.push({ name: 'Profile', params: { battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>
