<template lang="pug">
  .news.column.items-center
    .news__container.full-width
      .news__title.self-center
        h3.title Notícias
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .news__content
        .content__primary-news.column
          q-img(:src="primaryNews.img").primary-news__image
          h4 {{ primaryNews.title }}
          p {{ primaryNews.resume }}
          .primary-news__action.full-width.flex.justify-between.items-end
            q-btn(
              color="primary"
              no-caps
            ).btn.no-shadow — Leia mais
            label.text-h5 05/03/2019
        .content__past-news.column.justify-between
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
                ).no-border.no-border-radius.no-shadow — Leia mais
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
        img: require('../../assets/img/miriam-espacio-328568-unsplash.jpg'),
        title: 'Lore Ipsum lore acer',
        resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
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
    @media (max-width: 1100px)
      display flex
      flex-direction column
      align-items center
    display grid
    grid-gap 2%
    grid-template-columns 49% 49%

.past-news__item
  @media (max-width: 1100px)
    padding-top 16px
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
  width 20px
  background $secondary
.colorful-border-1
  width 20px
  background $tertiary
.colorful-border-2
  width 20px
  background $quaternary
</style>
