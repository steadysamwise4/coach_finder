import { createApp } from 'vue';

import router from './router';
import store from './store/index';
import App from './App.vue';
import BaseCard from './components/layout/ui/BaseCard.vue';
import BaseButton from './components/layout/ui/BaseButton.vue';
import BaseBadge from './components/layout/ui/BaseBadge.vue';
import BaseSpinner from './components/layout/ui/BaseSpinner.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
