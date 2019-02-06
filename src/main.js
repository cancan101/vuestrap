/**
 * Fichier de base de l'application
 *     - Crée une nouvelle application Vue
 *     - Importe les routes déclarée dans le fichier routeur.js
 *     - Charge la vue principale App.vue
 *
 */

// Librairies
import Vue from 'vue' // Vue.js

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
