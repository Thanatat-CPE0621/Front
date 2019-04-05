<template>
  <no-ssr>
    <el-container style="height: 100vh; border: 1px solid #eee" class="bg">
      <el-header style="padding:0px;">
        <navbar/>
      </el-header>
      <el-container style="background-color: #f1f2f2;">
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </no-ssr>
</template>

<script>
import navbar from "~/components/navbar";
export default {
  components: {
    navbar
  },
  head() {
    return {
      title: "Department : QueQ Hospital Warroom"
    };
  }
};
</script>

<style scoped>
.el-main {
  padding: 0 !important;
}
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