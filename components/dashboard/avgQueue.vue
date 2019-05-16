<template>
  <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
    <div class="card gap-down">
      <div class="card-half">
        <div class="gap flex-between">
          <div>
            <img src="@/assets/images/dashboard/gicon-3.png" style="height: 90px;width: 90px;">
          </div>
          <div class="box-content">
            <div class="title-card">เวลาเฉลี่ยต่อคิว</div>
            <div class="q">
              <img style="height: 15px" src="@/assets/images/dashboard/time.png">
              <div class="text-highlight">15</div>
              <div class="text-highlight-q">นาที</div>
            </div>
            <div>พฤหัสบดี 28 มีนาคม 2019</div>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "avgQueue"
};
</script>

<style scoped >
.box-content {
  padding-right: 12px;
}
.gap {
  padding: 25px 0;
}
.gap-down {
  margin-bottom: 27px;
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
  font-size: 1.5em;
  color: rgb(69, 179, 131);
  margin-left: 3px;
}
@media screen and (max-width: 1400px) {
  .gap-down {
    margin-bottom: 27px;
  }
}
</style>