<template lang="pug">
  header.header-home.flex.items-center.justify-center.shadow-global
    div.header-home__container.flex.items-center.justify-between
      q-img(src="../../assets/ibage.png").header-home__container__logo
      nav.header-home__container__nav.flex
        a(href="#") Quem Somos
        a(href="#") Produtos e Serviços
        a(href="#") Notícias
        a(href="#") Parceiros
        a(href="#") Contatos
      q-btn(
        icon="mdi-menu"
        color="primary"
        round
        flat
      ).header-home__container__menu-button
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.header-home
  width 100%
  height 90px
  background white
  position fixed
  top 0
  @media (max-width: 414px)
    height 65px

  &__container
    width 100%
    max-width 1110px
    @media (max-width: 1300px)
      padding 45px
    @media (max-width: 768px)
      padding 30px 25px 30px 30px
    @media (max-width: 414px)
      padding 15px 10px 15px 15px

    &__logo
      max-width 78px
      @media (max-width: 414px)
        max-width 55px

    &__nav
      color $primary
      font-size 16px
      @media (max-width: 890px)
        display none

      a
        margin-left 30px
        display block
        font-weight 700
        color $primary
        text-decoration none
        transition all .2s ease

        &:first-of-type
          margin 0

        &:visited
          color $primary

        &:hover
          color $quaternary

    &__menu-button
      display none
      @media (max-width: 890px)
        display block
</style>
