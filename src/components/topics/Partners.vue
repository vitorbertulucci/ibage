<template lang="pug">
  section.partners.column.items-center
    .partners__container.full-width
      .partners__title.self-center
        h3.title Parceiros
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      carousel(
        :perPageCustom="[[300, 1], [550, 2], [768, 3], [1024, 4], [1300, 6]]"
        navigationEnabled
        paginationActiveColor="#e0e0e0"
        navigationNextLabel="<i class='material-icons' size='32px'>keyboard_arrow_right</i>"
        navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
      ).partners__content.flex.justify-center.items-center
        slide(v-for="partner of partners" :key="partner.key").flex.items-center.justify-center
          q-img(:src="partner.logo" @click.native="openPatnerSite(partner)").slide.cursor-pointer
</template>

<script>
import { QImg } from 'quasar'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Partners',
  components: {
    QImg,
    Carousel,
    Slide
  },
  data () {
    return {
      partners: [
        { logo: require('../../assets/img/logo-unb.png'), key: 'unb', href: 'http://www.unb.br/' },
        { logo: require('../../assets/img/logo-prof-amaro.png'), key: 'prof-amaro', href: 'http://l.profamaro.com.br/ebook' },
        { logo: require('../../assets/img/logo-lox.svg'), key: 'lox', href: 'http://www.loxrecicla.com.br/desktop.php' }
      ]
    }
  },
  methods: {
    openPatnerSite (partner) {
      let a = document.createElement('a')
      a.href = partner.href
      a.target = '_blank'
      a.id = partner.key
      a.click()
    }
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'

.partners__content
  .VueCarousel-wrapper
    .VueCarousel-inner
      @media (max-width: 768px)
        justify-content start
      justify-content space-around
.material-icons
  font-size 32px
  color $grey-9

.VueCarousel-dot
  color $grey-9 !important

</style>

<style lang="stylus" scoped>
@import '~quasar-variables'

.partners
  width 100%
  background $grey-3

  .title
    margin 0 0 20px 0
    color $grey-10

  &__container
    max-width 1110px
    padding 60px 0
    @media (max-width: 1300px)
      padding 60px 45px
    @media (max-width: 768px)
      padding 45px 50px

  &__content
    max-width 1110px
    padding 45px 0 0 0
    @media (max-width: 1300px)
      padding 45px 45px 0 45px
    @media (max-width: 768px)
      padding 45px 10px 0 10px

.slide
  max-width 200px
  // width 150px
  // height 150px
  // border-radius 150px
  // background $primary
</style>
