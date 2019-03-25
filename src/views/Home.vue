<template>
    <div class="main-content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8">
                    <!-- Header -->
                    <div class="header mt-md-5">
                        <div class="header-body">
                            <div class="row align-items-center">
                                <div class="col">
                                    <!-- Title -->
                                    <h1 class="header-title">
                                        Titre de la page d'accueil
                                    </h1>
                                </div>
                            </div> <!-- / .row -->
                        </div>
                    </div>

                    <HelloWorld msg="J'aime Vue.js !"/>

                </div>
            </div>
        </div>
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
