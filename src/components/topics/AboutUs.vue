<template lang="pug">
  div.about-us.column
    div.about-us__title-area.mw.column
      h3.title-area__title.titles Quem somos
      div.title-area__title-underline
    div.about-us__content-area.mw
      div(v-for="card of cards").q-card.content__card
        q-img(:src="card.img").card__image
        p.card__title {{ card.title }}
        p.card__text {{ cardText }}
</template>
margin-top 16px

<script>
import {
  QImg
} from 'quasar'

export default {
  name: 'AboutUs',
  components: {
    QImg
  },
  data () {
    return {
      cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cards: [
        { title: 'Sobre Nós', content: '', img: require('../../assets/mission/44126.jpg') },
        { title: 'Missão', content: '', img: require('../../assets/mission/44126.jpg') },
        { title: 'Objetivos', content: '', img: require('../../assets/mission/44126.jpg') }
      ]
    }
  }
}
</script>

<style lang="stylus" socped>
@import '~quasar-variables'
.about-us
  height 100vh
  // height 100%
  background #fff000
  padding 0 40px
  &__content-area
    padding 40px 0

.title-area__title
  margin-bottom 2vh !important

.title-area__title-underline
  height 1vh
  background $primary
  width 20vw

.about-us__content-area
  display grid
  grid-template-columns auto auto auto
  grid-gap 16px

.content__card
  padding 16px

.card__image
  max-width 100px
  max-height 100px
.card__title
  font-size 20px
</style>
