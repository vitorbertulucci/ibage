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
@font-face
  font-family 'Trebuchet MS'
  src url(../assets/fonts/trebuc.ttf)
  font-weight normal
  font-style normal

@font-face
  font-family 'Trebuchet MS'
  src url(../assets/fonts/trebucbd.ttf)
  font-weight bold
  font-style normal

*
  font-family 'Trebuchet MS'

.shadow-global
  box-shadow 0 10px 20px rgba(71,80,89,.15)

.temporary
  margin 500px 0
</style>
