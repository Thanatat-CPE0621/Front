<template>
  <el-row>
    <exportComponent/>
  </el-row>
</template>

<script>
import exportComponent from "@/components/export/export";
export default {
  layout: "dashboard",
  components: {
    exportComponent
  },
  head() {
    return {
      title: "Export : QueQ Hospital Warroom"
    };
  }
};
</script>
