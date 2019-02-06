<template>
    <div>
        <h2>Module de démonstration HelloWorld</h2>
        <p><strong>Message passé en paramètre : <code>{{ msg }}</code></strong></p>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h2 {
        text-transform: uppercase;
        color: $link-color;
    }
</style>
