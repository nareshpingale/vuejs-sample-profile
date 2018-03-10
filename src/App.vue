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

</style>
