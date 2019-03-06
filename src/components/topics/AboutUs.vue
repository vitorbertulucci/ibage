<template lang="pug">
  section.about-us.column
    .about-us__presentation.column.column.items-center
      .about-us__presentation__content.column.items-center
        h2 Ibage
        h5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type lorem ipsum took a galley.
    .about-us__texts.column.items-center
      .about-us__texts__content.column.items-center
        .about-us__texts__content__title.flex.justify-center
          h3.title Quem Somos
          .underline.full-width.row.justify-center
            .one
            .two
            .three
            .four
            .five
        .about-us__texts__content__section.flex.justify-center.items-center
          .about-us__texts__content__section__left.column
            h4 Lorem ipsum lore
            p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
          .about-us__texts__content__section__right.flex.justify-center
            .img-section
              img(src="../../assets/img/ibage-logo.png")
        .about-us__texts__content__section--inverted.flex.justify-center.items-center
          .about-us__texts__content__section__left.column
            h4 Lorem ipsum lore
            p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
          .about-us__texts__content__section__right--inverted.flex.justify-center
            .img-section
              img(src="../../assets/img/ibage-logo.png")
        .about-us__texts__content__section.flex.justify-center.items-center
          .about-us__texts__content__section__left.column
            h4 Lorem ipsum lore
            p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
          .about-us__texts__content__section__right.flex.justify-center
            .img-section
              img(src="../../assets/img/ibage-logo.png")
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
  &__texts
    color $grey-10

    &__content
      position relative
      max-width 1110px
      width 100%
      padding 80px 0 70px 0
      @media (max-width: 1300px)
        padding 80px 45px 60px 45px
      @media (max-width: 768px)
        padding 80px 30px

      &__title
        .title
          margin-top 0
          margin-bottom 20px
          @media (max-width: 540px)
            font-size 40px

        .underline
          @media (max-width: 540px)
            display flex
            justify-content center
          *
            height 6px
            width 20px
            @media (max-width: 540px)
              height 6px
              width 28px

          .one
            background $primary

          .two
            background $secondary

          .three
            background $tertiary

          .four
            background $quaternary

          .five
            background #01442c

      &__section
      &__section--inverted
        color $grey-10
        width 100%
        margin-top 45px
        @media(max-width: 750px)
          flex-direction column

        &__left
          flex 1

          h4
            font-size 36px
            margin 0 0 20px 0

            &:before
              content ''
              width 65px
              height 7px
              display block
              background $primary
              margin-bottom 17px

          p
            text-align justify
            margin 0
            color $grey-10
            @media(max-width: 750px)
              margin-bottom 30px

        &__right
          flex 1
          margin-left 30px
          @media(max-width: 750px)
            margin-left 0

        &__right--inverted
          flex 1
          margin-right 30px
          @media(max-width: 750px)
            margin-right 0

        .img-section
          width 300px

          img
            width 100%
            height auto

      &__section--inverted
        flex-direction row-reverse
        @media(max-width: 750px)
          flex-direction column

</style>
