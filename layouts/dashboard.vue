<template>
  <el-container style="height: 100vh; border: 1px solid #eee" class="bg">
    <el-header style="padding:0px;">
      <navbar/>
    </el-header>
    <el-container style="background-color: #f1f2f2;">
      <el-aside width="112" class="left-bar">
        <div class="item-center-bar">
          <nuxt-link :to="{ path:'/dashboard/'+hID+'/main'}">
            <img
              class="logo-nav"
              :src="isHoverDefault[0]"
              :class="[isActive[0] ? 'hover' : null,this.$route.name=='dashboard-hospital-main' ? 'hover' :null]"
              @mouseleave="mouseleave(0)"
              @mouseover="mouseOver(0)"
            >
            <span class="text-center">หน้าหลัก</span>
          </nuxt-link>
          <nuxt-link :to="{ path:'/dashboard/'+hID+'/qall'}">
            <img
              class="logo-nav"
              :src="isHoverDefault[1]"
              :class="[isActive[1] ? 'hover' : null,this.$route.name=='dashboard-hospital-qall' ? 'hover' :null]"
              @mouseleave="mouseleave(1)"
              @mouseover="mouseOver(1)"
            >
            <span class="text-center">{{`กราฟคิวรวม`}}</span>
            <span class="text-center">{{`ทั้งโรงพยาบาล`}}</span>
          </nuxt-link>
          <nuxt-link :to="{ path:'/dashboard/'+hID+'/maxtime'}">
            <img
              class="logo-nav"
              :src="isHoverDefault[2]"
              :class="[isActive[2] ? 'hover' : null,this.$route.name=='dashboard-hospital-maxtime' ? 'hover' :null]"
              @mouseleave="mouseleave(2)"
              @mouseover="mouseOver(2)"
            >
            <span class="text-center">{{`กราฟช่วงเวลา`}}</span>
            <span class="text-center">{{`ที่ใช้บริการสูงสุด`}}</span>
          </nuxt-link>
          <nuxt-link :to="{ path:'/dashboard/'+hID+'/export'}">
            <img
              class="logo-nav"
              :src="isHoverDefault[3]"
              :class="[isActive[3] ? 'hover' : null,this.$route.name=='dashboard-hospital-export' ? 'hover' :null]"
              @mouseleave="mouseleave(3)"
              @mouseover="mouseOver(3)"
            >
            <span class="text-center">Export</span>
          </nuxt-link>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import gicon0 from "~/assets/images/slider/dashboard/gicon-0.png";
import gicon1 from "~/assets/images/slider/dashboard/gicon-1.png";
import gicon2 from "~/assets/images/slider/dashboard/gicon-2.png";
import gicon3 from "~/assets/images/slider/dashboard/gicon-3.png";
import navbar from "~/components/navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {
      isHoverDefault: [gicon0, gicon1, gicon2, gicon3],
      isActive: [false, false, false, false],
      hover: "hover",
      hID: null
    };
  },
  created() {
    const _this = this;
    _this.hID = this.$nuxt._route.params.hospital;
  },
  methods: {
    mouseOver(index) {
      const _this = this;
      _this.isActive[index] = true;
      this.$set(_this.isActive, index, true);
    },
    mouseleave(index) {
      const _this = this;
      _this.isActive[index] = false;
      this.$set(_this.isActive, index, false);
    }
  }
};
</script>


<style scoped >
html {
  background-color: #f1f2f2 !important;
}
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 60;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

/* test */
.hover {
  filter: invert(55%) sepia(41%) saturate(570%) hue-rotate(103deg)
    brightness(111%) contrast(88%);
}
.logo {
  cursor: pointer;
  margin: auto 20px;
  height: 3vh;
}
.logo-nav {
  cursor: pointer;
  width: 70px;
  height: 70px;
}
.user-img {
  height: 2vh;
  padding-right: 5px;
}
.inline {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.bold {
  font-weight: bold;
  margin-right: 10px;
}
.bg {
  background-color: #f1f2f2;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.nav-text {
  margin: auto 20px;
  display: flex;
  justify-content: flex-end;
}
nav {
  width: 100%;
  height: 6vh;
  display: flex;
  background: white;
  position: relative;
  justify-content: space-between;
}
.left-bar {
  margin-top: 6px;
  width: 100px;
  height: 92vh;
  background: #fff;
  display: flex;
  justify-content: center;
}
.content {
  margin: 10px;
  width: 80%;
  height: 100%;
}
.item-center-bar {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 85vh;
}
.text-center {
  display: flex;
  justify-content: center;
  font-size: 13px;
}
</style>
