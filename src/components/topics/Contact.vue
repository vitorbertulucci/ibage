<template lang="pug">
  div.contact.column
    .contact__title.mw
      h3 Contato
    .contact__content.mw
      .content__social-media
        p Para maiores esclarecimentos, retirar dúvidas, dar sugestões ou críticas, entre em contato conosco por meio do formulário ou pelas nossas redes sociais.
        q-btn(icon="mdi-facebook" round size="lg").no-shadow
        q-btn(icon="mdi-twitter" round size="lg").no-shadow
        q-btn(icon="mdi-youtube" round size="lg").no-shadow
      .content__email-form.column
        q-input(
          v-for="field of fields"
          v-model="emailSubject[field.key]"
          :placeholder="field.label"
          :type="field.type"
          hide-underline
          inverted
          color="white"
          outlined
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
  QBtn
} from 'quasar'

export default {
  name: 'Contact',
  components: {
    QInput,
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
  height 100vh
  background #0a0b0cc7
  &__content
    flex 1
    margin-top 20px
    display grid
    grid-column-gap 16px
    grid-template-columns 45% auto
    @media (max-width: 890px)
      grid-template-rows auto auto

.content__social-media
  p
    font-size 20px

.email-form__input
  margin-bottom 16px
</style>
