<template>
  <div class="container">
    <el-container style="height: 100%;">
      <el-header style="padding:0px;">
        <navbar/>
      </el-header>
      <el-container>
        <el-aside width="112px" class="left-bar">
          <div class="item-center-bar">
            <img
              class="logo-nav"
              :src="isHoverDefault[0]"
              :class="isActive[0] ? 'hover' : null"
              @mouseleave="mouseleave(0)"
              @mouseover="mouseOver(0)"
            >
            <img
              class="logo-nav"
              :src="isHoverDefault[1]"
              :class="{ 'hover'  :isActive[1]}"
              @mouseleave="mouseleave(1)"
              @mouseover="mouseOver(1)"
            >
            <img
              class="logo-nav"
              :src="isHoverDefault[2]"
              :class="isActive[2] ? 'hover' : null"
              @mouseleave="mouseleave(2)"
              @mouseover="mouseOver(2)"
            >
            <img
              class="logo-nav"
              :src="isHoverDefault[3]"
              :class="isActive[3] ? 'hover' : null"
              @mouseleave="mouseleave(3)"
              @mouseover="mouseOver(3)"
            >
            <img
              style="margin-left:2px;"
              class="logo-nav"
              :src="isHoverDefault[4]"
              :class="isActive[4] ? 'hover' : null"
              @mouseleave="mouseleave(4)"
              @mouseover="mouseOver(4)"
            >
          </div>
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
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
.hover {
  filter: invert(55%) sepia(41%) saturate(570%) hue-rotate(103deg)
    brightness(111%) contrast(88%);
}

.logo-nav {
  padding-top: 25px;
  cursor: pointer;
  width: 110px;
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
