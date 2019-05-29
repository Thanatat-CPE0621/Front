<template>
  <div>
    <div class="header">TH/EN</div>
    <div class="flex">
      <img src="~/assets/images/queq_element-02.png" class="img">
    </div>
    <div class="flex gap-top">
      <input
        name="login_name"
        type="text"
        placeholder="Username"
        autocomplete="off"
        class="input"
        v-model="login_name"
      >
    </div>
    <div class="flex">
      <input
        name="password"
        type="password"
        placeholder="Password"
        autocomplete="off"
        class="input"
        v-model="password"
      >
    </div>
    <div class="flex flex-column" @click="login()">
      <button type="submit">ลงชื่อเข้าใช้</button>
      <a href>Forget your password?</a>
    </div>
    <div class="flex"></div>
    <div class="container">
      <div class="container-footer green-bar">
        <img src="~/assets/images/queq_element-01.png" class="img-footer">
      </div>
    </div>
  </div>
</template>

<script>
import staffService from "@/service/staff";
import { Modal } from "ant-design-vue";
export default {
  data() {
    return {
      login_name: "",
      password: ""
    };
  },
  created() {},
  head() {
    return {
      title: "QueQ Hopsital Warroom : Login"
    };
  },
  methods: {
    async login() {
      window.$nuxt.$root.$loading.start();

      try {
        const _this = this;
        let data = new FormData();
        data.append("login_name", _this.login_name);
        data.append("password", _this.password);
        const res = await staffService.staffLogin(data);

        if (res.data) {
          window.$nuxt.$root.$loading.finish();
          localStorage.setItem("user_data", JSON.stringify(res.data));
          this.$store.commit("user/setUserData", {
            user: res.data,
            isLogin: true,
            token: res.data.user.user_token
          });
          if (res.data.role.is_super_admin) {
            this.$router.push("/admin");
          } else {
            this.$router.push(
              `/dashboard/${res.data.hospital.hospital_id}/main`
            );
          }
        } else {
          window.$nuxt.$root.$loading.finish();
          this.$error({
            title: "Error",
            content: res.error.message
          });
        }
      } catch (error) {
        console.log(error);
        window.$nuxt.$root.$loading.finish();
      }
    }
  }
};
</script>

<style scoped >
input {
  width: 300px;
  height: 51px;
}
button {
  width: 130px;
}
.header {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.green-bar {
  border-bottom: 9px #45b383 solid;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
}
.container-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-footer {
  position: absolute;
  bottom: -5px;
  width: 50%;
  max-width: 500px;
  min-width: 200px;
}
.img {
  height: 180px;
}
.flex {
  display: flex;
  justify-content: center;
}
.gap-top {
  margin-top: 3%;
}
</style>