import Vue from 'vue' // Libraire Vue.js
import App from './App.vue' // Composant racine App.vue
import router from './router' // fichier de routage

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
