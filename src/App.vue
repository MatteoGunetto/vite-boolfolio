<script>
import axios from 'axios';
import MainBlock from './components/MainBlock.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    MainBlock,
    AppHeader,
    AppFooter
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>