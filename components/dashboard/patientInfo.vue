<template>
  <el-col :span="8" :lg="8" :md="12" :sm="12" :xs="24">
    <div class="card flex">
      <div class="card-half">
        <div class="gap">
          <img src="@/assets/images/dashboard/gicon-4.png">
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
  padding: 30px 0;
}
</style>