import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  data () {
    return {
      links: [
        { title: 'Quem Somos', ref: 'about-us' },
        { title: 'Produtos e Serviços', ref: 'products-and-services' },
        { title: 'Notícias', ref: '#' },
        { title: 'Parceiros', ref: '#' },
        { title: 'Contato', ref: 'contact' }
      ]
    }
  },
  methods: {
    scrollElement (link) {
      let el = document.getElementById(link.ref)
      let target = getScrollTarget(el)
      let correctionValue = window.innerWidth <= 640 ? 65 : 90
      let offset = el.offsetTop - correctionValue
      let duration = 500
      setScrollPosition(target, offset, duration)
      this.setViewState(false)
    }
  }
}
