import { createApp } from 'vue'
import App from './App.vue'
import YmapPlugin  from 'vue-yandex-maps'

const options = {
    apiKey: '7431b832-c5b3-4d43-b400-961415c3f3fc', 
    version: '2.1', 
    lang: 'ru_RU',
    config: {
        autoFitToViewport: 'always',
        controls: ['zoomControl', 'fullscreenControl'],
    },
    onApiAvaliable: (ymaps) => {
        ymaps.geolocation.get({
            provider: 'auto',
            mapStateAutoApply: true
        }).then(result => {
            result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        });
    }
}

createApp(App).use(YmapPlugin, options).mount('#app')