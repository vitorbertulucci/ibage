<template lang="pug">
  div.contact.column.items-center
    .contact__container
      .contact__title.flex
        h3.title Contato
        .underline.full-width.row
          .one
          .two
          .three
          .four
          .five
      .contact__content
        .content__social-media.row.justify-center
          p Para maiores esclarecimentos, retirar dúvidas, dar sugestões ou críticas, entre em contato conosco por meio do formulário ou pelas nossas redes sociais.
          .content__social-media__btns
            q-btn(icon="mdi-facebook" round).no-shadow
            q-btn(icon="mdi-twitter" round).no-shadow
            q-btn(icon="mdi-youtube" round).no-shadow
          .full-width.items-center.justify-center
            q-img(src="../../assets/img/ibage.png").social-media__logo
        .content__email-form.column
          q-input(
            v-for="field of fields"
            :key="field.key"
            v-model="emailSubject[field.key]"
            :placeholder="field.label"
            :type="field.type"
            dense
            square
            outlined
            standout
            bg-color="white"
          ).email-form__input.no-shadow
          .email-form__btn.flex.self-end
            q-btn(
              size="lg"
              no-caps
              color="primary"
            ).email-form.no-shadow Enviar
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
        { label: 'Nome', key: 'name', type: 'email' },
        { label: 'E-mail', key: 'email', type: 'text' },
        // { label: 'Endereço', key: 'address', type: 'text' },
        { label: 'Telefone', key: 'phone', type: 'tel' },
        { label: 'Mensagem', key: 'message', type: 'textarea' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.contact
  color white
  flex 1
  background $quinary

  &__container
    max-width 1110px
    @media (max-width: 1300px)
      padding 0 45px
    @media (max-width: 768px)
      padding 0 30px

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
  @media (max-width: 540px)
    justify-content center

.content__social-media
  p
    font-size 16px
    margin-bottom 0
    @media (max-width: 890px)
      max-width 80%
    @media (max-width: 520px)
      line-height 22px

  &__btns
    @media (max-width: 890px)
      margin 20px 0
    @media (max-width: 540px)
      margin 30px 0

  .q-btn
    border-radius 0
    font-size 28px
    @media (max-width: 540px)
      font-size 22px

.email-form__input
  margin-bottom 12px

.email-form__btn
  .q-btn
    padding 10px 30px

.social-media__logo
  margin 0 auto
  max-width 200px
  @media (max-width: 890px)
    margin 0 auto 20px auto

.title
  margin-bottom 10px
  @media (max-width: 540px)
    font-size 40px

.underline
  @media (max-width: 540px)
    display flex
    justify-content center
  *
    height 6px
    width 34px
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
</style>

<style lang="stylus">
@import '~quasar-variables'

.content__email-form
  .q-field__native
    padding 10px
</style>
