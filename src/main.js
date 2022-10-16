import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './customizeTheme.less'; // 用于覆盖上面定义的变量
import router from './components/outer/router.js'
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
import { ConfigProvider } from 'ant-design-vue';

ConfigProvider.config({
    theme: {
        primaryColor: '#7a81ff',
    },
});

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')