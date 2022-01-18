<template>
  <div>
    登录页
    <div>
      <p>账号:<input v-model="userName" /></p>
      <p>密码:<input v-model="passWord" /></p>
      <p><button @click="handleLoginEvent">登录</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
    handleLoginEvent() {
      if (this.userName == "lcy" && this.passWord == "123456") {
        this.$router.push({ path: "/home" });
        sessionStorage.setItem("loginState",'true')
      } else {
        alert("账号密码错误");
      }
    },
  },
};
</script>

<style >
</style>