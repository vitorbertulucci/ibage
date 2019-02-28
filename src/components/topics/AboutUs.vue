<template lang="pug">
  section.about-us.column
    .about-us__presentation.column.column.items-center
      .about-us__presentation__content.column.items-center
        h2 Ibage
        h5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type lorem ipsum took a galley.
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.about-us

  &__presentation
    background $primary
    color white
    width 100%
    text-align center
    position relative

    &:after
      content ''
      position absolute
      background $primary
      width 70px
      height 35px
      bottom 0
      margin-bottom -35px
      clip-path polygon(100% 0, 0 0, 50% 100%)

    &__content
      max-width 1110px
      padding 45px 0 55px 0
      @media (max-width: 1300px)
        padding 45px 45px 55px 45px
      @media (max-width: 768px)
        padding 45px 30px 45px 30px

      h2
        font-size 44px
        line-height 48px
        margin 0 0 20px 0

      h5
        font-size 18px
        line-height 24px
        max-width 50%
        margin 0
        @media(max-width: 965px)
          max-width 80%
        @media(max-width: 768px)
          max-width 90%
          font-size 16px
        @media(max-width: 480px)
          max-width 100%
</style>
