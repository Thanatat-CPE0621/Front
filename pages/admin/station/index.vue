<template>
  <div class="card full">
    <div class="gap flex-end">
      <div>
        <nuxt-link to="station/create">
          <a-button type="primary" class="gap-btn">เพิ่มแผนก</a-button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="station/order">
          <a-button type="primary" class="gap-btn border">จัดเรียง</a-button>
        </nuxt-link>
      </div>
    </div>
    <div class="flex-center">
      <label>
        <b class="title sub-title">แผนก</b>
        <span class="text-black">จำนวนแผนกทั้งหมด : 82</span>
      </label>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <a-select
          class="select"
          showSearch
          optionFilterProp="children"
          :filterOption="filterOption"
          v-model="hospitalID"
          @change="hospitalHandle"
        >
          <a-select-option
            v-for="(val,index) in hospitals"
            :key="index"
            :value="val.hospital_id"
          >{{val.hospital_name}}</a-select-option>
        </a-select>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <table-component :stations="stations"/>
      </el-col>
    </el-row>
    <div class="flex-center">
      <a-pagination showSizeChanger :defaultCurrent="1" :total="100"/>
    </div>
    <br>
  </div>
</template>
<script>
import tableComponent from "@/components/admin/station/table.vue";
import hospitalService from "@/service/hospital";
export default {
  layout: "admin",
  name: "station",
  components: { tableComponent },
  head() {
    return {
      title: "Station : QueQ Hospital Warroom"
    };
  },
  computed: {
    stations() {
      return this.$store.state.station.stations;
    }
  },
  data() {
    return {
      hospitals: [],
      hospitalID: this.$store.state.hospital.hospital_id
    };
  },
  async created() {
    window.$nuxt.$root.$loading.start();
    const resApih = await hospitalService.getAllHospitalListforReorder();
    if (resApih.data) {
      this.hospitals = resApih.data.hospitals;
      window.$nuxt.$root.$loading.finish();
    } else {
      window.$nuxt.$root.$loading.finish();
      console.log(error);
    }
    const hID = this.$store.state.hospital.hospital_id;
    const resApi = await hospitalService.getStationInHospital(hID);
    if (resApi && resApi.data) {
      this.$store.commit("station/getStations", {
        stations: { ...resApi.data.stations }
      });
      window.$nuxt.$root.$loading.finish();
    } else {
      console.log(resApi.data.message);
      window.$nuxt.$root.$loading.finish();
    }
  },
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    async hospitalHandle(hID) {
      window.$nuxt.$root.$loading.start();
      try {
        this.$store.commit("hospital/getHospitalID", hID);
        const resApi = await hospitalService.getStationInHospital(hID);
        if (resApi && resApi.data) {
          this.$store.commit("station/getStations", {
            stations: { ...resApi.data.stations }
          });
          window.$nuxt.$root.$loading.finish();
        } else {
          console.log(resApi.data.message);
          window.$nuxt.$root.$loading.finish();
        }
      } catch (error) {
        console.log(error);
      }
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
.select {
  width: 100%;
}
</style>