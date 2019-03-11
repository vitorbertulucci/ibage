<template lang="pug">
  section.news.column.items-center
    .news__container.full-width
      .news__title.self-center
        h3.title Publicações
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .news__content
        .content__primary-news
          q-img(:src="primaryNews.img").primary-news__image
          h4 {{ primaryNews.title }}
          p {{ primaryNews.resume }}
          .primary-news__action.full-width.flex.justify-between.items-end
            a(href="http://l.profamaro.com.br/ebook" target="_blank")
              q-btn(
                color="primary"
                no-caps
              ).btn.no-shadow Leia mais
            label.text-h5 Fonte: Prof. Amaro
        //- .content__past-news.column.justify-between
          div(v-for="(item, index) of news").past-news__item.row.no-wrap
            q-img(:src="item.img").past-news__image
            div.column.past-news__content.text-justify
              label.text-h6 {{ item.title }}
              p {{ item.resume }}
              div.full-width.flex.justify-between.items-end
                label {{ item.date }}
                q-btn(
                  color="primary"
                  no-caps
                ).no-border.no-border-radius.no-shadow Leia mais
            div(:class="`colorful-border-${index}`")
</template>

<script>
import {
  QImg,
  QBtn
} from 'quasar'

export default {
  name: 'News',
  components: {
    QImg,
    QBtn
  },
  data () {
    return {
      primaryNews: {
        img: require('../../assets/img/federal-resources.jpg'),
        title: 'COMO CAPTAR RECURSOS FEDERAIS',
        resume: 'Apresenta um tutorial passo a passo sobre como acessar os programas federais com recursos não reembolsáveis disponíveis para os municípios.',
        date: Date.now()
      },
      news: [
        { img: require('../../assets/img/miriam-espacio-328568-unsplash.jpg'), title: 'Lore Ipsum lore lore', resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', date: '05/03/2019' },
        { img: require('../../assets/img/miriam-espacio-328568-unsplash.jpg'), title: 'Lore Ipsum lore lore', resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', date: '05/03/2019' },
        { img: require('../../assets/img/miriam-espacio-328568-unsplash.jpg'), title: 'Lore Ipsum lore lore', resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', date: '05/03/2019' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.news
  width 100%
  color $grey-10
  &__title
    margin-bottom 45px

  .title
    margin 0 0 20px 0

  &__container
    max-width 1110px
    padding 60px 0
    @media (max-width: 1300px)
      padding 60px 45px
    @media (max-width: 768px)
      padding 45px 30px

  &__content
    // display grid
    // grid-gap 4%
    // grid-template-columns 48% 48%
    // max-width 1110px
    // padding 45px 0 55px 0
    // @media (max-width: 1300px)
    //   padding 45px 45px 55px 45px
    // @media (max-width: 768px)
    //   padding 45px 10px 45px 10px
    @media (max-width: 1100px)
      display flex
      flex-direction column
      align-items center

.content__primary-news
  @media (max-width: 1100px)
    margin-bottom 45px

  h4
    margin 20px 0 10px 0

  p
    margin-bottom 30px
    @media (max-width: 610px)
      margin-bottom 20px

.primary-news__action
  @media (max-width: 1100px)
    flex-direction row-reverse

  .q-btn
    padding 10px 30px
    border-radius 0
    font-size 20px
    @media(max-width: 520px)
      font-size 16px

.past-news__item
  @media (max-width: 1100px)
    padding-top 25px
  @media (max-width: 610px)
    .past-news__content
      flex-wrap wrap !important
      padding 0
      padding-right 16px
    .past-news__image
      display none

.past-news__image
  max-width 200px
  max-height 200px

.past-news__content
  padding 0 16px

.colorful-border-0
  width 15px
  background $secondary

.colorful-border-1
  width 15px
  background $tertiary

.colorful-border-2
  width 15px
  background $quaternary

.text-h5
  font-size 18px
</style>
