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
      <tr v-for="(val,key) in tableData" :key="key">
        <td class="text-left">{{val.name}}</td>
        <td>{{val.built}}</td>
        <td>{{val.edited}}</td>
        <td>
          <button class="default link-amount">{{val.stationAmount}}</button>
        </td>
        <td v-if="val.status">
          <font-awesome-icon icon="circle" :style="{ color: '#45B383' }"/>
          <span>ใช้งานอยู่</span>
        </td>
        <td v-else>
          <font-awesome-icon icon="circle" :style="{ color: '#FF0000' }"/>
          <span>เลิกใช้งาน</span>
        </td>
        <td>
          <img src="@/assets/images/admin/Element-08.png" width="17px" alt>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import mockup from "@/components/admin/room/mockup.js";
export default {
  name: "tableComponent",
  data() {
    return {
      data: [],
      header: [
        { width: "15%", name: "ห้อง" },
        { width: "15%", name: "แผนก" },
        { width: "10%", name: "วันที่สร้าง" },
        { width: "10%", name: "วันที่แก้ไข" },
        { width: "10%", name: "สถานะ" },
        { width: "10%", name: "จัดการ" }
      ],
      tableData: mockup
    };
  },
  methods: {
    status(bool) {
      return;
    }
  }
};
</script>

<style  scoped>
table {
  width: 100%;
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