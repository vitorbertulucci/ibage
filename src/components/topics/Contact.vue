<template lang="pug">
  section.contact.column.items-center
    .contact__container
      .contact__title.flex.justify-center
        h3.title Contato
        .underline.full-width.row.justify-center
          .one
          .two
          .three
          .four
          .five
      .contact__content
        .content__social-media.row.justify-left
          .infos.flex.column.full-width
            label Instituto Brasileiro de Ação Municipal e Gestão Pública (IBAGE)
            label Setor Bancário Sul, Quadra 02, Bloco E, Edifício Prime Sala 206, Asa Sul, Brasília-DF
            label CEP: 70070-120
            label Telefone: (61) 3041-9566
            label E-mail: contato@ibage.com.br
          .content__social-media__btns.flex.items-center.justify-center.full-width
            a(href="https://www.facebook.com/IbageOficial/" target="_blank").color--white
              q-btn(icon="mdi-facebook" round).no-shadow
            a(href="https://www.instagram.com/ibageoficial/" target="_blank").color--white
              q-btn(icon="mdi-instagram" round).no-shadow
            a(href="mailto:contato@ibage.com.br" title="contato@ibage.com.br").color--white
              q-btn(icon="mdi-email" round).no-shadow
          .full-width.items-center.justify-center
            q-img(src="../../assets/img/ibage.png").social-media__logo
        //- form(action="https://formaholic.com/f/4e4b45dfb7ef613b" method="POST" accept-charset="UTF-8").content__email-form.column
        form(action="https://formcarry.com/s/peKULRZtIkc" method="POST" accept-charset="UTF-8").content__email-form.column
          q-input(
            v-for="field of fields"
            :key="field.key"
            v-model="emailSubject[field.key]"
            :placeholder="field.label"
            :type="field.type"
            :name="field.key"
            dense
            square
            outlined
            standout
            bg-color="white"
          ).email-form__input.no-shadow.no-border-radius
          input(type="hidden" name="_gotcha").display--none
          .email-form__btn.flex.self-end
            q-btn(
              type="submit"
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
        { label: 'Nome', key: 'name', type: 'text' },
        { label: 'E-mail', key: 'email', type: 'email' },
        // { label: 'Endereço', key: 'address', type: 'text' },
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
  color white
  background $quinary
  width 100%
  &__container
    max-width 1110px
    @media (max-width: 1300px)
      padding 0 45px
    @media (max-width: 768px)
      padding 0 30px

  .infos
    padding-left 20px
    margin 0

  &__content
    display grid
    margin 0 auto 50px auto
    grid-column-gap 16px
    grid-template-columns 45% auto
    @media (max-width: 890px)
      display flex
      flex-direction column
      .content__social-media
        .infos
          // text-align center
          // align-items center
          padding 0 0 20px 20px

.contact__title
  margin-bottom 45px
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
    font-size 20px
    @media (max-width: 540px)
      font-size 16px !important

.social-media__logo
  margin 0 auto
  max-width 200px
  @media (max-width: 890px)
    margin 0 auto 20px auto

.color--white
  color white

.display--none
  display none
</style>

<style lang="stylus">
@import '~quasar-variables'

.content__email-form
  .q-field__native
    padding 10px
</style>
