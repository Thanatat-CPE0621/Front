<template>
  <div>
    <div class="flex flex-end">
      <div>
        <nuxt-link to="/admin/hospital">
          <a-button icon="setting" type="primary">จัดการ</a-button>
        </nuxt-link>
      </div>
    </div>
    <div class="flex flex-center">
      <input type="text" class="search input" placeholder="ค้นหา">
    </div>
    <div class="container">
      <el-row type="flex" justify="center">
        <el-col>
          <el-col
            :span="6"
            :lg="6"
            :md="8"
            :sm="12"
            :xs="24"
            v-for="(item, index) in hospitals"
            :key="index"
          >
            <nuxt-link :to="{ path:'/dashboard/'+item.id +'/main'}">
              <div style="height:150px;width:250px;" class="card center-col">
                <div slot="content">
                  <div class="container">
                    <div class="content-center">
                      <img class="logo" :src="item.logo" @error="imgError">
                      <div class="container-text">
                        <label>{{item.name}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <!-- <a-pagination :defaultCurrent="1" :total="this.$store.state.hospital.hospitals.length"/> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import apiService from "@/service/index";
import noLogo from "@/assets/images/hospitalLogo.png";
export default {
  layout: "hospital",
  head() {
    return {
      title: "Hospital : QueQ Hospital Warroom"
    };
  },
  computed: {
    hospitals() {
      return this.$store.state.hospital.hospitals;
    }
  },

  mounted() {
    this.$store.commit("hospital/getHospitalInfo", {
      info: []
    });

    apiService
      .get("hospital/")
      .then(res => {
        const { data } = res.data;
        console.log("data:", data);
        console.log("token:", res);
        if (!data) {
          // this.$store.commit("user/setUserData", {
          //   user: [],
          //   isLogin: false,
          //   token: null
          // });
          // this.$router.push("/login");
        }
        this.$store.commit("hospital/getHospitals", {
          hospitals: { ...data.hospitals }
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    imgError(event) {
      event.target.src = noLogo;
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px !important;
}
.card {
  box-shadow: rgb(204, 204, 204, 0.7) 3px 4px 20px;
  border-radius: 8px;
  color: rgb(128, 130, 133);
  padding: 20px;
  margin: 2.5% 2%;
  background-color: white;
}
.search {
  width: 40%;
  height: 30px;
  padding: 20px;
}
.logo {
  margin-top: 3px;
  width: 65px;
  height: 65px;
  border-radius: 40px;
}
.content-center {
  margin: auto;
  text-align: center;
}
.center-col {
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 100%;
  height: 100%;
}
.container-text {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  display: block;
}
.label {
  text-align: center;
  font-size: 16px;
  color: black;
  cursor: pointer;
  display: block;
}
.title {
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
}
</style>