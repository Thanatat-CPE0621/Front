<template>
  <div class="container">
    <no-ssr>
      <el-container style="height: 100%;">
        <el-header style="padding:0px;">
          <navbar/>
        </el-header>
        <el-container>
          <el-aside width="112px" class="left-bar">
            <div class="item-center-bar">
              <nuxt-link :to="{ path:'/admin/hospital'}">
                <img
                  class="logo-nav"
                  :src="isHoverDefault[0]"
                  :class="[isActive[0] ? 'hover' : null,this.$route.name=='admin-hospital' ? 'hover' :null]"
                  @mouseleave="mouseleave(0)"
                  @mouseover="mouseOver(0)"
                >
                <span
                  class="titleLogo text-center"
                  :class="this.$route.name=='admin-hospital' && 'active' "
                >โรงพยาบาล</span>
              </nuxt-link>
              <nuxt-link :to="{ path:'/admin/station'}">
                <img
                  class="logo-nav"
                  :src="isHoverDefault[1]"
                  :class="[isActive[1] ? 'hover' : null,this.$route.name=='admin-station' ? 'hover' :null]"
                  @mouseleave="mouseleave(1)"
                  @mouseover="mouseOver(1)"
                >
                <span
                  class="titleLogo text-center"
                  :class="this.$route.name=='admin-station' && 'active' "
                >แผนก</span>
              </nuxt-link>
              <nuxt-link :to="{ path:'/admin/room'}">
                <img
                  class="logo-nav"
                  :src="isHoverDefault[2]"
                  :class="[isActive[2] ? 'hover' : null,this.$route.name=='admin-room' ? 'hover' :null]"
                  @mouseleave="mouseleave(2)"
                  @mouseover="mouseOver(2)"
                >
                <span
                  class="titleLogo text-center"
                  :class="this.$route.name=='admin-room' && 'active' "
                >ห้อง</span>
              </nuxt-link>
              <nuxt-link :to="{ path:'/admin/staff'}">
                <img
                  class="logo-nav"
                  :src="isHoverDefault[3]"
                  :class="[isActive[3] ? 'hover' : null,this.$route.name=='admin-staff' ? 'hover' :null]"
                  @mouseleave="mouseleave(3)"
                  @mouseover="mouseOver(3)"
                >
                <span
                  class="titleLogo text-center"
                  :class="this.$route.name=='admin-staff' && 'active' "
                >ผู้ใช้งาน</span>
              </nuxt-link>
              <nuxt-link :to="{ path:'/admin/mail'}">
                <img
                  style="margin-left:2px;"
                  class="logo-nav"
                  :src="isHoverDefault[4]"
                  :class="[isActive[4] ? 'hover' : null,this.$route.name=='admin-mail' ? 'hover' :null]"
                  @mouseleave="mouseleave(4)"
                  @mouseover="mouseOver(4)"
                >
                <span
                  class="titleLogo text-center"
                  :class="this.$route.name=='admin-mail' && 'active' "
                >อีเมล์</span>
              </nuxt-link>
            </div>
          </el-aside>
          <el-main>
            <nuxt/>
          </el-main>
        </el-container>
      </el-container>
    </no-ssr>
  </div>
</template>

<script>
import gicon0 from "~/assets/images/slider/admin/giconadmin-0.png";
import gicon1 from "~/assets/images/slider/admin/giconadmin-1.png";
import gicon2 from "~/assets/images/slider/admin/giconadmin-2.png";
import gicon3 from "~/assets/images/slider/admin/giconadmin-3.png";
import gicon4 from "~/assets/images/slider/admin/giconadmin-4.png";
import navbar from "~/components/navbar";
export default {
  components: {
    navbar
  },
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      isHoverDefault: [gicon0, gicon1, gicon2, gicon3, gicon4],
      isActive: [false, false, false, false, false],
      hover: "hover"
    };
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
a {
  margin: 0px !important;
}
.titleLogo {
  margin-top: -12px !important;
}
.hover {
  filter: invert(55%) sepia(41%) saturate(570%) hue-rotate(103deg)
    brightness(111%) contrast(88%);
}
.active {
  color: #45b383;
}
.logo-nav {
  padding-top: 25px;
  cursor: pointer;
  width: 130px;
}
.container {
  height: 100vh;
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
  /* height: 91vh; */
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
  flex-direction: column;
}
.text-center {
  display: flex;
  justify-content: center;
  font-size: 13px;
}
</style>
