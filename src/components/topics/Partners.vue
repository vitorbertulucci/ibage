<template lang="pug">
  .partners.column.items-center
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
        slide.flex.justify-center
          .slide
        slide.flex.justify-center
          .slide
        slide.flex.justify-center
          .slide
        slide.flex.justify-center
          .slide
        slide.flex.justify-center
          .slide
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Partners',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables'

.partners__content
  .VueCarousel-wrapper
    .VueCarousel-inner
      @media (min-width: 1300px)
        justify-content space-between
.material-icons
  font-size 32px
  color $grey-9

.VueCarousel-dot
  color $grey-9 !important

</style>

<style lang="stylus" scoped>
@import '~quasar-variables'

.partners
  &__container
    max-width 1110px
    padding 0px 0 55px 0
    @media (max-width: 1300px)
      padding 45px 45px 0px 45px
    @media (max-width: 768px)
      padding 45px 50px 0px 50px

  &__content
    max-width 1110px
    padding 45px 0 55px 0
    @media (max-width: 1300px)
      padding 45px 45px 55px 45px
    @media (max-width: 768px)
      padding 45px 10px 45px 10px

.slide
  width 150px
  height 150px
  border-radius 150px
  background $primary
</style>
