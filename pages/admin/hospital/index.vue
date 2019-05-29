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
        <a-input placeholder="ค้นหาโรงพยาบาล">
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <table-component :hospitals="hospitals"/>
      </el-col>
    </el-row>
    <div class="flex-center">
      <a-pagination showSizeChanger :defaultCurrent="1" :total="100"/>
    </div>
    <br>
  </div>
</template>


<script>
import hospitalService from "@/service/hospital";
import tableComponent from "@/components/admin/hospital/table.vue";
export default {
  layout: "admin",
  name: "hospital",
  components: { tableComponent },
  head() {
    return {
      title: "Hospital : QueQ Hospital Warroom"
    };
  },
  computed: {
    hospitals() {
      return this.$store.state.hospital.hospitals;
    }
  },
  async created() {
    window.$nuxt.$root.$loading.start();
    const resApi = await hospitalService.getAllHospitalList();
    if (resApi && resApi.data) {
      this.$store.commit("hospital/getHospitals", {
        hospitals: { ...resApi.data.hospitals }
      });
      window.$nuxt.$root.$loading.finish();
    } else {
      console.log(resApi.data.message);
      window.$nuxt.$root.$loading.finish();
    }
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