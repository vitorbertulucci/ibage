<template lang="pug">
  div.introduction.flex
    div.introduction__bg-left
    div.introduction__bg-right
      q-img(src="../../assets/img/plants.jpeg")
      q-btn(icon="menu" round flat @click="changeMenuVisibility").btn-menu
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
        q-btn(color="primary" unelevated no-caps) Lorem Ipsum
      div.introduction__content__right.column.items-end
        nav.introduction__content__right__nav.flex
          a(v-for="link of links" href="#" @click="scrollElement(link)") {{ link.title }}
        q-btn(
          icon="menu"
          round
          flat
          size="20px"
          @click="changeMenuVisibility"
        ).introduction__content__right__btn-mobile
</template>

<script>
import { QImg } from 'quasar'

import { mapActions, mapGetters } from 'vuex'
import mixins from '../mixins'

export default {
  name: 'Introduction',
  components: {
    QImg
  },
  mixins: [mixins],
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
      ],
      visibility: false
    }
  },
  computed: {
    ...mapGetters('menuMobile', [ 'isShowing' ])
  },
  methods: {
    ...mapActions('menuMobile', [ 'setViewState' ]),
    changeMenuVisibility () {
      this.setViewState(!this.isShowing)
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
  color $grey-10

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

    .btn-menu
      display none
      z-index 1000
      color white
      font-size 20px
      @media(max-width: 965px)
        display block
        position absolute
        right 45px
        top 45px
      @media(max-width: 965px)
        font-size 18px
        top 50px
        right 35px
      @media(max-width: 532px)
        top 45px
        right 20px

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
        padding 45px 35px
      @media(max-width: 965px)
        width 100%
        clip-path polygon(60% 0%, 100% 40%, 100% 100%, 0 100%, 0 0)
      @media(max-width: 640px)
        clip-path polygon(60% 0%, 100% 35%, 100% 100%, 0 100%, 0 0)
      @media(max-width: 450px)
        clip-path polygon(60% 0%, 100% 27%, 100% 100%, 0 100%, 0 0)
      @media(max-width: 414px)
        clip-path polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 0)

      .logo
        max-width 140px
        position absolute
        top 0
        left 0
        margin 45px 60px
        @media(max-height: 870px), (max-width: 1480px)
          margin 30px 45px
          max-width 120px
        @media(max-width: 532px)
          margin 30px
          max-width 100px

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
        @media(max-width: 520px)
          font-size 42px
          line-height 48px
        @media(max-width: 430px)
          font-size 38px
          line-height 44px
        @media(max-width: 414px)
          line-height 39px

      p
        max-width 63%
        font-size 20px
        margin 0 0 45px 35px
        @media(max-height: 870px), (max-width: 1480px)
          margin 0 0 30px 0
          font-size 18px
          max-width 65%
        @media(max-width: 965px)
          max-width 100%
        @media(max-width: 520px)
          font-size 16px
          line-height 22px

      .q-btn
        margin-left 35px
        padding 10px 30px
        border-radius 0
        font-size 20px
        @media(max-height: 870px), (max-width: 1480px)
          margin-left 0
        @media(max-width: 520px)
          font-size 16px

    &__right
      flex 1
      position relative
      @media(max-width: 965px)
        display none

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
        transform rotate(131deg)
        margin-right -188px
        margin-bottom -104px

      &__nav
        font-size 15px
        width 562px
        z-index 10
        position absolute
        top 0
        right 0
        margin 45px 60px
        @media(max-width: 1140px)
          display none

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

      &__btn-mobile
        display none
        z-index 3
        color white
        margin 45px
        @media(max-width: 1140px)
          display block
</style>
