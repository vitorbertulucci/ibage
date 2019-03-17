<template lang="pug">
  q-page.column.technology-page.column.items-center
    q-header.header-home.flex.items-center.justify-center.shadow-global.animate-pop
      div.header-home__container.flex.items-center.justify-between
        img(src="../assets/img/ibage-logo.png" @click="redirectToHome").header-home__container__logo
        nav.header-home__container__nav
          a(@click="redirectToHome") Voltar
    .technology-page__container.flex.justify-center
      .technology-page__title.self-center
        h3.title Tecnologia e Inovação
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .technology-page__content
        h5.title Sistema de gestão de custos aplicados aos Municípios
        p A Lei de Responsabilidade Fiscal (LRF) – Lei Complementar nº 101, de 04 de maio de 2000 – em seu § 3º, art. 50, obriga a Administração Pública a manter sistema de custos que permita a avaliação e o acompanhamento da gestão orçamentária, financeira e patrimonial. Esta exigência não está somente na LRF tratando sobre o tema, tem-se ainda Lei nº 4.320/1964, Decreto-Lei nº 200/1967, Lei nº 9.724/1998, Lei nº 10.180/2001.
        p A Universidade de Brasília (UnB) dedicou esforços para produzir uma solução de sistema de custos e gestão que pudesse ser aplicado de forma integral no âmbito de Estados e Municípios, desenvolvido por meio de pesquisa de doutorado do Prof. Marilson Dantas denominada “Um Modelo de Custos aplicado ao Setor Público sob a visão da accountability” que deu origem ao modelo operacional que se materializam nos dois sistemas de custos e gestão da UnB, denominados Sistema de Informação de Custos e Gestão aplicada ao Setor Público – SICGESP e Repositório de Relatório de Custos aplicado ao Setor Público – RECASP.
        p Trata-se de um sistema de informação gerencial integrado que subsidia a gestão no processo de tomada de decisão, caracterizado como um sistema complexo, com seus elementos de interação, organização e estrutura.
        p A necessidade das Prefeituras e dos governos Estaduais é aprimorar a qualidade do gasto público. Conforme se observa, o aumento da arrecadação gera impactos nos setores econômicos e isto tem gerado várias consequências negativas. Para atender as demandas sociais é preciso melhorar a alocação dos gastos públicos por meio de um maior controle de custos.

        h5.title Instrumento de governança para auxílio ao planejamento, controle e avaliação dos custos
        p Subsidiar decisões governamentais e organizacionais que conduzam à alocação mais eficiente do gasto público; sendo essencial para a transformação de paradigmas que existem atualmente na visão estratégica do papel do setor público.

        h5.title Impactos esperados da informação na gestão de custos
        p - Melhorar a qualidade dos gastos do setor público;
        p - Avaliar a eficiência da aplicação dos recursos públicos;
        p - Melhorar a eficiência por meio da produtividade;
        p - Possibilitar a melhoria do processo de tomada de decisão do gestor público por meio da comparação dos custos das diversas estruturas operacionais exercidas pelo Setor Público;
        p - Estabelecer uma medida comparável de avaliação sistêmica das atividades do Setor Público.
    footer-page(light)
</template>

<script>
import {
  QPage,
  QHeader
} from 'quasar'
import FooterPage from '../components/general/Footer'
export default {
  name: 'TechnologyPage',
  components: {
    QPage,
    QHeader,
    FooterPage
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.header-home
  color $grey-9
  &__container
    width 100%
    max-width 1110px
    @media (max-width: 1300px)
      padding 45px
    @media (max-width: 768px)
      padding 15px 25px
    @media (max-width: 414px)
      padding 15px 10px

.header-home
  z-index 10
  width 100%
  height 90px
  background white
  position fixed
  top 0
  @media (max-width: 414px)
    height 65px

  &__container
    &__logo
      max-width 78px
      cursor pointer
      @media (max-width: 414px)
        max-width 55px

    &__nav
      color $primary
      font-size 16px

      a
        margin-left 30px
        display block
        font-weight 700
        color $primary
        text-decoration none
        transition all .2s ease

        &:first-of-type
          margin 0

        &:visited
          color $primary

        &:hover
          color $quaternary

.technology-page
  color $grey-9

  &__title
    .title
      margin 0
      padding-bottom 20px
      color $grey-9
      @media (max-width: 750px)
        font-size 40px
        line-height 48px
      @media (max-width: 570px)
        font-size 32px
        line-height 36px

  &__container
    padding 60px 0
    max-width 1110px
    @media (max-width: 1300px)
      padding 60px 45px
    @media (max-width: 768px)
      padding 45px 30px 45px 30px

  &__content

    .title
      font-size 24px
      margin 45px 0 20px 0
      text-align left

      &:before
        content ''
        width 50px
        height 7px
        display block
        background $primary
        margin-bottom 17px
</style>
