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
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="Hospital Name" :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
            <a-input
              v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input  hospital name !' }]}
              ]"
            />
          </a-form-item>
          <a-form-item label="Status" :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
            <a-input
              v-decorator="[
                'status',
                {rules: [{ required: true, message: 'Please input  hospital name !' }]}
              ]"
            />
          </a-form-item>
        </a-form>
        <!-- 
        <table>
          <tr>
            <td class="label">
              <span class="red">*</span>Hospital Name
            </td>
            <td>
              <a-input
                v-decorator="[
                'name',
                  {rules: [{ required: true, message: 'Please input hospital name!' }]}
                ]"
              />
            </td>
          </tr>
          <tr>
            <td class="label">Status</td>
            <td class="flex">
              <a-radio-group v-model="valueRadio">
                <a-radio :value="1">A</a-radio>
                <a-radio :value="2">B</a-radio>
              </a-radio-group>
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
        </table>-->
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
  },
  data() {
    return {
      valueRadio: 1,
      form: this.$form.createForm(this)
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

