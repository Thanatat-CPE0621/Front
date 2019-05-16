<template>
  <div>
    <div class="title-page">Hospital / Add Hospital</div>
    <div class="card full">
      <div class="header flex content-header">
        <img src="@/assets/images/admin/arrow-light.png" height="15">
        <div class="title-card">Hospital</div>
        <div class="title-card">
          <span class="underline">Add Hospital</span>
        </div>
      </div>
      <div class="content flex-center">
        <div class="title">Add Hospital</div>
      </div>
      <div class="flex-center">
        <table>
          <tr>
            <td class="label">
              <span class="red">*</span>Hospital Name
            </td>
            <td>
              <input type="text" class="form-input">
            </td>
          </tr>
          <tr>
            <td class="label">Status</td>
            <td class="flex">
              <div>
                <input type="radio" name="test">
                <label for="test">Enabel</label>
              </div>
              <div>
                <input type="radio" name="test">
                <label for="stest">Enabel</label>
              </div>
            </td>
          </tr>
          <tr>
            <td class="label">Hospital Logo</td>
            <td>sss</td>
          </tr>
          <tr>
            <td class="label">Print Logo</td>
            <td>sss</td>
          </tr>
          <tr>
            <td class="label">Mobile Logo</td>
            <td>sss</td>
          </tr>
        </table>
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
      title: "Create Hospital : QueQ Hospital Warroom"
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
.red {
  color: red;
}
table {
  width: 30%;
}
tr > td {
  font-size: 20px;
}
.label {
  width: 40%;
}
</style>

