<template>
  <div>
    <el-row>
      <maxtimeDay/>
      <maxtimeWeek/>
      <maxtimeMonth/>
    </el-row>
  </div>
</template>

<script>
import maxtimeDay from "@/components/maxtime/maxtimeDay";
import maxtimeWeek from "@/components/maxtime/maxtimeWeek";
import maxtimeMonth from "@/components/maxtime/maxtimeMonth";
export default {
  layout: "dashboard",
  components: {
    maxtimeDay,
    maxtimeWeek,
    maxtimeMonth
  },
  head() {
    return {
      title: "Peak Time : QueQ Hospital Warroom"
    };
  }
};
</script>

<style scoped>
</style>