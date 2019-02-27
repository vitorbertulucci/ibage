<template lang="pug">
  .mobile-navbar
    .content.column.items-center
      a(v-for="link of links" :href="link.ref") {{ link.title }}
    .hide-content
</template>

<script>
export default {
  name: 'MobileNabar',
  data () {
    return {
      links: [
        { title: 'Quem Somos', ref: '#' },
        { title: 'Produtos e Serviços', ref: '#' },
        { title: 'Notícias', ref: '#' },
        { title: 'Parceiros', ref: '#' },
        { title: 'Contatos', ref: '#' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'

.mobile-navbar
  .content
    padding 100px 45px 0 45px
    z-index 999
    background white
    position absolute
    top 0
    right 0
    width 100%
    height 300px
    a
      color $grey-7
      font-size 20px
      text-decoration none
  .hide-content
    z-index 998
    position absolute
    background black
    top 0
    right 0
    left 0
    bottom 0
    opacity 0.7
</style>

<style lang="stylus" scoped>
</style>
