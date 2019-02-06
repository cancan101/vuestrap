<template>
<div>
    <h1>Home page de fou</h1>

    <HelloWorld msg="J'aime Vue.js !"/>
</div>
</template>


<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
