import { get } from 'axios'

const hash = 'e7a4a215df499841770301b0b55926f9'
const clientSecret = 'wuf4Ym9jX5kOurOUnmnB8wdBO6VKSm6'

const API_URL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54439302c9ee3f880bb31870998bf2ef&hash=${hash}`

export default {
  methods: {
    /**
       * Go to hero Id
       * @param heroId {String | Number}
       */
    goToHero (heroId) {
      const { battleTag } = this.$route.params
      this.$router.push({ name: 'Hero', params: { battleTag, heroId } })
      console.log(heroId)
    },
    getToken () {
      const body = new FormData()
      body.append('grant_type', 'client_credentials')
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: { username: hash, password: clientSecret }
      }
      return get(API_URL, body, config)
    }
  }
}
