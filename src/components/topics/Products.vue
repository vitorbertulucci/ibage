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
        div(v-for="(item, index) of items" :class="`item-${index}`").content__items.column.items-center.q-card.shadow-global.no-border-radius
          div(:class="`logo-${index}`").item__logo.flex.items-center.justify-center
            q-icon(:name="item.icon" size="80px" color="white")
          h4.item__title {{ item.title }}
          p(v-for="desc of item.description").item__description {{ desc }}
          .products__actions.flex.items-center.justify-center
            q-btn(color="primary" unelevated no-caps @click="redirectToPage(item.router)").no-border.no-shadow.no-border-radius Saiba mais
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
        { title: 'Consultoria', router: '#', icon: 'mdi-finance', description: ['O Instituto IBAGE oferece consultoria, assessoria e auditoria às administrações públicas municipais para dirimir problemas de gestão e garantir serviços de qualidade aos cidadãos.', 'Acreditamos que por meio da melhoria da gestão pública do Brasil teremos um serviço de excelência e respeito aos interesses públicos.', 'O IBAGE atua também na gestão de projetos e de convênios, assegurando o acompanhamento administrativo, financeiro, técnico e jurídico, sempre de acordo com a ética e a legislação vigente.'] },
        { title: 'Tecnologia e Inovação', router: '#', icon: 'memory', description: ['Com o uso de soluções digitais e inovações tecnológicas é possível a administração pública prestar um serviço de melhor qualidade, com presteza e rendimento funcional. Assim, reduzir custos à máquina administrativa e alocar corretamente os recursos existentes.'] },
        { title: 'Projetos sociais', router: '#', icon: 'mdi-account-group-outline', description: ['Compreendemos que o nosso desafio é também na área social, de forma a promover um desenvolvimento sustentável para toda a população local. Desse modo, temos trabalhado em diversas frentes para trazer benefícios reais à sociedade.'] },
        { title: 'Treinamento e capacitação', router: '#', icon: 'mdi-bullseye-arrow', description: ['O IBAGE realiza a capacitação e o treinamento de mão de obra especializada por meio de cursos presenciais, em Brasília ou in loco, contribuindo para a formação de um capital humano especializado.'] }
      ]
    }
  },
  methods: {
    redirectToPage (router) {
      this.$router.push(router)
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
  padding 40px
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
  border-radius 150px !important

.item__title
  margin 25px 0
  text-align center

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
