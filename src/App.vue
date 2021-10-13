<template>
  <div id="app" class="h-screen bg-gray-800 p-4">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  metaInfo: {
    title: 'CRUD Poeple',
    titleTemplate: '%s | Mplan Sistemas',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  methods: {
    ...mapMutations(['PERSISIST_PEOPLE'])
  },
  created () {
    const people = JSON.parse(localStorage.getItem('people'))

    if (people) {
      this.PERSISIST_PEOPLE(people)
    }
  },
  components: {
  }
}
</script>
