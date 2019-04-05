<template>
  <div>
    <el-row>
      <qallWeek/>
      <qallMonth/>
      <qallYear/>
    </el-row>
  </div>
</template>

<script>
import qallWeek from "@/components/qall/qallWeek";
import qallMonth from "@/components/qall/qallMonth";
import qallYear from "@/components/qall/qallYear";
export default {
  layout: "dashboard",
  components: {
    qallWeek,
    qallMonth,
    qallYear
  },
  head() {
    return {
      title: "Queue Summary : QueQ Hospital Warroom"
    };
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>