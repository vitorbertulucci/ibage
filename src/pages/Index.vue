<template lang="pug">
  q-page.flex.column
    introduction
    //- header-home
    div.temporary
    footer-home
</template>

<script>
import HeaderHome from '../components/general/Header'
import Introduction from '../components/topics/Introduction'
import FooterHome from '../components/general/Footer'

export default {
  name: 'PageIndex',
  components: {
    HeaderHome,
    Introduction,
    FooterHome
  }
}
</script>

<style lang="stylus">
.shadow-global
  box-shadow 0 10px 20px rgba(71,80,89,.15)

.temporary
  margin 500px 0
</style>
