import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GridLayout from 'vue-grid-layout-next/dist/vue-grid-layout-next.mjs';
import 'vue-grid-layout-next/dist/style.css';

const app = createApp(App);
app.use(GridLayout);
app.mount('#app')
