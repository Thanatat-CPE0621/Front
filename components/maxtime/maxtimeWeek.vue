<template>
  <el-col :span="12">
    <div class="card">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">ช่วงเวลาที่ใช้บริการสูงสุด (สัปดาห์นี้)</b>
          <div class="q">
            <div class="text-highlight">15.00 - 18.00 น.</div>
          </div>
          <div>สัปดาห์ที่ 14 2019</div>
        </div>

        <div class="flex-column flex-end">
          <div class="flex">
            <el-date-picker v-model="week" type="week" format="Week WW" placeholder="Pick a week"></el-date-picker>
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
export default {
  name: "maxtimeWeek",
  data() {
    return {
      week: "",
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
            colors: ["#8199CE"],
            cssClass: "front"
          }
        },
        xaxis: {
          hideOverlappingLabels: false,
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
            offsetY: -5,
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

        colors: ["#8199CE"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [330, 404, 425, 506, 491, 160, 970]
        }
      ]
    };
  }
};
</script>

<style scoped>
.front {
  z-index: 99;
}
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
  color: #8199ce;
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
  color: #8199ce;
}
.text-highlight-q {
  font-size: 1.2em;
  color: #8199ce;
}

.line {
  background-color: #8199ce;
  width: 30px;
  height: 2px;
  margin-right: 5px;
}
.line-text {
  color: rgb(128, 130, 133);
}
</style>