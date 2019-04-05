<template>
  <el-col :span="12">
    <div class="card">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">คิวรวมทั้งโรงพยาบาล (ปี)</b>
          <div class="q">
            <img style="height: 15px" src="@/assets/images/dashboard/user.png">
            <div class="text-highlight">153772</div>
            <div class="text-highlight-q">คิว</div>
          </div>
          <div>{{years[0].label}}</div>
        </div>
        <div>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in years"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
  name: "qallYear",
  data() {
    return {
      value: "7years",
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
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40px",
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
            colors: ["#E44E50"]
          }
        },
        xaxis: {
          categories: [
            this.$nuxt
              .$moment()
              .subtract(6, "year")
              .format("YYYY"),
            this.$nuxt
              .$moment()
              .subtract(5, "year")
              .format("YYYY"),
            this.$nuxt
              .$moment()
              .subtract(4, "year")
              .format("YYYY"),
            this.$nuxt
              .$moment()
              .subtract(3, "year")
              .format("YYYY"),
            this.$nuxt
              .$moment()
              .subtract(2, "year")
              .format("YYYY"),
            this.$nuxt
              .$moment()
              .subtract(1, "year")
              .format("YYYY"),
            this.$nuxt.$moment().format("YYYY")
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
            right: 20,
            bottom: 2,
            left: 20,
            top: 10
          }
        },
        colors: ["#E44E50"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [354530, 234402, 143543, 503623, 455359, 642560, 576660]
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
  color: #e44e50;
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
  color: #e44e50;
  margin: 0px 5px 0px 9px;
}
.text-highlight-q {
  font-size: 1.2em;
  color: #e44e50;
  margin-left: 3px;
}
</style>