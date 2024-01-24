import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { PiniaSharedState } from 'pinia-shared-state'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'


import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})

// Configure Pinia to allow sharing state between different tabs of same browser
pinia.use(
    PiniaSharedState({
        // Enables the plugin for all stores. Defaults to true.
        enable: true,
        // If set to true this tab tries to immediately recover the shared state from another tab. Defaults to true.
        initialize: true,
        // Enforce a type. One of native, idb, localstorage or node. Defaults to native.
        type: 'localstorage',
    }),
)

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');
