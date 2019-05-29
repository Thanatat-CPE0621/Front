<template>
  <div class="card full">
    <div class="gap flex-end">
      <div>
        <nuxt-link to="room/create">
          <a-button type="primary" class="gap-btn">เพิ่มห้อง</a-button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="room/order">
          <a-button type="primary" class="gap-btn border">จัดเรียง</a-button>
        </nuxt-link>
      </div>
    </div>
    <div class="flex-center">
      <label>
        <b class="title sub-title">ห้อง</b>
        <span class="text-black">จำนวนห้องทั้งหมด : 82</span>
      </label>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <div class="flex-center">
          <a-select
            placeholder="เลือกโรงพยาบาล"
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

          <a-select
            placeholder="เลือกแผนก"
            class="select"
            showSearch
            optionFilterProp="children"
            :filterOption="filterOption"
            v-model="stationID"
            @change="stationHandle"
            :defaultValue="0"
          >
            <a-select-option key="init" :value="0">เลือกแผนก</a-select-option>
            <a-select-option
              v-for="(val,index) in stations"
              :key="index"
              :value="val.station_id"
            >{{val.station_name}}</a-select-option>
          </a-select>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <table-component :rooms="rooms_list"/>
      </el-col>
    </el-row>
    <div class="flex-center">
      <a-pagination showSizeChanger :defaultCurrent="1" :total="100"/>
    </div>
    <br>
  </div>
</template>
<script>
import tableComponent from "@/components/admin/room/table.vue";
import { hospitalService, stationService, roomService } from "@/service";
export default {
  layout: "admin",
  name: "room",
  components: { tableComponent },
  head() {
    return {
      title: "Room : QueQ Hospital Warroom"
    };
  },
  computed: {
    stations_list() {
      return { ...this.$store.state.station.stations };
    },
    rooms_list() {
      return { ...this.$store.state.room.rooms };
    }
  },
  data() {
    return {
      hospitals: [],
      hospitalID: this.$store.state.hospital.hospital_id,
      stations: [],
      stationID: this.$store.state.station.station_id
    };
  },
  async created() {
    window.$nuxt.$root.$loading.start();

    //  get all hospitals
    const resApih = await hospitalService.getAllHospitalListforReorder();
    if (resApih.data) {
      this.hospitals = resApih.data.hospitals;
    } else {
      window.$nuxt.$root.$loading.finish();
      console.log(error);
    }

    //  get stations
    const hID = this.$store.state.hospital.hospital_id;
    const resApiS = await hospitalService.getStationInHospital(hID);
    console.log("resApiS:", resApiS);
    if (resApiS && resApiS.data) {
      this.$store.commit("station/getStations", {
        stations: { ...resApiS.data.stations }
      });
      this.stations = resApiS.data.stations;
    } else {
      console.log(resApiS.data.message);
      window.$nuxt.$root.$loading.finish();
    }

    //  get rooms
    const sID = this.$store.state.station.station_id;
    if (sID) {
      const resApiR = await stationService.getRoomInStation(sID);
      console.log("resApiR:", resApiR);
      if (resApiR && resApiR.data) {
        this.$store.commit("room/getRooms", {
          rooms: { ...resApiR.data.rooms }
        });
      } else {
        console.log(resApiR.data.message);
        window.$nuxt.$root.$loading.finish();
      }
    }

    //  waiting for api
    Promise.all([resApih, resApiS])
      .then(res => {
        window.$nuxt.$root.$loading.finish();
      })
      .catch(err => {
        window.$nuxt.$root.$loading.finish();
        console.log(err);
      });
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
        // const hID = this.$store.state.hospital.hospital_id;

        //clear station id
        this.$store.commit("station/getStationID", 0);
        this.stationID = 0;
        this.$store.commit("room/clearState", []);

        const resApi = await hospitalService.getStationInHospital(hID);
        console.log("hospitalHandle resApi:", resApi);
        if (resApi && resApi.data) {
          this.$store.commit("station/getStations", {
            stations: { ...resApi.data.stations }
          });
          this.stations = resApi.data.stations;
          window.$nuxt.$root.$loading.finish();
        } else {
          console.log(resApi.data.message);
          window.$nuxt.$root.$loading.finish();
        }
      } catch (error) {
        window.$nuxt.$root.$loading.finish();
        console.log(error);
      }
    },
    async stationHandle(sID) {
      window.$nuxt.$root.$loading.start();

      if (sID === 0) {
        this.$store.commit("room/getRooms", {
          rooms: []
        });
      }
      try {
        this.$store.commit("station/getStationID", sID);
        const resApi = await stationService.getRoomInStation(sID);
        console.log("stationHandle resApi:", resApi);
        if (resApi && resApi.data) {
          this.$store.commit("room/getRooms", {
            rooms: { ...resApi.data.rooms }
          });
          window.$nuxt.$root.$loading.finish();
        } else {
          console.log(resApi.data.message);
          window.$nuxt.$root.$loading.finish();
        }
      } catch (error) {
        window.$nuxt.$root.$loading.finish();
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
  margin: 0px 10px;
}
</style>