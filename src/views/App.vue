<template>
    <div id="app">
        <menu-principal></menu-principal>

        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~flatpickr/dist/themes/dark.css";
</style>
<script>
    import MenuPrincipal from "../components/MenuPrincipal";
    export default {
        components: {MenuPrincipal}
    }
</script>
