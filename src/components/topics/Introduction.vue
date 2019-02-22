<template lang="pug">
  div.introduction.flex
    div.introduction__bg-left
    div.introduction__bg-right
      q-img(src="../../assets/img/plants.jpeg")
    div.introduction__content.flex
      div.introduction__content__left.column.items-start.shadow-global
        img(src="../../assets/img/ibage-logo.png").logo
        h1
          | Fuel creativity.
          br
          | Find community.
          br
          | See the world.
        p Design Exchange is a once-in-a-lifetime opportunity for senior designers from the world’s leading companies to experience a new city through the lens of design.
        q-btn(color="primary" size="20px" unelevated) Lorem Ipsum
      div.introduction__content__right.column
        nav.introduction__content__right__nav.flex
          a(href="#") Quem Somos
          a(href="#") Produtos e Serviços
          a(href="#") Notícias
          a(href="#") Parceiros
          a(href="#") Contato
</template>

<script>
import { QImg } from 'quasar'

export default {
  name: 'Introduction',
  components: {
    QImg
  },
  data () {
    return {
      slide: 1,
      photos: [
        {
          key: 1,
          src: '../../assets/img/forest.jpg'
        },
        {
          key: 2,
          src: '../../assets/img/growing-plant.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.introduction
  background $grey-6
  width 100%
  height 100vh
  position relative
  overflow hidden

  &__bg-left
    width 30%
    background white

  &__bg-right
    flex 1

    .q-img
      height 100%

      &:before
        z-index 1
        content ''
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        opacity 0.55
        background $grey-10

  &__content
    position absolute
    width 100%
    height 100%

    &__left
      z-index 2
      width 59%
      background white
      clip-path polygon(55% 0%, 100% 50%, 55% 100%, 0 100%, 0 0)
      padding 45px 60px
      justify-content center
      @media(max-height: 870px), (max-width: 1480px)
        padding 45px

      .logo
        max-width 140px
        position absolute
        top 0
        left 0
        margin 45px 60px
        @media(max-height: 870px), (max-width: 1480px)
          margin 30px 45px
          max-width 120px

      h1
        font-weight bold
        font-size 70px
        line-height 80px
        margin 0 0 45px 35px
        @media(max-height: 870px), (max-width: 1480px)
          line-height 72px
          margin 15% 0 30px 0
        @media (max-width: 1215px)
          font-size 66px
          line-height 72px
        @media (max-width: 1100px)
          font-size 54px
          line-height 60px

      p
        max-width 63%
        font-size 20px
        margin 0 0 45px 35px
        @media(max-height: 870px), (max-width: 1480px)
          margin 0 0 30px 0
          font-size 18px
          max-width 65%

      .q-btn
        margin-left 35px
        padding 10px 30px
        border-radius 0
        @media(max-height: 870px), (max-width: 1480px)
          margin-left 0

    &__right
      flex 1
      position relative

      &:before
        z-index 1
        content ''
        position absolute
        bottom 0
        right 0
        background $grey-10
        width 425px
        height 300px
        background-image url(../../assets/img/colors.png)
        background-repeat no-repeat
        background-size cover
        transform rotate(134deg)
        margin-right -173px
        margin-bottom -104px

      &__nav
        font-size 15px
        width 562px
        z-index 10
        position absolute
        top 0
        right 0
        margin 45px 60px

        a
          margin-left 25px
          display block
          font-weight bold
          color white
          text-decoration none
          transition all .2s ease
          text-transform uppercase

          &:first-of-type
            margin 0

          &:visited
            color white

          &:hover
            color $tertiary
</style>

<style lang="stylus" scoped>
