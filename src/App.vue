<template>
  <div id="app">
    <span class="change">Change Theme: </span> <input type="checkbox" class='theme-switch' v-model="darkMode"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      darkMode: false
    }
  },
  mounted () {
    // set page title
    document.title = 'Multiple Themes in Vue.js'

    // set 'app-background' class to body tag
    const bodyElement = document.body
    bodyElement.classList.add('app-background')

    // check for active theme
    const htmlElement = document.documentElement
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  },
  watch: {
    darkMode: function () {
      // add/remove class to/from html tag
      const htmlElement = document.documentElement

      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
