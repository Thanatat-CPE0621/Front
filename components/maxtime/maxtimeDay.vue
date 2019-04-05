<template>
  <el-col :span="24">
    <div class="card no-margin-top">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">ช่วงเวลาที่ใช้บริการสูงสุด</b>
          <div class="q">
            <div class="text-highlight">06.00 - 09.00 น.</div>
          </div>

          <div>พุธ 03 เมษายน 2019</div>
        </div>
        <div>
          <el-date-picker v-model="value" placeholder="Pick a day"></el-date-picker>
        </div>
        <div class="flex">
          <div class="line"></div>
          <div class="line-text">วัน</div>
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
  name: "maxtimeDay",
  data() {
    return {
      value: "",
      years: [
        {
          value: "7years",
          label: `${this.$nuxt
            .$moment()
            .subtract(6, "year")
            .format("YYYY")}-${this.$nuxt.$moment().format("YYYY")}`
        }
      ],
      options: {
        chart: {
          height: 350,
          width: "100%",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: -15,
          style: {
            fontSize: "16px",
            colors: ["#45b383"]
          },
          textAnchor: "middle"
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
            maxHeight: 10,
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
          tickAmount: 4,
          show: true,
          max: function(max) {
            return max * 1.2;
          },
          labels: {
            offsetY: -10,
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
            bottom: 2,
            left: 20,
            top: 10
          }
        },
        colors: ["#45b383"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [354530, 234402, 143543, 503623, 455359, 642560, 576660, 576660]
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
  color: #45b383;
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
  color: #45b383;
}
.text-highlight-q {
  font-size: 1.2em;
  color: #45b383;
}

.line {
  background-color: rgb(69, 179, 131);
  width: 30px;
  height: 2px;
  margin-right: 5px;
}
.line-text {
  color: rgb(128, 130, 133);
  font-size: 0.75em;
}
</style>