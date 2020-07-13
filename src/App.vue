<template>
  <div id="app" :style="BaseStyle">
    <Header @changeHue="changeBaseHue"/>
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  data: function () {
    return {
      BaseHue: 255
    }
  },
  methods: {
    changeBaseHue: function (hue) {
      this.BaseHue = hue
    }
  },
  computed: {
    BaseStyle: function () {
      return {
        '--base-color': `hsl(${this.BaseHue}, 50%, 70%)`,
        '--base-hue': this.BaseHue,
        '--base-hue-deg': this.BaseHue + 'deg'
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less">
// @base-color:#43ac39;

@font-face {
  font-family: 'iconfont';
  src: url('~@/fonts/iconfont.eot');
  src: url('~@/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('~@/fonts/iconfont.woff2') format('woff2'),
      url('~@/fonts/iconfont.woff') format('woff'),
      url('~@/fonts/iconfont.ttf') format('truetype'),
      url('~@/fonts/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a, a:active, a:hover, a:link, a:visited{
  outline-style: none;
  text-decoration: none;
  color:#fff;
  transition: color 80ms linear;
}

*, ::after, ::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}
li{
  list-style: none;
}

body {
  overflow-y:scroll;
  display: flex;
  flex-direction: column;
  background-color: hsl(200, 10%, 10%);
  font-family: Torus, Inter, "Helvetica Neue", Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "Apple SD Gothic Neo", system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
}

#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 511;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
