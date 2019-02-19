<template lang="pug">
  div.about-us.column
    div.about-us__title-area.mw.flex.column
      h3.title-area__title.titles Quem somos
      div.title-area__title-underline
    div.about-us__content-area.mw.flex.row.justify-between
      div(v-for="i in 3").q-card.content__card
        p.card__title Sobre Nós {{ i }}
        p.card__text {{ cardText }}
</template>
margin-top 16px

<script>
export default {
  name: 'AboutUs',
  components: {
  },
  data () {
    return {
      cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

// .about-us__content-area

.content__card
  flex 1
  min-width 200px
  max-width 350px
  padding 16px
  margin-top 16px

.card__title
  font-size 20px
</style>
