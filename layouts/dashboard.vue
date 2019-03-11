<template>
  <div class="container">
    <el-container style="height: 100%;">
      <el-header style="padding:0px;">
        <nav>
          <img src="~/assets/images/queq_element-03.png" class="logo">
          <div class="nav-text">
            <a-tooltip placement="bottom">
              <template slot="title">
                <span>prompt text</span>
              </template>
              <div class="bold">UI Ver.1.0.17</div>
            </a-tooltip>
            <div class="inline">
              <img src="~/assets/images/user.png" class="user-img">
              <div>namename</div>
            </div>
            <div>TH/EN</div>
          </div>
        </nav>
      </el-header>
      <el-container>
        <el-aside width="112px" class="left-bar">
          <div class="item-center-bar">
            <div>
              <img
                class="logo-nav"
                :src="isHoverDefault[0]"
                :class="isActive[0] ? 'hover' : null"
                @mouseleave="mouseleave(0)"
                @mouseover="mouseOver(0)"
              >
              <span class="text-center">หน้าหลัก</span>
            </div>
            <div>
              <img
                class="logo-nav"
                :src="isHoverDefault[1]"
                :class="{ 'hover'  :isActive[1]}"

                @mouseleave="mouseleave(1)"
                @mouseover="mouseOver(1)"
              >
              <span class="text-center">{{`กราฟคิวรวม`}}</span>
              <span class="text-center">{{`ทั้งโรงพยาบาล`}}</span>
            </div>
            <div>
              <img
                class="logo-nav"
                :src="isHoverDefault[2]"
                :class="isActive[2] ? 'hover' : null"
                @mouseleave="mouseleave(2)"
                @mouseover="mouseOver(2)"
              >
              <span class="text-center">{{`กราฟช่วงเวลา`}}</span>
              <span class="text-center">{{`ที่ใช้บริการสูงสุด`}}</span>
            </div>
            <div>
              <img
                class="logo-nav"
                :src="isHoverDefault[3]"
                :class="isActive[3] ? 'hover' : null"
                @mouseleave="mouseleave(3)"
                @mouseover="mouseOver(3)"
              >
              <span class="text-center">Export</span>
            </div>
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
import gicon0 from "~/assets/images/slider/dashboard/gicon-0.png";
import gicon1 from "~/assets/images/slider/dashboard/gicon-1.png";
import gicon2 from "~/assets/images/slider/dashboard/gicon-2.png";
import gicon3 from "~/assets/images/slider/dashboard/gicon-3.png";

export default {
  data() {
    return {
      isHoverDefault: [gicon0, gicon1, gicon2, gicon3],
      isActive: [false, false, false, false],
      hover: "hover"
    };
  },
  methods: {
    mouseOver(index) {
      const _this = this;
      _this.isActive[index] = true;
      this.$set(_this.isActive,index,true)
    },
    mouseleave(index) {
      const _this = this;
      _this.isActive[index] = false;
      this.$set(_this.isActive,index,false)
    }
  }
};
</script>


<style scoped >
.hover {
  filter: invert(55%) sepia(41%) saturate(570%) hue-rotate(103deg) brightness(111%) contrast(88%);
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
  height: 91vh;
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
}
.text-center {
  display: flex;
  justify-content: center;
  font-size: 13px;
}
</style>
