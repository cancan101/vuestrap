<template>
    <div id="app">
        <menu-principal/>

        <div class="main-content">
            <top-bar/>
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">

</style>
<script>
    import MenuPrincipal from "../components/MenuPrincipal";
    import TopBar from "../components/TopBar";

    export default {
        components: {TopBar, MenuPrincipal}
    }
</script>
