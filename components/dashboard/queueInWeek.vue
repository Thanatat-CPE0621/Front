<template>
  <div>
    <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
      <div class="card">
        <div style="height:50%">
          <div class="flex-center">
            <div class="container-logo-legend">
              <div class="blank-box"></div>
              <img src="@/assets/images/slider/dashboard/gicon-1.png" style="width:90px">
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
          <div class="flex-center">
            <div
              style="font-weight: bold; color: rgb(128, 130, 133); font-size: 20px;"
            >คิวรวมทั้งโรงพยาบาล</div>
          </div>
          <div class="flex-center">
            <div class="q">
              <img style="height: 15px" src="@/assets/images/dashboard/user.png">
              <div class="text-highlight">1532</div>
              <div class="text-highlight-q">คิว</div>
            </div>
          </div>
          <div class="flex-center">
            <div>พฤหัสบดี 28 มีนาคม 2019</div>
          </div>
        </div>
        <no-ssr>
          <apexchart type="bar" height="190px" width="100%" :options="options" :series="series"/>
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
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "45%",
            barHeight: "100%",
            distributed: true,
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 20,
                  color: undefined
                }
              ],
              backgroundBarColors: [],
              backgroundBarOpacity: 1
            },
            dataLabels: {
              position: "top"
            }
          }
        },
        tooltip: {},
        dataLabels: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
          labels: {
            offsetY: -7,
            maxHeight: 10,
            style: {
              fontSize: "14px"
            }
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: false
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
            left: 35
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
  font-size: 1.7em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin: 0px 5px 0px 9px;
}
.text-highlight-q {
  color: rgb(69, 179, 131);
  margin-left: 3px;
}
</style>