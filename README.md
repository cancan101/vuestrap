# Projet Vuestrap

## Environnement de développement

* Node.js 10
* Vue CLI 3

### Installation Vue Cli
```
yarn global add @vue/cli

vue --version 
```

Créer un nouveau projet : https://cli.vuejs.org/guide/creating-a-project.html

```
vue create hello-world
```


## Commandes d'installation et développement
### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Liens utiles

* https://cli.vuejs.org/
* https://cli.vuejs.org/guide/installation.html
* https://forum.vuejs.org/t/loading-local-fonts-with-vue-cli-3/38967
* https://www.chriscourses.com/blog/loading-fonts-webpack
* https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
* https://vuex.vuejs.org/guide/plugins.html
* https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling
* https://select2.org/getting-started/basic-usage
* https://listjs.com/
* https://quilljs.com/playground/
* https://pineco.de/wrapping-quill-editor-in-a-vue-component/
* https://github.com/monterail/vuelidate
* https://baianat.github.io/vee-validate/examples/async-backend-validation.html


## Astuces

### Ajouter SCSS

Ajouter les fichiers SCSS dans le fichier de configuration `vue.config.js`.

```json
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/theme.scss";`
            }
        }
    }
};
```

### SCSS Lien vers ressources  ~@/ => src/ 

```scss
@font-face {
  font-family: 'Feather';
  src:
          url('~@/assets/fonts/feather/fonts/Feather.ttf?sdxovp') format('truetype'),
          url('~@/assets/fonts/feather/fonts/Feather.woff?sdxovp') format('woff'),
          url('~@/assets/fonts/feather/fonts/Feather.svg?sdxovp#Feather') format('svg');
  font-weight: normal;
  font-style: normal;
}
```
