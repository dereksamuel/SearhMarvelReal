<template>
  <footer class="footer-bar mt-5">
    <hr class="my-5">

    <div class="row">
      <div class="col-sm-6 mb-sm-0 mb-5">
        <FootLinks/>
      </div>
      <div class="col-sm-6">
        <MadeByFoot/>
      </div>
    </div>

  </footer>
</template>

<script>
import MadeByFoot from './MadeByFoot'
import FootLinks from './FootLinks'

export default {
  name: 'FooterBar',
  components: { FootLinks, MadeByFoot },
  data () {
    return {
      icons: ''
    }
  }
}
</script>
