<template>
  <div>
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainBlock from './MainBlock/Index'

import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import LoadLayout from '@/layouts/Loading'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'ProfileView',
  // Lo damos de alta
  mixins: [
    setError
  ],
  components: {
    LoadLayout,
    BaseLoading,
    MainBlock
  },
  data () {
    return {
      profileData: null
    }
  },
  created () {
    // llamada a la API
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'ERROR' })
        })
    }
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>
