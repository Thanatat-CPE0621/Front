<template>
  <div class="container">
    <el-container style="height: 100%;">
      <el-header style="padding:0px;">
        <navbar/>
      </el-header>
      <el-container>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from "~/components/navbar";
export default {
  components: {
    navbar
  }
};
</script>


<style scoped >
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
.container {
  height: 100vh;
  background-color: #fff;
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
  justify-content: space-evenly;
  flex-direction: column;
}
.text-center {
  display: flex;
  justify-content: center;
  font-size: 14px;
}
</style>
