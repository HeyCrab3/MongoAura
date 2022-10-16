<template>
  <div id="imgbox"><img style="width: 300px;"
                        src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg"
                        alt="login-page"/></div>
  <div class="ol-login-box">
    <a-typography-text type="secondary">登录</a-typography-text>
    <a-typography-title :level="2">登录以继续到 控制台</a-typography-title>
    <a-input v-model:value="userName" size="large" placeholder="用户名/邮箱/手机号">
      <template #prefix>
        <user-outlined type="user"/>
      </template>
    </a-input>
    <a-input v-model:value="passWord" size="large" placeholder="密码">
      <template #prefix>
        <lock-outlined type="lock"/>
      </template>
    </a-input>
    <div id="button-group">
      <a-button size="large" :loading="isContacting" type="primary">登录</a-button>
      <a-button size="large">注册</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import {UserOutlined, InfoCircleOutlined, LockOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import axios from 'axios';
import {message} from 'ant-design-vue'


function getBackendResponse() {
  axios.get("/api/test")
      .then(function (response) {
        console.log(response)
        return false
      })
      .catch(function () {
        message.error("无法连接到后端服务，请联系管理员。")
        return false
      })
}

// Export Default
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const userName = ref<string>('');
    var isContacting = ref<boolean>(true);
    isContacting = getBackendResponse();
    const passWord = ref<string>('');
    const loginBtnClicked = () => {
        
    }
    return {
      userName,
      passWord,
      isContacting
    };
  },
});
</script>
<style>
#imgbox {
  float: left;
  width: 350px;
  margin-left: 100px;
  margin-top: 10%
}

.ol-login-box {
  float: right;
  width: 40%;
  height: 400px;
  margin-top: 10%
}

.ol-login-box .ant-input-affix-wrapper {
  width: 60%;
  margin-top: 30px;
}

#button-group {
  text-align: right;
  margin-top: 10px;
  margin-right: 80%;
}

#button-group .ant-btn {
  display: block;
  margin-top: 30px;
}
</style>
