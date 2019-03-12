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
        v-model="login_name"
      >
    </div>
    <div class="flex">
      <input
        name="password"
        type="password"
        placeholder="Password"
        autocomplete="off"
        v-model="password"
      >
    </div>
    <div class="flex" @click="login()">
      <button>ลงชื่อเข้าใช้</button>
    </div>
    <div class="flex">
      <a href>Forget your password?</a>
    </div>
    <div class="container">
      <div class="container-footer green-bar">
        <img src="~/assets/images/queq_element-01.png" class="img-footer">
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "@/service/index";
import { Modal } from "ant-design-vue";
export default {
  data() {
    return {
      login_name: "namename",
      password: "namename"
    };
  },
  created() {
    if (this.$store.state.user.hasOwnProperty("userData")) {
      if (this.$store.state.user.userData.hasOwnProperty("role")) {
        if (this.$store.state.user.userData.role.id === 53) {
          this.$router.push("/admin");
        } else {
          this.$router.push(
            `/dashboard/${this.$store.state.user.userData.hospital.id}/main`
          );
        }
      }
    }
  },
  head() {
    return {
      title: "QueQ Hopsital Warroom : Login"
    };
  },
  methods: {
    login() {
      console.log("object");
      const _this = this;
      let data = new FormData();
      data.append("login_name", _this.login_name);
      data.append("password", _this.password);
      this.$nuxt.$loading.start();
      apiService
        .post("user/login", data)
        .then(res => {
          console.log("res:", res);
          const { data } = res.data;
          if (!data) {
            this.$nuxt.$loading.finish();
            return;
          }
          localStorage.setItem("user_data", JSON.stringify(data));
          this.$store.commit("user/setUserData", {
            user: data,
            isLogin: true,
            token: data.user.token
          });
          if (this.$store.state.user.userData.role.id === 53) {
            this.$router.push("/admin");
          } else {
            this.$router.push(
              `/dashboard/${this.$store.state.user.userData.hospital.id}/main`
            );
          }
          this.$nuxt.$loading.finish();
        })
        .catch(err => {
          this.$nuxt.$loading.finish();
          console.log(err);
        });
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