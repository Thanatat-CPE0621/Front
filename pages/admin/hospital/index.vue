<template>
  <div class="card full">
    <div class="gap flex-end">
      <div>
        <nuxt-link to="hospital/create">
          <a-button type="primary" class="gap-btn">เพิ่มโรงพยาบาล</a-button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="hospital/setup">
          <a-button type="primary" class="gap-btn border">Queue Setup</a-button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="hospital/order">
          <a-button type="primary" class="gap-btn border">จัดเรียง</a-button>
        </nuxt-link>
      </div>
    </div>
    <div class="flex-center">
      <label>
        <b class="title sub-title">โรงพยาบาล</b>
        <span class="text-black">จำนวนโรงพยาบาลทั้งหมด : 82</span>
      </label>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <input type="text" class="dark input" placeholder="ค้นหาโรงพยาบาล">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <table-component/>
      </el-col>
    </el-row>
    <div class="flex-center">
      <a-pagination showSizeChanger :defaultCurrent="1" :total="100"/>
    </div>
    <br>
  </div>
</template>


<script>
import tableComponent from "@/components/admin/hospital/table.vue";
export default {
  layout: "admin",
  name: "hospital",
  components: { tableComponent },
  head() {
    return {
      title: "Hospital : QueQ Hospital Warroom"
    };
  }
};
</script>

<style scoped>
.header-table {
  background-color: #818284 !important;
}
th {
  background-color: #818284 !important;
}
</style>