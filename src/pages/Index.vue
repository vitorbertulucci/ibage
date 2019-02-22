<template lang="pug">
  q-page.column
    introduction
    //- introduction-1
    //- header-home
    div.temporary
    contact
    footer-home
</template>

<script>
import HeaderHome from '../components/general/Header'
import Introduction from '../components/topics/Introduction'
import Introduction1 from '../components/introduction/Introduction1'
import Contact from '../components/topics/Contact'
import FooterHome from '../components/general/Footer'

export default {
  name: 'PageIndex',
  components: {
    HeaderHome,
    Introduction,
    Introduction1,
    Contact,
    FooterHome
  }
}
</script>

<style lang="stylus">
*
  font-family 'Trebuchet MS'

.temporary
  margin 500px 0
</style>
