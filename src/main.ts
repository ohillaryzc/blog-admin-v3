import { createApp } from 'vue'
import App from './App.vue'
import { Button, Spin } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/es/message/style/css'
import { router } from './router/router';

const app = createApp(App);

app.use(Button);
app.use(Spin);

app.use(router);

app.mount('#app')
