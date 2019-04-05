<template>
  <div class="container">
    <el-row>
      <el-col :span="8" v-for="n in 50" :key="n">
        <div class="card">
          <img src="@/assets/images/dashboard/department/status-b-2.png" style="height:200px" alt>
          <div class="detail">
            <div class="text-highlight-q">ห้องตรวจ 1 (กายภาพบำบัด)</div>
            <br>
            <div>คิวล่าสุด: -</div>
            <div>เวลาที่มาถึง: -</div>
            <div>เวลาที่ถูกเรียก: -</div>
            <div class="flex flex-between gap">
              <div class="flex">
                <img src="@/assets/images/dashboard/time.png" style="width:15px;margin-right: 5px;">
                เวลาเฉลี่ยต่อคิว:
                <b>0 นาที</b>
              </div>
              <div class="text-highlight">0 คิว</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.detail {
  width: 95%;
  padding: 20px;
  padding-bottom: 0px;
}
b {
  padding-left: 3px;
  font-size: 16px;
}
.bg-img {
  align-self: center;
  object-fit: cover;
  /* background-image: url("../../../assets/images/dashboard/dpm-1.png"); */
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.card {
  padding: 0px;
  display: flex;
}
.gap {
  padding: 13px 0;
}
.gap-q {
  margin: -6px 0px;
}
.queue {
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
}
.box-content {
  padding-right: 12px;
}
.box-gender {
  margin-bottom: 10px;
  border-style: solid;
  border-color: rgb(218, 218, 219);
  border-image: initial;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px 10px;
}
.title-card {
  font-weight: bold;
  color: rgb(128, 130, 133);
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
}
.q {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  color: rgb(69, 179, 131);
}
.text-highlight {
  font-size: 1.8em;
  font-weight: bold;
  color: rgb(69, 179, 131);
}
.text-highlight-q {
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(128, 130, 133);
}
</style>