<template>
  <el-col :span="24">
    <div class="card no-margin-top">
      <div class="flex-between">
        <div class="gap">
          <b style="font-size:18px;">คิวรวมทั้งโรงพยาบาล (สัปดาห์นี้)</b>
          <div class="q">
            <img style="height: 15px" src="@/assets/images/dashboard/user.png">
            <div class="text-highlight">1532</div>
            <div class="text-highlight-q">คิว</div>
          </div>
          <div>31 มีนาคม 2019 และ 01-06 เมษายน 2019</div>
        </div>
        <div>
          <el-date-picker v-model="week" type="week" format="Week WW" placeholder="Pick a week"></el-date-picker>
        </div>
        <div>
          <div class="container-legend">
            <div style="display:flex">
              <div class="label-container">
                <div class="box"></div>
                <div>คิวปัจจุบัน</div>
              </div>
            </div>
            <div style="display:flex">
              <div class="label-container">
                <div class="box-light"></div>
                <div>คิวที่ผ่านมา</div>
              </div>
            </div>
          </div>
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
  name: "qallWeek",
  data() {
    return {
      week: "",
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35px",
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
            colors: ["#45b383"]
          }
        },
        xaxis: {
          categories: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
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
          // title: {
          //   text: "(คิว)",
          //   style: {
          //     fontSize: "15px",
          //     color: "#808297"
          //   }
          // },
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
            right: 35,
            bottom: 2,
            left: 35,
            top: 10
          }
        },

        colors: ["#45b383"]
      },
      series: [
        {
          name: "จำนวนคิว",
          data: [30, 40, 45, 50, 49, 60, 70]
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
  color: rgb(69, 179, 131);
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
  color: rgb(69, 179, 131);
  margin: 0px 5px 0px 9px;
}
.text-highlight-q {
  font-size: 1.2em;
  color: rgb(69, 179, 131);
  margin-left: 3px;
}
</style>