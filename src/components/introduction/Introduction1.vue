<template lang="pug">
  div.introduction-1.column
    header.introduction-1__header.flex.items-center.justify-between
      q-img(src="../../assets/img/ibage.png").introduction-1__header__logo
      nav.introduction-1__header__nav.flex
        a(href="#") Quem Somos
        a(href="#") Produtos e Serviços
        a(href="#") Notícias
        a(href="#") Parceiros
        a(href="#") Contato
    div.introduction-1__content.flex.items-center.justify-between
      div.introduction-1__content__texts
        h1
          | Lorem Ipsum&nbsp;
          b voluptatem
        h2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        q-btn(size="20px" color="primary" unelevated) Lorem Ipsum
      div.introduction-1__content__image
        plant-animation.plant-animation
</template>

<script>
import PlantAnimation from '../general/PlantAnimation'
export default {
  name: 'Introduction1',
  components: {
    PlantAnimation
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.introduction-1
  background $grey-1
  width 100%
  height 100vh
  max-height 768px

  &__header
    width 100%
    height 110px
    background white
    box-shadow 0px 2px 76px -40px rgba(0,0,0,0.75)
    padding 0 75px

    &__logo
      max-width 80px

    &__nav
      color $primary
      font-size 15px

      a
        margin-left 25px
        display block
        font-weight bold
        color $primary
        text-decoration none
        transition all .2s ease
        text-transform uppercase

        &:first-of-type
          margin 0

        &:visited
          color $primary

        &:hover
          color $quaternary

  &__content
    flex 1
    padding 0 75px

    &__texts
      width 57%

      h1
        font-size 60px
        line-height 72px
        font-weight bold
        color $grey-9

        b
          color $quaternary

      h2
        font-size 24px
        line-height 36px
        color $grey-6
        margin-bottom 50px

      .q-btn
        padding 10px 30px

    &__image
      flex 1
      padding-left 30px

      .plant-animation
        margin-top -19%
</style>
