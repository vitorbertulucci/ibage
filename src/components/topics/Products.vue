<template lang="pug">
  section.products.column.items-center
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
        div(v-for="(item, index) of items" :class="`item-${index}`").content__items.column.items-center
          div(:class="`logo-${index}`").item__logo.flex.items-center.justify-center
            q-icon(:name="item.icon" size="80px" color="white")
          h4.item__title {{ item.title }}
          p.item__description {{ item.description }}
          .products__actions.flex.items-center.justify-center
            q-btn(color="primary" unelevated no-caps).no-border.no-shadow.no-border-radius Lorem Ipsum
</template>

<script>
import { QIcon } from 'quasar'
export default {
  name: 'ProductsAndServices',
  components: {
    QIcon
  },
  data () {
    return {
      items: [
        { title: 'Consultoria', icon: 'mdi-finance', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' },
        { title: 'Tecnologia e Inovação', icon: 'memory', description: 'Trata-se de um sistema de informação gerencial integrado que subsidia a gestão no processo de tomada de decisão, caracterizado como um sistema complexo, com seus elementos de interação, organização e estrutura.' },
        { title: 'Projetos sociais', icon: 'mdi-account-group-outline', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' },
        { title: 'Treinamento e capacitação', icon: 'mdi-bullseye-arrow', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.' }
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
  color $grey-10

  &__title
    margin-bottom 45px

  .title
    margin 0
    margin-bottom 20px

  &__container
    max-width 1110px
    padding 60px 0
    @media (max-width: 1300px)
      padding 60px 45px
    @media (max-width: 768px)
      padding 45px 30px 45px 30px

  // &__content
  //   max-width 1110px
  //   padding 55px 0
  //   @media (max-width: 1300px)
  //     padding 55px 45px
  //   @media (max-width: 768px)
  //     padding 55px 30px 45px 30px
  //   @media(max-width: 750px)
  //     padding 0 30px 45px 30px

.products__content
  display grid
  grid-template-columns 48% 48%
  grid-column-gap 4%
  grid-row-gap 60px
  @media(max-width: 750px)
    display flex
    flex-direction column
    align-items center

.content__items
  position relative
  max-width 450px
  margin 0 auto
  @media(max-width: 750px)
    max-width none
    margin-top 60px
    &:first-of-type
      margin-top 45px

.item-2
.item-3
  grid-row-start 2

.logo-0
  background $primary

.logo-1
  background $quaternary

.logo-2
  background $tertiary
.logo-3
  background $quinary

.item__logo
  width 150px
  height 150px
  border-radius 150px

.item__title
  margin 25px 0
  text-align left

.item__description
  flex 1
  margin 0

.products__actions
  padding-top 25px
  .btn
    padding 10px 30px
    border-radius 0
    font-size 20px
    @media (max-width: 540px)
      font-size 16px
</style>
