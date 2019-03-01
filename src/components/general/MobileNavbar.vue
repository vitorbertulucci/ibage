<template lang="pug">
  .mobile-navbar
    .content.column.items-center.shadow-global
      div(v-for="(link, index) of links" @click="scrollElement(link)").content__link.full-width.text-center.cursor-pointer
        q-separator
        a(href="#") {{ link.title }}
</template>

<script>
import {
  scroll,
  QSeparator
} from 'quasar'

const { getScrollTarget, setScrollPosition } = scroll

import { mapActions } from 'vuex'

export default {
  name: 'MobileNavbar',
  components: {
    QSeparator
  },
  data () {
    return {
      links: [
        { title: 'Quem Somos', ref: '#' },
        { title: 'Produtos e Serviços', ref: '#' },
        { title: 'Notícias', ref: '#' },
        { title: 'Parceiros', ref: '#' },
        { title: 'Contatos', ref: 'contact' }
      ]
    }
  },
  methods: {
    ...mapActions('menuMobile', [ 'setViewState' ]),
    scrollElement (link) {
      let el = document.getElementById(link.ref)
      let target = getScrollTarget(el)
      let correctionValue = window.innerWidth <= 640 ? 65 : 90
      let offset = el.offsetTop - correctionValue
      let duration = 500
      setScrollPosition(target, offset, duration)
      this.setViewState(false)
    }
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'

.mobile-navbar
  .content
    margin-top 90px
    z-index 100
    @media (max-width: 414px)
      margin-top 65px
    background white
    position fixed
    top 0
    right 0
    width 100%
    a
      color $grey-7
      font-size 20px
      text-decoration none
</style>

<style lang="stylus" scoped>
@import '~quasar-variables'
.content__link
  line-height 2
  &:hover
    background $grey-2
</style>
