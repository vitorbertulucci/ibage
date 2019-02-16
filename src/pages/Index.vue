<template lang="pug">
  q-page.flex.column
    header-home
</template>

<script>
import HeaderHome from '../components/general/Header'
export default {
  name: 'PageIndex',
  components: {
    HeaderHome
  }
}
</script>

<style lang="stylus">
.shadow-global
  box-shadow 0 10px 20px rgba(71,80,89,.15)
</style>
