<template>
  <no-ssr>
    <div class="slide">
      <a @click="$router.go(-1)">
        <div class="flex">
          <img
            src="@/assets/images/dashboard/department/arrow-02.png"
            style="width:15%;margin:15px 0px"
          >
          <div class="back-btn" style="margin-left:10px">หน้าหลัก</div>
        </div>
      </a>
      <div class="text-center">
        <input type="text" class="dark input img-btn" placeholder="ค้นหาหมายเลขคิว">
      </div>
      <div class="text-center">
        <div class="text-highlight">ห้องตรวจ 1 (ศัลยกรรม 1)</div>
      </div>
      <div class="container-q">
        <div class="q-info" v-for="item in 50" :key="item">
          <div>
            หมายเลขคิว
            <b>SA D017</b>
          </div>
          <div class="flex">
            มาถึง:
            <b>10:15</b>
            <img
              src="@/assets/images/dashboard/time.png"
              style="width:15px;margin-left: 4px;margin-right: 7px;"
            >
            เรียก:
            <b>10:15</b>
            <img
              src="@/assets/images/dashboard/time.png"
              style="width:15px;margin-left: 4px;margin-right: 7px;"
            >
          </div>
          <div>
            เวลารอรวม:
            <b>-</b>
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  name: "slide"
};
</script>

<style scoped>
.back-btn {
  font-size: 18px;
  color: black;
}
.slide {
  padding: 15px;
  width: 100%;
  /* min-width: 200px; */
  background: rgb(255, 255, 255);
  height: 100vh;
}

.text-highlight {
  font-size: 1.6em;
  font-weight: bold;
  color: rgb(69, 179, 131);
  margin: 10px 0px;
}
.text-highlight-q {
  font-size: 1.2em;
  color: rgb(69, 179, 131);
  margin-left: 3px;
}
.container-q {
  width: 100%;
  height: 75vh;
  overflow-y: auto;
}
.q-info {
  margin-bottom: 20px;
}
</style>