<template>
  <nav>
    <img src="~/assets/images/queq_element-03.png" class="logo">
    <div class="nav-text">
      <a-tooltip placement="bottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <div class="bold">UI Ver.1.0.17</div>
      </a-tooltip>
      <div class="inline">
        <img src="~/assets/images/user.png" class="user-img">
        <div>
          <span class="demonstration">name</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              Dropdown List
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div>TH/EN</div>
    </div>
  </nav>
</template>

<script>
export default {
  asyncData({ store }) {
    console.log("store:", store);
  },
  methods: {
    logout() {
      localStorage.removeItem("user_data");
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  margin: auto 20px;
  height: 3vh;
}

.nav-text {
  margin: auto 20px;
  display: flex;
  justify-content: flex-end;
}

.bold {
  font-weight: bold;
  margin-right: 10px;
}

.inline {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}

.user-img {
  height: 2vh;
  padding-right: 5px;
}
</style>