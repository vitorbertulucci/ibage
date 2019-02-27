<template lang="pug">
  q-page.column
    introduction
    header-home
    div.temporary
    contact
    footer-home
</template>

<script>
import HeaderHome from '../components/general/Header'
import Introduction from '../components/topics/Introduction'
import Contact from '../components/topics/Contact'
import FooterHome from '../components/general/Footer'

export default {
  name: 'PageIndex',
  components: {
    HeaderHome,
    Introduction,
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
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'
*
  font-family 'Trebuchet MS'

.temporary
  padding 500px 0
  background $grey-2
  width 100%
</style>
