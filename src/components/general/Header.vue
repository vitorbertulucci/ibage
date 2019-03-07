<template lang="pug">
  transition(
    appear
    enter-active-class="animated slideInDown"
    leave-active-class="animated slideOutUp"
  )
    header(v-show="visibility" v-scroll="scrolled").header-home.flex.items-center.justify-center.shadow-global.animate-pop
      div.header-home__container.flex.items-center.justify-between
        q-img(:src="require('../../assets/img/ibage-logo.png')").header-home__container__logo
        nav.header-home__container__nav.flex
          a(v-for="link of links" href="#" @click="scrollElement(link)") {{ link.title }}
        q-btn(
          v-if="this.visibility"
          icon="mdi-menu"
          color="primary"
          round
          flat
          @click="setViewState(!isShowing)"
        ).header-home__container__menu-button
</template>

<script>
import { QImg } from 'quasar'

import { mapActions, mapGetters } from 'vuex'
import mixins from '../mixins'
import debounce from 'lodash/debounce'

export default {
  name: 'HomeHeader',
  components: {
    QImg
  },
  mixins: [mixins],
  data () {
    return {
      visibility: false
    }
  },
  computed: {
    ...mapGetters('menuMobile', [ 'isShowing' ])
  },
  methods: {
    ...mapActions('menuMobile', [ 'setViewState' ]),
    debouncedScroll: debounce((_this, position) => {
      _this.visibility = position >= 140
    }, 50),
    scrolled (position) {
      this.debouncedScroll(this, position)
    }
  },
  watch: {
    visibility (newVal) {
      if (!newVal) {
        this.setViewState(newVal)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

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
    width 100%
    max-width 1110px
    @media (max-width: 1300px)
      padding 45px
    @media (max-width: 768px)
      padding 15px 25px 15px 30px
    @media (max-width: 414px)
      padding 15px 10px 15px 20px

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
