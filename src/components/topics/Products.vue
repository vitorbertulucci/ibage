<template lang="pug">
  .products.column.items-center
    .products__container.full-width
      .products__title.self-center
        h3.title Produtos e Serviços
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .products__content
        div(v-for="(item, index) of items").content__items.column.items-center.self-center
          div(:class="`logo-${index}`").item__logo
          h4.item__title {{ item.title }}
          p.item__description {{ item.description }}
      .products__actions.flex.items-center.justify-center
        q-btn(color="primary" unelevated no-caps).btn Lorem Ipsum
</template>

<script>

export default {
  name: 'ProductsAndServices',
  data () {
    return {
      items: [
        { title: 'Lorem ipsum lore lore', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' },
        { title: 'Lorem ipsum lore lore', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' },
        { title: 'Lorem ipsum lore lore', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'
.products
  text-align justify
  background $grey-3

  &__container
    max-width 1110px
    padding 0px 0 55px 0
    @media (max-width: 1300px)
      padding 45px 45px 55px 45px
    @media (max-width: 768px)
      padding 45px 30px 45px 30px

  &__content
    max-width 1110px
    padding 45px 0 55px 0
    @media (max-width: 1300px)
      padding 45px 45px 55px 45px
    @media (max-width: 768px)
      padding 0 30px 45px 30px

.title
  text-align center
  margin-bottom 20px
  @media (max-width: 540px)
    font-size 40px

.underline
  @media (max-width: 540px)
    display flex
    justify-content center
  *
    height 6px
    width 28px
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

.products__content
  display grid
  grid-template-columns auto 33% auto
  grid-gap 30px
  @media(max-width: 750px)
    display flex
    flex-direction column
    align-items center
    .content__items
      margin-top 45px
      max-width none

.content__items
  position relative
  max-width 300px
  margin 0 auto

.logo-0
  background $primary
.logo-1
  background $quaternary
.logo-2
  background $tertiary

.item__logo
  width 150px
  height 150px
  border-radius 150px

.item__title
  margin 16px 0
  // font-size 16px
.item__description
  flex 1

.products__actions
  .btn
    border-radius 0
    font-size 24px
    @media (max-width: 540px)
      font-size 22px
</style>
