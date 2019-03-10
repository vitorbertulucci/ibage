<template lang="pug">
  q-page.column.training-page.column.items-center
    q-header.header-home.flex.items-center.justify-center.shadow-global.animate-pop
      div.header-home__container.flex.items-center.justify-between
        img(src="../assets/img/ibage-logo.png" @click="redirectToHome").header-home__container__logo
        nav.header-home__container__nav
          a(@click="redirectToHome" href="#") Voltar
    .training-page__container.flex.justify-center
      .training-page__title.self-center
        h3.title Treinamentos e capacitação
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .training-page__content
        h5.title 1.Gerenciamento do Sistema de Informações sobre Orçamento Público em Educação (SIOPE)
        p Apresentar aos gestores municipais da área de educação e aos técnicos responsáveis pelo gerenciamento dos recursos como preencher corretamente o Sistema de Informações sobre Orçamento Público em Educação (SIOPE) de forma que as informações venham a auxiliá-los no planejamento de suas ações, fornecendo dados atualizados sobre as receitas públicas e os correspondentes recursos vinculados à educação, assegurando maior transparência na Gestão Educacional por meio dos indicadores gerados pelo Sistema.
</template>

<script>
import {
  QPage,
  QHeader
} from 'quasar'
export default {
  name: 'TraingingPage',
  components: {
    QPage,
    QHeader
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
  methods: {
    redirectToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.header-home
  color $grey-9
  &__container
    width 100%
    max-width 1110px
    @media (max-width: 1300px)
      padding 45px
    @media (max-width: 768px)
      padding 15px 25px
    @media (max-width: 414px)
      padding 15px 10px

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
      cursor pointer
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

.training-page
  color $grey-9

  &__title
    .title
      margin 0
      padding-bottom 20px
      color $grey-9
      @media (max-width: 750px)
        font-size 40px
        line-height 48px
      @media (max-width: 570px)
        font-size 32px
        line-height 36px

  &__container
    padding 60px 0
    max-width 1110px
    @media (max-width: 1300px)
      padding 60px 45px
    @media (max-width: 768px)
      padding 45px 30px 45px 30px

  &__content
    padding-top 45px

    .title
      font-size 24px
      margin 0 0 20px 0
      text-align left

      &:before
        content ''
        width 50px
        height 7px
        display block
        background $primary
        margin-bottom 17px
</style>
