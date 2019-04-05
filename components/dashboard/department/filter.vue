<template>
  <div class="padding">
    <div class="flex">
      <a-button type="primary" class="remove-margin size-btn">วันนี้</a-button>
      <el-date-picker
        v-model="date"
        type="daterange"
        align="right"
        start-placeholder="เริ่มต้น"
        end-placeholder="สิ้นสุด"
        :picker-options="pickerOptions"
      ></el-date-picker>
      <div>
        <input type="text" class="dark input img-btn findroom" placeholder="ค้นหาห้อง">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterPanel"
};
</script>

<style scoped>
.size-btn {
  height: 37px;
}
.padding {
  margin: 6px -2px -12px 20px;
}
.findroom {
  margin-left: 7px;
  height: 37px;
  width: 250px;
  border-radius: 4px;
}
</style>