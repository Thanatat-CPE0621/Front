<template>
  <div class="container">
    <el-row type="flex" justify="end" style="padding:0 16px;">
      <el-col :span="8">
        <div class="flex-end">
          <a-button type="primary" class="remove-margin size-btn">วันนี้</a-button>
          <el-date-picker
            v-model="date"
            type="daterange"
            align="right"
            start-placeholder="เริ่มต้น"
            end-placeholder="สิ้นสุด"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <queueInWeek/>
      <peakQueue/>
      <avgQueue/>
      <patientInfo/>
    </el-row>
    <el-row :gutter="16">
      <stationCard/>
    </el-row>
  </div>
</template>

<script>
import queueInWeek from "@/components/dashboard/queueInWeek";
import peakQueue from "@/components/dashboard/peakQueue";
import avgQueue from "@/components/dashboard/avgQueue";
import patientInfo from "@/components/dashboard/patientInfo";
import stationCard from "@/components/dashboard/stationCard";
export default {
  layout: "dashboard",
  components: {
    queueInWeek,
    peakQueue,
    avgQueue,
    patientInfo,
    stationCard
  },
  head() {
    return {
      title: "Dashboard : QueQ Hospital Warroom"
    };
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      date: ""
    };
  },

  created() {
    // this.daterange = this.$nuxt.$moment();
    this.daterange = null;
  }
};
</script>

<style scoped>
.size-btn {
  height: 37px;
}
.el-row {
  margin: 0px 0px !important;
  padding-top: 0px !important;
}
.width {
  width: 200px;
}
.container {
  width: 100%;
  height: 100%;
}
.container-text {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  display: block;
}
</style>