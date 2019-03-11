<template>
  <div>
    <div class="flex-center">
      <input type="text" class="search" placeholder="ค้นหา">
    </div>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card style="height:150px" hospital>
          <div slot="content">
            <div class="container">
              <div class="content-center">
                <img class="logo" src="https://randomuser.me/api/portraits/men/65.jpg">
                <div class="container-text">
                  <label>cccccccccccccccccccccccccccccccccccccccccccc</label>
                </div>
              </div>
            </div>
          </div>
        </card>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card style="height:150px" hospital>
          <div slot="content">
            <div class="container">
              <div class="content-center">
                <img class="logo" src="https://randomuser.me/api/portraits/men/65.jpg">
                <div class="container-text">
                  <label>ccccccccccc</label>
                </div>
              </div>
            </div>
          </div>
        </card>
      </el-col>

      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
      <el-col :lg="4" :md="5" :sm="5">
        <card content="asd" style="height:150px"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import card from "~/components/common/Card.vue";
export default {
  layout: "hospital",
  components: {
    card
  },

};
</script>

<style scoped>
.search {
  width: 40%;
  height: 30px;
  padding: 20px px;
}
.logo {
  margin-top: 3px;
  width: 65px;
  height: 65px;
  border-radius: 40px;
}
.content-center {
  margin: auto;
  text-align: center;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
  display: block;
  word-wrap: break-word;
}
.container-text {
  width: 100%;
  padding-top: 5px;
  text-align: center;
  display: block;
}
.label {
  text-align: center;
  font-size: 16px;
  color: black;
  cursor: pointer;
  display: block;
}
.title {
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
}
</style>