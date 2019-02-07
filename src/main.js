/**
 * Fichier de base de l'application
 *     - Crée une nouvelle application Vue
 *     - Importe les routes déclarée dans le fichier routeur.js
 *     - Charge la vue principale App.vue
 *
 */

// Librairies
import Vue from 'vue' // Vue.js

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'chart.js/dist/Chart.min'
import 'highlightjs/highlight.pack.min'
import 'jquery-mask-plugin/dist/jquery.mask.min'
//import 'list.js/dist/list.min'
//import 'quill/dist/quill.min.js'
//import 'dropzone/dist/min/dropzone.min.js'
//import 'select2/dist/js/select2.min.js'
//import 'chart.js/Chart.extension.min.js'

// Importation des routes
import router from './router.js'

// Vues
import App from './views/App.vue'

// Configuration de l'application Vue
Vue.config.productionTip = false; // Désactive la note dans la console

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
