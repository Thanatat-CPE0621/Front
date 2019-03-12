<template>
  <nav>
    <!-- <div class="nav-text-left">
      <img src="~/assets/images/queq_element-03.png" class="logo">
      <div class="inline">
        <div>asdasd</div>
      </div>
    </div>-->
    <div class="inline">
      <nuxt-link to="/admin" v-if="getHospital">
        <img src="~/assets/images/queq_element-03.png" class="logo">
      </nuxt-link>
      <img src="~/assets/images/queq_element-03.png" class="logo" v-else>
      <div class="inline" v-if="getHospital">
        <div class="nav-text-left">
          <div class="vl"></div>
        </div>
        <div class="nav-text-left">
          <img class="logo-hospital" :src="getLogoHospital" @error="imgError">
        </div>
        <div class="nav-text-left">
          <div class="hopital-name">{{getHospital}}</div>
        </div>
      </div>
    </div>

    <div class="nav-text">
      <a-tooltip placement="bottom">
        <template slot="title">
          <div slot="content">UI Ver.1.0.17
            <br>API Ver.1.0.17
          </div>
        </template>
        <div class="bold">UI Ver.1.0.17</div>
      </a-tooltip>
      <div class="inline">
        <img src="~/assets/images/user.png" class="user-img">
        <div>
          <el-dropdown trigger="click" @command="logout">
            <a class="el-dropdown-link">{{getname}}</a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div>TH/EN</div>
    </div>
  </nav>
</template>

<script>
import apiService from "@/service/index";
import noLogo from "@/assets/images/hospitalLogo.png";

export default {
  mounted() {
    console.log(this.$route);
    const _this = this;
    if ($nuxt.$route.name === "dashboard-hospital-main") {
      this.$nuxt.$loading.start();
      apiService
        .get(`hospital/${$nuxt.$route.params.hospital}/info`)
        .then(res => {
          console.log("res:", res);
          const { data } = res.data;
          this.$store.commit("hospital/getHospitalInfo", {
            info: data
          });
          this.$nuxt.$loading.finish();
        })
        .catch(err => {
          this.$nuxt.$loading.finish();
          console.log(err);
        });
    }
  },
  computed: {
    getname() {
      if (this.$store.state.user.userData.hasOwnProperty("user")) {
        return this.$store.state.user.userData.user.name;
      } else {
        return null;
      }
    },
    getHospital() {
      if (this.$store.state.hospital.info) {
        return this.$store.state.hospital.info.hospitalName;
      } else {
        return null;
      }
    },
    getLogoHospital() {
      return this.$store.state.hospital.info.logo;
    },
    getRole() {
      console.log(this.$store.state.user.userData.role.isSuperAdmin);
      return this.$store.state.user.userData.role.isSuperAdmin;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user_data");
      localStorage.removeItem("vuex");
      this.$store.commit("user/setUserData", {
        user: [],
        isLogin: false,
        token: null
      });
      this.$store.commit("hospital/clearState", []);
      this.$router.push("/login");
    },
    imgError(event) {
      event.target.src = noLogo;
    }
  }
};
</script>

<style scoped>
.logo-hospital {
  margin-top: -7px;
  width: 50px;
  height: 100%;
  margin-right: 10px;
}
.logo {
  margin: auto 20px;
  height: 32px;
}

.logo-new {
  height: 2vh;
  padding-right: 5px;
}
.hopital-name {
  font-size: 20px;
  font-weight: bold;
}
.vl {
  border-left: 2px solid rgb(191, 191, 191);
  height: 30px;
  padding-right: 15px;
}
.nav-text {
  margin: auto 20px;
  display: flex;
  justify-content: flex-end;
}
.nav-text-left {
  margin: auto 0px;
  display: flex;
  justify-content: flex-end;
}
.nav-text-left {
  margin: auto 0;
  display: flex;
  justify-content: flex-end;
}
.bold {
  font-weight: bold;
  margin-right: 10px;
}

.inline {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}

.user-img {
  height: 2vh;
  padding-right: 5px;
}

.sub-log {
  display: flex;
}
</style>