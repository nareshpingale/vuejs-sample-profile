<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script >
export default {
  name: 'App'
}
</script>

<style lang="scss">

// CSS presets
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
  list-style: none;
  margin: 0px;
  padding-left: 20px;
  li{
    text-align: left;
    padding: 5px 0px;
  }
}

// css utils
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
.block{
  display: block;
}
.absolute{
  position: absolute;
}
.text-left{
  text-align: left;
}
.top{
  top: 0px;
}
.right{
  right: 0px;
}
.left{
  left: 0px;
}
.inline-block{
  display: inline-block;
}
.float-right{
  float: right;
}
.float-left{
  float: left;
}
.w50{
  width: 50%;
}
.f14{
  font-size: 14px;
}
.bold{
  font-weight: bold;
}
.medium{
  font-weight: 500;
}
.italic{
  font-style: italic;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
  .md-collapse{
    width: 100%;
  }
  #app{
    padding-top: 25px;
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
}

/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */
}
</style>
