<template>
  <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
    <div class="card gap-down">
      <div class="card-half">
        <div class="gap flex-between">
          <img src="@/assets/images/dashboard/gicon-3.png">
          <div class="title-card">เวลาเฉลี่ยต่อคิว</div>
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
.gap {
  padding: 30px 0;
}
.gap-down {
  margin-bottom: 27px;
}
.title-card {
  font-weight: bold;
  color: rgb(128, 130, 133);
  font-size: 20px;
}
@media screen and (max-width: 1400px) {
  .gap-down {
    margin-bottom: 27px;
  }
}
</style>