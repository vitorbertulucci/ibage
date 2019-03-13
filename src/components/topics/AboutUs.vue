<template lang="pug">
  section.about-us.column
    .about-us__presentation.column.column.items-center
      .about-us__presentation__content.column.items-center
        img(src="../../assets/img/ibage-nome-branco.png")
        h5 O Instituto Brasileiro de Ação Municipal e Gestão Pública é uma Instituição que prima pela gestão de excelência e de qualidade de modo a contribuir para um desenvolvimento sustentável para o Brasil, de forma que o atendimento às demandas locais, principalmente em áreas menos favorecidas, gere um ganho estrutural e uma mudança na forma de governar.
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
            h4 Sobre nós
            p O Instituto Brasileiro de Ação Municipal e Gestão Pública (IBAGE) é uma Organização da Sociedade Civil (OSC) de direito privado, sem fins econômicos, que desde 2009 trabalha em todo território nacional para tornar o Brasil um país mais democrático e transparente, disseminando conhecimentos, para que a vida dos cidadãos seja mais digna.
            p Desejamos contribuir para o desenvolvimento sustentável dos Estados, Municípios e regiões menos favorecidas, promovendo, consequentemente, a melhora da qualidade de vida da população local. Atuamos a favor do interesse público e dos direitos dos cidadãos, por meio da gestão dos recursos públicos disponíveis, do planejamento de estratégias de atuação e iniciativas em políticas públicas a fim de melhorar o cenário da administração pública atual.
            p Compreendemos que o desafio é também social, portanto, o IBAGE tem como objetivo a melhoria da qualidade de vida das populações locais, por meio da promoção do bem-estar social e da melhoria da qualidade de vida dessa população.
          .about-us__texts__content__section__right.flex.justify-center
            .img-section
              img(src="../../assets/img/new.png")
        .about-us__text__content__card-section.full-width
          .card-section__card.shadow-global
            h5.after--secondary Missão
            p Contribuir para o Desenvolvimento Sustentável de todos os Estados do Brasil, com ênfase naquelas áreas menos favorecidas.
            //- e consequentemente, promover a melhoria da qualidade de vida da população local.
          .card-section__card.shadow-global
            h5.after--tertiary Visão
            p Ser um ator de mudanças estruturais por meio de oportunidades de transformação social.
          .card-section__card.shadow-global
            h5.after--quaternary Valores
            ul
              li Inovação
              li Ética e Transparência
              li Eficiência
              li Educação de qualidade
        .about-us__texts__content__section--inverted.flex.justify-center.items-center
          .about-us__texts__content__section__left.column
            h4 Objetivos
            p De acordo com o estatuto regimentar, o IBAGE tem como objetivo promover o desenvolvimento sustentável da União, Estados e Municípios brasileiros e atuar para a melhoria do ambiente e da qualidade de vida da população brasileira, mediante as seguintes ações:
          .about-us__texts__content__section__right--inverted.flex.justify-center
            .img-section
              img(src="../../assets/img/new2.png")
        .full-width
          p I. Elaboração e implementação de planos, programas e projetos de natureza social, habitacional, ambiental, educacional, cultural e econômica para União, Estados e Municípios;
          p II. Atuação na defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável do país;
          p III. Confecção e execução de métodos, programas e projetos de modernização administrativa e de desenvolvimento institucional para a Administração Pública Brasileira;
          p IV. Atuação no aperfeiçoamento da gestão, da governança e da arrecadação tributária dos Estados e Municípios;
          p V. Elaboração de projetos de intervenção, manutenção ou recuperação das áreas degradadas, recuperação ambiental e regularização fundiária;
          p VI. Promoção do desenvolvimento econômico e social e combate à pobreza;
          p VII. Realização de estudos e pesquisas, desenvolvimento de tecnologias alternativas, produção e divulgação de informações e conhecimentos técnicos e científicos; para as ações descritas acima, compreendendo atividades de suporte técnico e legal, consultoria, assessoria e capacitação para órgãos do setor público, da iniciativa privada, do terceiro setor e demais segmentos da sociedade civil;
          p VIII. Promoção da inclusão social de crianças, adolescentes e adultos, com e sem deficiência, por meio de atividades educativas, culturais, esportivas, recreativas e de reabilitação, fortalecendo suas potencialidades e estendendo os benefícios para seus familiares;
          p IX. Promoção da inclusão social de pessoas com deficiência moderada através de mobilidade urbana sustentável;
          p X. Realização de ações que incentivem o consumo sustentável e a reciclagem e coleta de lixo, despertando uma consciência ecológica;
          p XI. Disseminação do turismo, da cultura, das artes e da prática esportiva como forma de valorização pessoal e social;
          p XII. Promoção de atividades extracurriculares para fortalecer a educação, vocação artística, turística, esportiva, cultural e ambiental como forma de qualificação para o mercado de trabalho.
        .about-us__texts__content__section.flex.justify-center.items-center
          .about-us__texts__content__section__left.column
            h4 Governança Corporativa
            p A gestão do Instituto é realizada pelo Conselho Diretor, que é formado por um Presidente e um Diretor Administrativo-Financeiro.
            p A fiscalização dos assuntos financeiros e contábeis do Instituto é realizado pelo Conselho Fiscal do IBAGE.
            p Os membros dos Conselhos Diretor e Fiscal são eleitos pela Assembleia Geral, para mandatos de três anos, entre os sócios em pleno gozo de seus direitos legais e estatutários.
          .about-us__texts__content__section__right.flex.justify-center
            .img-section
              img(src="../../assets/img/new3.png")
</template>

<script>
import {
  QExpansionItem
} from 'quasar'

export default {
  name: 'AboutUs',
  components: {
    QExpansionItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.about-us
  width 100%
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
      margin-bottom -34px
      clip-path polygon(100% 0, 0 0, 50% 100%)

    &__content
      max-width 1110px
      padding 45px 0 55px 0
      @media (max-width: 1300px)
        padding 45px 45px 55px 45px
      @media (max-width: 768px)
        padding 45px 30px 45px 30px

      img
        max-width 90px
        margin 0 0 20px 0

      h5
        font-size 18px
        line-height 24px
        max-width 70%
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
            margin-bottom 10px
            @media(max-width: 750px)
              &:last-of-type
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
          width 350px
          @media (max-width: 430px)
            width 280px
          @media (max-width: 360px)
            width 240px

          img
            width 100%
            height auto

      &__section--inverted
        flex-direction row-reverse
        @media(max-width: 750px)
          flex-direction column

.about-us__text__content__card-section
  margin-top 20px
  display grid
  grid-template-columns 33% 33% 33%
  grid-gap 2%
  @media (max-width: 768px)
    display flex
    flex-direction column
    justify-content center
    align-items center

.card-section__card
  width 100%
  @media (max-width: 768px)
    max-width 400px
    margin-bottom 20px
  h5
    margin-top 0px
    &:after
      content ''
      width 35px
      height 7px
      display block
      margin-bottom 20px
  padding 40px

.after--secondary
  &:after
    background $secondary
.after--tertiary
  &:after
    background $tertiary
.after--quaternary
  &:after
    background $quaternary
</style>
