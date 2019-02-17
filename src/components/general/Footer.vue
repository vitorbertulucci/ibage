<template lang="pug">
  footer.footer-home
    div.footer-home__content.flex.items-center.justify-center
      div.footer-home__content__container.flex.justify-between
        img(src="../../assets/ibage.png")
        div.links.flex.justify-between
          div(v-for="l in 3").links__item.column.justify-center
            h4 Lorem Ipsum
            a(href="#") Lorem Ipsum
            a(href="#") Lorem Ipsum
            a(href="#") Lorem Ipsum
    div.footer-home__copyright.flex.items-center.justify-center
      p Ibage 2019 © Todos os direitos reservados
</template>

<script>
export default {
  name: 'FooterHome'
}
</script>

<style lang="stylus">
@import '~quasar-variables'

.footer-home
  width 100%
  margin auto 0 0 0

  &__content
    background $quinary
    width 100%
    padding 30px 0
    @media (max-width: 1300px)
      padding 30px 45px
    @media (max-width: 768px)
      padding 30px

    &__container
      width 100%
      max-width 1110px
      @media (max-width: 880px)
        flex-direction column
        align-items center

      img
        max-width 250px
        filter brightness(0) invert(1)
        opacity 0.15
        pointer-events none
        margin-right 15%
        @media (max-width: 1050px)
          margin-right 10%
        @media (max-width: 880px)
          margin-right 0
          margin-bottom 40px
        @media (max-width: 340px)
          max-width 200px

  .links
    color white
    flex 1
    @media (max-width: 880px)
      width 100%
      flex-direction row
    @media (max-width: 580px)
      flex-direction column
      align-items center

    &__item
      @media (max-width: 580px)
        margin-bottom 20px
        &:last-of-type
          margin 0

    h4
      margin 0
      font-weight bold
      font-size 20px
      color white

    a
      color white
      text-decoration none
      font-size 16px
      transition all .2s ease

      &:visited
        color white

      &:hover
        color $quaternary

  &__copyright
    background #01442c
    width 100%
    padding 10px 0
    @media (max-width: 1300px)
      padding 10px 45px

    p
      width 100%
      color #497564
      max-width 1110px
      margin 0
      @media (max-width: 414px)
        text-align center
</style>
