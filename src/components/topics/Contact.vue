<template lang="pug">
  div.contact.column
    .contact__title.mw
      h3.title Contato
      .underline.full-width.row
        .one
        .two
        .three
        .four
        .five
    .contact__content.mw
      .content__social-media.row.justify-center
        p Para maiores esclarecimentos, retirar dúvidas, dar sugestões ou críticas, entre em contato conosco por meio do formulário ou pelas nossas redes sociais.
        q-btn(icon="mdi-facebook" round size="lg").no-shadow
        q-btn(icon="mdi-twitter" round size="lg").no-shadow
        q-btn(icon="mdi-youtube" round size="lg").no-shadow
        .full-width.items-center.justify-center
          q-img(src="../../assets/img/ibage.png").social-media__logo
      .content__email-form.column
        q-input(
          v-for="field of fields"
          :key="field.key"
          v-model="emailSubject[field.key]"
          :placeholder="field.label"
          :type="field.type"
          hide-underline
          inverted
          color="white"
          outlined
          rounded
          bg-color="white"
        ).email-form__input
        .email-form__btn.flex.self-end
          q-btn(
            size="lg"
            no-caps
            rounded
            color="primary"
          ).email-form Enviar
</template>

<script>
import {
  QInput,
  QImg,
  QBtn
} from 'quasar'

export default {
  name: 'Contact',
  components: {
    QInput,
    QImg,
    QBtn
  },
  data () {
    return {
      emailSubject: {},
      fields: [
        { label: 'Nome', key: 'name', type: 'text' },
        { label: 'E-mail', key: 'email', type: 'text' },
        { label: 'Endereço', key: 'address', type: 'text' },
        { label: 'Telefone', key: 'phone', type: 'text' },
        { label: 'Mensagem', key: 'message', type: 'textarea' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.contact
  padding 0 75px
  color white
  flex 1
  // background #0a0b0cc7
  background $quinary
  &__content
    flex 1
    display grid
    margin 0 auto 20px auto
    grid-column-gap 16px
    grid-template-columns 45% auto
    @media (max-width: 890px)
      display flex
      flex-direction column
      .content__social-media
        text-align center
        align-items center
        padding-bottom 20px

.contact__title
  margin-bottom 40px
.content__social-media
  p
    font-size 16px

.email-form__input
  margin-bottom 16px

.social-media__logo
  margin 0 auto
  max-width 200px
  @media (max-width: 890px)
    margin 0 auto 20px auto

.title
  margin-bottom 20px

.underline
  *
    height 1vh
    width 5vw
    min-width 20px
    max-width 30px
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
</style>
