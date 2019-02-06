<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
        <router-link to="/form">Formulaire</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
    margin: 20px;
}
</style>
