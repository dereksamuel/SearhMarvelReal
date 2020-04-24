import { get } from 'axios'
// Store, donde tenemos almacenado nuestro token
// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región

const protocol = 'https://'
const host = 'gateway.marvel.com:443/v1/public/'
function getApiAccount ({ account }) {
  const resource = `characters?name=${account}&`
  const hash = 'ts=1&apikey=54439302c9ee3f880bb31870998bf2ef&hash=e7a4a215df499841770301b0b55926f9'
  const API_URL = `${protocol}${host}${resource}${hash}`
  return get(API_URL)
}
/**
   * Returns a list of items for the specified hero.
   * GET – /d3/profile/{account}/hero/{heroId}/items
   * @param heroId {String}
   * @returns {Promise}
   */
function getApiDetailedHeroItems ({ id }) {
  const resource = `characters/${id}/comics?`
  const hash = 'ts=1&apikey=54439302c9ee3f880bb31870998bf2ef&hash=e7a4a215df499841770301b0b55926f9'
  const API_URL = `${protocol}${host}${resource}${hash}`
  console.log(id)
  return get(API_URL)
}

export {
  getApiAccount,
  getApiDetailedHeroItems
}
