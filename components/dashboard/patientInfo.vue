<template>
  <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
    <div class="card">
      <div class="card-half">
        <div class="gap flex-between">
          <div class="flex">
            <img src="@/assets/images/dashboard/gicon-4.png" style="height: 90px;width: 90px;">
          </div>
          <div class="box-content">
            <div class="title-card">ข้อมูลการใช้งานผู้ป่วย</div>
            <div class="box-gender">
              <div class="flex-center">เพศ</div>
              <div class="flex-center">
                <div class="flex">
                  <img style="height: 23px" src="@/assets/images/dashboard/nongender.png">
                  <div class="text-highlight-q">523</div>
                </div>
                <div class="flex">
                  <img style="height: 23px" src="@/assets/images/dashboard/male.png">
                  <div class="text-highlight-q">523</div>
                </div>
                <div class="flex">
                  <img style="height: 23px" src="@/assets/images/dashboard/female.png">
                  <div class="text-highlight-q">523</div>
                </div>
              </div>
            </div>
            <div class="flex-end">พฤหัสบดี 28 มีนาคม 2019</div>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "patientInfo"
};
</script>

<style scoped>
.gap {
  padding: 10px 0;
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
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin: 0px 0px 0px 9px;
}
.text-highlight-q {
  font-size: 2em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin-left: 3px;
  margin-right: 7px;
}
</style>