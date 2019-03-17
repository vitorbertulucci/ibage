import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      links: [
        { title: 'Quem Somos', ref: 'about-us' },
        { title: 'Produtos e Serviços', ref: 'products-and-services' },
        { title: 'Publicações', ref: 'news' },
        { title: 'Parceiros', ref: 'partners' },
        { title: 'Contato', ref: 'contact' }
      ]
    }
  },
  methods: {
    ...mapActions('menuMobile', [ 'setViewState' ]),
    ...mapActions('scrollPosition', [ 'setScrollPosition' ]),
    scrollElement (link) {
      let el = document.getElementById(link.ref)
      let target = getScrollTarget(el)
      let correctionValue = window.innerWidth <= 640 ? 65 : 90
      let offset = el.offsetTop - correctionValue
      let duration = 500
      setScrollPosition(target, offset, duration)
      this.setScrollPosition(window.pageYOffset)
      this.$router.push(`/#${link.ref}`)
      this.setViewState(false)
    }
  }
}
