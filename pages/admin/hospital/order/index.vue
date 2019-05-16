<template>
  <div>
    <div class="card full">
      <div class="gap flex-end">
        <div>
          <a-button type="primary" class="gap-btn">บันทึก</a-button>
        </div>
        <div>
          <nuxt-link to="hospital">
            <a-button type="primary" class="gap-btn border">ยกเลิก</a-button>
          </nuxt-link>
        </div>
      </div>
      <div class="flex-center">
        <label>
          <b class="title sub-title">จัดเรียงลำดับ</b>
          <span class="text-black">จำนวนโรงพยาบาลทั้งหมด : 82</span>
        </label>
      </div>
      <div class="flex-center content">
        <no-ssr>
          <grid :draggable="true" :sortable="true" :items="items" :height="150" :width="350">
            <template slot="cell" slot-scope="props">
              <div>{{props.index+1}}{{props.item}}</div>
            </template>
          </grid>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hospitalRegister",
  layout: "admin",
  head() {
    return {
      title: "Reorder Hospital : QueQ Hospital Warroom"
    };
  },
  data() {
    return {
      items: ["assssssssssssss", "assssssssssssss", "assssssssssssss"]
    };
  }
};
</script>
<style scoped>
.header {
  background-color: #e6e6e8;
  height: 65px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.content-header {
  padding-left: 20px;
}
.content {
  padding: 20px;
}
.box {
  font-size: 20px;
  border-style: solid;
  border-color: rgb(181, 181, 181);
  padding: 5px;
  margin: 5px 10px;
  border-radius: 10px;
  width: 150px;
  cursor: move;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

