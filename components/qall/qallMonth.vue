<template>
  <el-col :span="12">
    <div class="card">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">คิวรวมทั้งโรงพยาบาล (เดือน)</b>
          <div class="q">
            <img style="height: 15px" src="@/assets/images/dashboard/user.png">
            <div class="text-highlight">15532</div>
            <div class="text-highlight-q">คิว</div>
          </div>
          <div>{{this.$nuxt.$moment(value).format('YYYY')}}</div>
        </div>
        <div>
          <el-date-picker v-model="value" type="year" placeholder="Pick a year"></el-date-picker>
        </div>
      </div>
      <div class="container">
        <no-ssr>
          <apexchart type="bar" height="300px" width="100%" :options="options" :series="series"/>
        </no-ssr>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "qallMonth",
  data() {
    return {
      value: this.$nuxt.$moment(),
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "70px",
            barHeight: "80%",
            dataLabels: {
              position: "top"
            }
          }
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          offsetY: -35,
          style: {
            fontSize: "16px",
            colors: ["#F9A01D"]
          }
        },
        xaxis: {
          categories: [
            "มค",
            "กพ",
            "มีค",
            "เมษ",
            "พค",
            "มิย",
            "กค",
            "สค",
            "กย",
            "ตค",
            "พย",
            "ธค"
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
            offsetX: 20,
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
              show: false
            }
          },
          padding: {
            right: 15,
            bottom: 2,
            left: 15,
            top: 10
          }
        },

        colors: ["#F9A01D"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [330, 140, 451, 504, 479, 960, 570, 730, 1240, 445, 750, 249]
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
  margin: 0px 5px 0px 9px;
}
.text-highlight-q {
  font-size: 1.2em;
  color: #f9a01d;
  margin-left: 3px;
}
</style>