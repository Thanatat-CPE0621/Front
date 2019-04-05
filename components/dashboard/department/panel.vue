<template>
  <div class="container">
    <div class="text-center item">
      <!-- <img src="@/assets/images/dashboard/dpm-1.png" width=60" a60> -->
      <div class="img"></div>
      <div class="label text-center">
        <div class="flex-center">
          <b class="highlight">แผนกผู้ป่วยนอก</b>
        </div>
        <div class="flex-center fontcolor">
          จำนวนห้องตรวจ :
          <b>20</b>
        </div>
      </div>
    </div>
    <div class="text-center item" v-for="item in 40" :key="item">
      <!-- <img src="@/assets/images/dashboard/dpm-1.png" width="45" alt> -->
      <div class="img dis-select"></div>
      <div class="label text-center">
        <div class="flex-center fontcolor">แผนกผู้ป่วยนอก</div>
        <!-- <div class="flex-center">จำนวนห้องตรวจ : 20</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import dpm1 from "@/assets/images/dashboard/dpm-1.png";
export default {};
</script>

<style scoped lang="scss">
.fontcolor {
  color: rgb(167, 169, 172);
}
b {
  &.highlight {
    color: rgb(69, 179, 131);
  }
}
.container {
  width: 100%;
  height: 60%;
  display: flex;
  overflow: auto;
}
.item {
  min-width: 120px !important;
  margin: 0px 10px;
}
.circle-btn {
  width: 150px;
  height: 130px;
  text-align: center;
  margin: 0px auto;
}
.circle-btn-content {
  color: rgb(167, 169, 172);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1em;
  font-weight: bold !important;
  overflow: hidden;
  &:hover {
    color: white !important;
  }
}
.label {
  margin-top: 10px;
}
.container-img {
  color: rgb(167, 169, 172);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1em;
  font-weight: bold !important;
  overflow: hidden;
}
.img {
  width: 75px;
  height: 75px;
  background-size: 65px 65px;
  display: flex;
  background-image: url(../../../assets/images/dashboard/department/dpm-1w.png);
  background-color: rgb(69, 179, 131) !important;
  background-repeat: no-repeat;
  background-position: center center;
  margin: auto;
  border-radius: 50%;
  &.dis-select {
    background-color: #f1f2f2 !important;
    background-image: url(../../../assets/images/dashboard/department/dpm-1.png);
    &:hover {
      background-color: rgb(167, 169, 172) !important;
      background-image: url(../../../assets/images/dashboard/department/dpm-1w.png);
    }
  }
}
</style>