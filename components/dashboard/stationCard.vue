<template>
  <div>
    <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24" v-for="n in 20" :key="n">
      <div class="card">
        <div class="card-half">
          <div class="gap flex-between">
            <div>
              <img class="bg-img" :src="status[0].img" style="height: 130px;width: 130px;">
            </div>
            <div class="box-content">
              <div class="title-card">แผนกจำลอง เชียงใหม่</div>
              <div class="flex-end">
                <div>
                  จำนวนห้องตรวจ:
                  <b>20 ห้อง</b>
                </div>
              </div>
              <div class="flex-end">
                <div>
                  เวลาเฉลี่ยต่อคิว:
                  <b>8 นาที</b>
                </div>
              </div>
              <div class="flex-end">คิวรอเรียก</div>
              <div class="flex-end flex gap-q">
                <img height="15" src="@/assets/images/dashboard/user.png" alt>
                <div class="queue" v-bind:style="{color:status[0].color}">153</div>
              </div>
              <div class="flex-end">
                <div>
                  จำนวนคิวทั้งหมด:
                  <b>448 คิว</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import status1 from "@/assets/images/dashboard/status-1.png";
import status2 from "@/assets/images/dashboard/status-2.png";
import status3 from "@/assets/images/dashboard/status-3.png";
import status4 from "@/assets/images/dashboard/status-4.png";

export default {
  name: "stationCard",
  data() {
    return {
      ran: Math.floor(Math.random() * (3 - 0)) + 0,
      status: [
        { img: status1, color: "#E44E50" },
        { img: status2, color: "#F9A01D" },
        { img: status3, color: "#8BC63F" },
        { img: status4, color: "#606160" }
      ]
    };
  }
};
</script>

<style scoped>
b {
  padding-left: 3px;
  font-size: 16px;
}
.bg-img {
  align-self: center;
  object-fit: cover;
  background-image: url("../../assets/images/dashboard/dpm-1.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.gap {
  padding: 10px 0;
}
.gap-q {
  margin: -6px 0px;
}
.queue {
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
}
.box-content {
  padding-right: 12px;
}
.box-gender {
  margin-bottom: 10px;
  border-style: solid;
  border-color: rgb(218, 218, 219);
  border-image: initial;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px 10px;
}
.title-card {
  font-weight: bold;
  color: rgb(128, 130, 133);
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
}
.q {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  color: rgb(69, 179, 131);
}
.text-highlight {
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin: 0px 0px 0px 9px;
}
.text-highlight-q {
  font-size: 2em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin-left: 3px;
  margin-right: 7px;
}
</style>