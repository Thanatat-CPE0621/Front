<template>
  <div>
    <no-ssr/>
    <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
      <div class="card">
        <div style="height:50%">
          <div class="flex-center">
            <div class="container-logo-legend">
              <div class="blank-box"></div>
              <img src="@/assets/images/slider/dashboard/gicon-2.png" style="width:90px">
              <div class="container-legend"></div>
            </div>
          </div>
          <div class="flex-center">
            <div
              style="font-weight: bold; color: rgb(128, 130, 133); font-size: 20px;"
            >ช่วงเวลาที่ใช้บริการสูงสุด</div>
          </div>
          <div class="flex-center">
            <div class="q">
              <div class="text-highlight">09.00 - 12.00</div>
              <div class="text-highlight">น.</div>
            </div>
          </div>
          <div class="flex-center">
            <div>พฤหัสบดี 28 มีนาคม 2019</div>
          </div>
        </div>
        <no-ssr>
          <apexchart type="line" height="190px" width="100%" :options="options" :series="series"/>
        </no-ssr>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        tooltip: {},
        stroke: {
          width: 4
        },
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          // tickPlacement: "between",
          categories: [
            "06.00 - 09.00",
            "09.00 - 12.00",
            "12.00 - 15.00",
            "18.00 - 21.00",
            "21.00 - 24.00",
            "24.00 - 03.00",
            "03.00 - 06.00"
          ],
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          tickAmount: 5,
          show: false,
          max: function(max) {
            return max * 1.5;
          },
          min: function(min) {
            return -min * 0.2;
          }
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: -10,
            right: 35,
            bottom: -15,
            left: 35
          }
        },
        colors: ["#45b383"],
        annotations: {
          points: [
            {
              x: 4,
              y: 70,
              marker: {
                size: 4,
                fillColor: "red",
                strokeColor: "red"
              },
              label: {
                offsetY: -5,
                borderColor: "#000",
                style: {
                  fontSize: "16px",
                  color: "#fff",
                  background: "#000"
                },
                text: "1,532"
              }
            }
          ]
        }
      },

      series: [
        {
          name: "จำนวนคิว",
          data: [10, 40, 0, 70, 50, 0, 40]
        }
      ]
    };
  }
};
</script>

<style scoped>
.container-logo-legend {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.container-legend {
  height: 100%;
  min-width: 101.7px;
}
.blank-box {
  min-width: 101.7px;
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
.text-highlight {
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin: 0px 0px 0px 9px;
}
.text-highlight-q {
  color: rgb(69, 179, 131);
  margin-left: 3px;
}
</style>