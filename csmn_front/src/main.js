import './styles/global.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import fr from './trad/fr.json'
import App from './App.vue'

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: {
        fr: fr
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
