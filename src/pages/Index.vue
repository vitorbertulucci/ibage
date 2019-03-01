<template lang="pug">
  q-page.column
    mobile-navbar(v-show="isShowing").animate-popup-down
    introduction
    header-home
    about-us
    contact#contact
    footer-home
</template>

<script>
import MobileNavbar from '../components/general/MobileNavbar'
import HeaderHome from '../components/general/Header'
import Introduction from '../components/topics/Introduction'
import AboutUs from '../components/topics/AboutUs'
import Contact from '../components/topics/Contact'
import FooterHome from '../components/general/Footer'

import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    MobileNavbar,
    HeaderHome,
    Introduction,
    AboutUs,
    Contact,
    FooterHome
  },
  meta () {
    return {
      title: this.title,
      meta: {
        description: { name: 'description', content: 'O IBAGE é uma entidade privada sem fins lucrativos que visa contribuir para Desenvolvimento Sustentável dos municípios e promover a melhoria da qualidade de vida da população local' },
        keywords: { name: 'keywords', content: 'IBAGE sustentabilidade meio ambiente sem fins lucrativos' },
        equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
      }
    }
  },
  data () {
    return {
      title: 'IBAGE | Instituto Brasileiro de Ação Municipal e Gestão Pública'
    }
  },
  computed: {
    ...mapGetters('menuMobile', [ 'isShowing' ])
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'
*
  font-family 'Trebuchet MS'
</style>
