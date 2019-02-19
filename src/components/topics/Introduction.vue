<template lang="pug">
  div.introduction.column
    div.introduction__header.flex.justify-center
      div.header__items.flex.full-width.justify-between.items-center
        q-img(src="../../assets/img/ibage.png").header__logo
        nav.header__nav.flex
          a(href="#") Quem Somos
          a(href="#") Produtos e Serviços
          a(href="#") Notícias
          a(href="#") Parceiros
          a(href="#") Contatos
        q-btn(
          icon="mdi-menu"
          color="grey-3"
          round
          flat
        ).header__menu-button
    div.introduction__content.flex.no-wrap
      div.content__simple-description
        h2 Lorem Ipsum is simply dummy text of the printing
        p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      //- div.content__growing-plant-animation
        div.wrapper
          div.box
            div.stem
              div.leaf.leaf01
                div.line
              div.leaf.leaf02
                div.line
              div.leaf.leaf03
                div.line
              div.leaf.leaf04
                div.line
              div.leaf.leaf05
                div.line
              div.leaf.leaf06
                div.line
            div.pot
            div.pot-top
</template>

<script>
import { QBtn, QImg } from 'quasar'

export default {
  name: 'Introduction',
  components: {
    QBtn,
    QImg
  },
  data () {
    return {}
  },
  mounted () {
    // document.getElementById('q-app').classList.add('block-overflow')
    // document.getElementsByClassName('stem')[0].classList.add('rain')
    // setTimeout(() => {
    //   document.getElementById('q-app').classList.remove('block-overflow')
    //   document.getElementsByClassName('stem')[0].classList.remove('rain')
    // }, 2000)
  }
}
</script>

<style lang="stylus">
.block-overflow
  overflow hidden !important
</style>

<style lang="stylus" scoped>
@import '~quasar-variables'
.introduction
  flex 1
  height 100vh
  max-height 768px
  z-index 0
  padding 0 40px
  background-image url('../../assets/img/growing-plant.jpg')
  background-size cover
  background-position bottom

  &:before
    z-index -1
    content ''
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    opacity 0.65
    background-image linear-gradient(120deg, $primary, $quaternary 100%)
    max-height 768px

.introduction__header
  height 20vh
  margin 20px 0
  .header__items
    max-width 1100px

.header__logo
  filter brightness(0) invert(1)
  width 100vh
  max-width 100px

.header__nav
  font-size 16px
  @media (max-width: 890px)
    display none
  a
    margin-left 30px
    display block
    font-weight 700
    color $grey-2
    text-decoration none
    transition all .2s ease
    &:hover
      color white

    &:first-of-type
      margin 0

.header__menu-button
  display none
  @media (max-width: 890px)
    display block
  &:hover
    color white

.introduction__content
  align-self center
  max-width 1100px
  p
    font-size 16px
  color $grey-2
  width 100%
  flex 1
  @media(max-width: 890px)
    flex-direction column
.content__simple-description
  width 60%
  @media (max-width: 890px)
    width 100%
    text-align center
    h2
      font-size 3em
  h2
    margin-top 0px
    font-weight bold

.content__growing-plant-animation
  width 40%
  @media (max-width: 890px)
    width 100%
    flex 1
    .wrapper
      justify-content center
  display flex
  justify-content flex-end

.wrapper {
  // position:absolute;
  // bottom:0;
  width:100%;
  display flex
  flex 1
  display flex
  justify-content flex-end
  align-items flex-end
}

.box {
  position:relative;
  // margin:auto;
  display:block;
  max-width:500px;
  max-height:500px;
  background:none;
  width 100%
  height 100%
  display flex
  flex-direction column-reverse
}

.pot {
  // position:absolute;
  width:50%;
  max-width 150px
  height:20%;
  margin 0 auto
  bottom:0;
  // left:40%;
  background:#FCAA67;
  -webkit-clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  box-shadow: inset 0 16px 20px rgba(0,0,0,0.3);
}

.pot-top {
  z-index 20
  // position:absolute;
  width:52%;
  height:5%;
  bottom:17%;
  max-width 160px
  // left:39%;
  margin 0 auto
  background:#FCAA67;
  border-radius:3px;
}

.stem {
  position:absolute;
  width:2%;
  height:65%;
  left:49%;
  bottom:20%;
  background:#70B77E;
}

.leaf {
  position:absolute;
  width:700%;
  height:10%;
  border-radius:50%;
  background:#70B77E;
}

.leaf .line {
  position:absolute;
  width:80%;
  height:1%;
  background:rgba(0,0,0,0.1);
  top:48%;
}

.leaf01 {
  top:70%;
  left:50%;
  transform:rotate(-25deg);
}

.leaf02 {
  top:50%;
  right:50%;
  transform:rotate(205deg);
}

.leaf03 {
  top:30%;
  left:50%;
  transform:rotate(-25deg);
}

.leaf04 {
  top:20%;
  right:50%;
  transform:rotate(205deg);
}

.leaf05 {
  top:-12%;
  left:-120%;
  transform:rotate(-60deg);
}

.leaf06 {
  top:-6%;
  right:22%;
  transform:rotate(195deg);
}

/* --- ANIMATION --- */

.stem, .leaf {
  animation-duration: 1.2s!important;
  animation-fill-mode:forwards;
}

.stem.rain {
  animation: grow 1s linear 1;
}

@keyframes grow {
  0% {
    bottom:-40%;
    width:1%;
  }
  100% {
    bottom:20%;
    width:2%;
  }
}

.stem.rain .leaf {
  animation: leafGrow 1s linear 1;
  animation-fill-mode:forwards;
}

@keyframes leafGrow {
  0% {
    width:0%;
    height:0%;
  }
  100% {
    width:700%;
    height:10%;
  }
}

.stem.rain .leaf05 {
  animation: topLeafRight 1s linear 1;
}

@keyframes topLeafRight {
  0% {
    top:5%;
    width:0%;
    height:0%;
    left:10%;
  }
  100% {
    width:700%;
    height:10%;
    top:-17%;
    left:-120%;
  }
}

.stem.rain .leaf06 {
  animation: topLeafLeft 1s linear 1;
}

@keyframes topLeafLeft {
  0% {
    top:0%;
    width:0%;
    height:0%;
  }
  100% {
    width:700%;
    height:10%;
    top:-9%;
  }
}
</style>
