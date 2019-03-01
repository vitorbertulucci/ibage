<template lang="pug">
  .mobile-navbar
    nav.content.column.items-center.shadow-global
      div(v-for="(link, index) of links" @click="scrollElement(link)").content__link.full-width.text-center.cursor-pointer
        q-separator
        a(href="#") {{ link.title }}
</template>

<script>
import { QSeparator } from 'quasar'
import mixins from '../mixins'

export default {
  name: 'MobileNavbar',
  components: {
    QSeparator
  },
  mixins: [mixins],
  data () {
    return {
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
