import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueTextareaAutoSize from 'vue-textarea-autosize'
import firbase from 'firebase/app';
import 'firebase/firestore';

Vue.use(vueTextareaAutoSize);
Vue.config.productionTip = false

firbase.initializeApp({
  apiKey: "AIzaSyA3r3FDsBoszo7wcd6t8JNi9HC58RNYfN8",
  authDomain: "vue-calender-fc271.firebaseapp.com",
  databaseURL: "https://vue-calender-fc271.firebaseio.com",
  projectId: "vue-calender-fc271",
  storageBucket: "vue-calender-fc271.appspot.com",
  messagingSenderId: "1010309142317",
  appId: "1:1010309142317:web:53bdd0468272a83b1a25a4"
});

export const db = firbase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
