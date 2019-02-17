<template lang="pug">
  q-page.flex.column
    introduction
    //- header-home
</template>

<script>
import HeaderHome from '../components/general/Header'
import Introduction from '../components/topics/Introduction'

export default {
  name: 'PageIndex',
  components: {
    HeaderHome,
    Introduction
  }
}
</script>

<style lang="stylus">
.shadow-global
  box-shadow 0 10px 20px rgba(71,80,89,.15)
</style>
