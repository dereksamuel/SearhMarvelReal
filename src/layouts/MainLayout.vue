<template>
  <div class="container">
    <HeaderBar/>
    <Title />
    <router-view />
    <Form/>
    <FooterBar/>
  </div>
</template>

<script>
import Form from '@/views/HOME/HomeForm.vue'
import Title from '@/views/HOME/HomeTitle.vue'
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar,
    Title,
    Form
  }
}
</script>
