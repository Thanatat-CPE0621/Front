<template>
  <div>
    <table>
      <tr>
        <th
          v-for="(val,key) in header"
          :key="key"
          :style="{ width: val.width }"
          :class="val.style"
        >{{val.name}}</th>
      </tr>
      <tr v-for="(val,key) in hospitals" :key="key">
        <td class="text-left">
          <nuxt-link :to="`/admin/hospital/${val.hospital_id}/edit`">{{val.hospital_name}}</nuxt-link>
        </td>
        <td>{{FormatDate(val.created_date)}}</td>
        <td>{{FormatDate(val.updated_date)}}</td>
        <td>
          <button
            class="default link-amount"
            @click="linkStation(val.hospital_id)"
          >{{val.station_amount}}</button>
        </td>
        <td v-if="val.status===1">
          <font-awesome-icon icon="circle" :style="{ color: '#45B383' }"/>
          <span>ใช้งานอยู่</span>
        </td>
        <td v-else>
          <font-awesome-icon icon="circle" :style="{ color: '#FF0000' }"/>
          <span>เลิกใช้งาน</span>
        </td>
        <td>
          <nuxt-link :to="`/admin/hospital/${val.hospital_id}/edit`">
            <img src="@/assets/images/admin/Element-08.png" width="17px" alt>
          </nuxt-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableComponent",
  props: {
    hospitals: Object
  },
  data() {
    return {
      header: [
        { width: "20%", name: "โรงพยาบาล" },
        { width: "10%", name: "วันที่สร้าง" },
        { width: "10%", name: "วันที่แก้ไข" },
        { width: "10%", name: "จำนวนแผนก" },
        { width: "10%", name: "สถานะ" },
        { width: "10%", name: "จัดการ" }
      ]
    };
  },
  methods: {
    FormatDate(time) {
      if (time) {
        let date = String(time).split(" ");
        let dateFormat = String(date[0]).split("-");
        dateFormat[0] = Number(dateFormat[0]) + Number("543");
        let year = String(dateFormat[0]).match(/.{2}/g);
        return dateFormat[2] + "/" + dateFormat[1] + "/" + year[1];
      }
      return;
    },
    linkStation(id) {
      this.$store.commit("hospital/getHospitalID", id);
      this.$router.push("/admin/station");
    }
  }
};
</script>

<style  scoped>
a {
  color: black !important;
}
table {
  width: 100%;
  font-size: 15px !important;
}
td {
  font-size: 14px !important;
}
tr > th {
  background-color: #f2f2f3;
  padding: 7px;
  text-align: center;
}
tr > td {
  padding: 10px;
  text-align: center;
  border: 2px solid #f2f2f3;
  color: black;
}
.text-left {
  text-align: left;
}
.width-amount {
  width: 25px;
}
.link-amount {
  border-radius: 10px;
  width: 35px;
  background-color: #e9f2f4;
  color: black !important;
}
.link-amount:hover {
  background-color: #d5ecf2;
}
</style>