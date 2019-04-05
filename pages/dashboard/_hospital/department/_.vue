<template>
  <el-row>
    <el-col :span="4" :xs="8" :sm="7" :md="5" :lg="3" :xl="3">
      <slide/>
    </el-col>
    <el-col :span="20" :xs="16" :sm="17" :md="19" :lg="21" :xl="21">
      <div class="container">
        <panel/>
        <filterPanel/>
        <room/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import navbar from "@/components/navbar";
import slide from "@/components/dashboard/department/slide";
import panel from "@/components/dashboard/department/panel";
import filterPanel from "@/components/dashboard/department/filter";
import room from "@/components/dashboard/department/room";

export default {
  layout: "department",
  components: {
    slide,
    panel,
    filterPanel,
    room
  },
  head() {
    return {
      title: "Department : QueQ Hospital Warroom"
    };
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>