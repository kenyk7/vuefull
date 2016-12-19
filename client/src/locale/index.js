import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import store from '../store'
Vue.use(VueI18n)

import es from './es_ES'
Vue.config.lang = 'es_ES'
Vue.locale('es_ES', es)
// store.dispatch('setupLocale')
