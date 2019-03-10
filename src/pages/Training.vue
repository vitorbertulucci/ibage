<template lang="pug">
  q-page.column.training-page.column
    q-header.header-home.flex.items-center.justify-center.shadow-global.animate-pop
      div.header-home__container.flex.items-center.justify-between
        q-img(src="../assets/img/ibage-logo.png").header-home__container__logo
        nav.header-home__container__nav
          a(@click="redirecToHome" href="#") Início
    .training-page__container.flex
      .training-page__title.self-center
        h3.title Treinamentos e capacitação
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
</template>

<script>
import {
  QHeader
} from 'quasar'
export default {
  name: 'TraingingPage',
  components: {
    QHeader
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.training-page__container
.header-home
  &__container
    width 100%
    max-width 1110px
    @media (max-width: 1300px)
      padding 45px
    @media (max-width: 768px)
      padding 15px 25px 15px 30px
    @media (max-width: 414px)
      padding 15px 10px 15px 20px

.header-home
  z-index 10
  width 100%
  height 90px
  background white
  position fixed
  top 0
  @media (max-width: 414px)
    height 65px

  &__container
    &__logo
      max-width 78px
      @media (max-width: 414px)
        max-width 55px

    &__nav
      color $primary
      font-size 16px

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
</style>
