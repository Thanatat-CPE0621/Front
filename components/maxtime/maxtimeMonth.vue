<template>
  <el-col :span="12">
    <div class="card">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">ช่วงเวลาที่ใช้บริการสูงสุด (เดือน)</b>
          <div class="q">
            <div class="text-highlight">15.00 - 18.00 น.</div>
          </div>
          <div>{{value}}</div>
        </div>
        <div class="flex-column flex-end">
          <div class="flex">
            <el-date-picker v-model="value" type="month" placeholder="Pick a year"></el-date-picker>
          </div>
          <div class="flex flex-end" style="padding-top: 10px;">
            <div class="line"></div>
            <div class="line-text">เดือน</div>
          </div>
        </div>
      </div>
      <div class="container">
        <no-ssr>
          <apexchart type="line" height="300px" width="100%" :options="options" :series="series"/>
        </no-ssr>
      </div>
    </div>
  </el-col>
</template>

<script>
import moment from "moment";
export default {
  name: "maxtimeMonth",
  data() {
    return {
      value: moment().format("MMMM YYYY"),
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,

          style: {
            fontSize: "16px",
            colors: ["#F9A01D"]
          }
        },
        xaxis: {
          tickPlacement: "between",
          categories: [
            "24.00 - 03.00 น.",
            "03.00 - 06.00 น.",
            "06.00 - 09.00 น.",
            "09.00 - 12.00 น.",
            "12.00 - 15.00 น.",
            "15.00 - 18.00 น.",
            "18.00 - 21.00 น.",
            "21.00 - 24.00 น."
          ],
          labels: {
            offsetY: -7,
            maxHeight: 120,
            style: {
              colors: "#808297",
              fontSize: "15px"
            }
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 5,
          show: true,
          max: function(max) {
            return max * 1.2;
          },
          min: function(min) {
            return -min * 0.2;
          },
          labels: {
            offsetX: 15,
            style: {
              color: "#808297",
              fontSize: "15px"
            }
          }
        },
        grid: {
          yaxis: {
            lines: {
              show: true
            }
          },
          xaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            right: 20,
            bottom: 0,
            left: 20,
            top: 10
          }
        },
        colors: ["#F9A01D"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [330, 140, 451, 504, 479, 960, 570, 730]
        }
      ]
    };
  }
};
</script>

<style scoped>
.gap > * {
  margin: -6px 0;
}
.container {
  margin: 0px 10%;
}
.container-legend {
  height: 100%;
  min-width: 101.7px;
}
.label-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 50px;
}

.q {
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  color: #f9a01d;
}
.box {
  width: 18px;
  height: 18px;
  margin-right: 15px;
  background: rgb(76, 186, 122);
}
.box-light {
  width: 18px;
  height: 18px;
  margin-right: 15px;
  background: #9ddcb2;
}

.text-highlight {
  font-size: 2em;
  font-weight: bold;
  color: #f9a01d;
}
.text-highlight-q {
  font-size: 1.2em;
  color: #f9a01d;
}

.line {
  background-color: #f9a01d;
  width: 30px;
  height: 2px;
  margin-right: 5px;
}
.line-text {
  color: rgb(128, 130, 133);
}
</style>