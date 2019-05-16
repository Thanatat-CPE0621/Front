<template>
  <el-col :span="24">
    <div class="card no-margin-top">
      <div class="flex-center">
        <div class="title">Export</div>
      </div>
      <br>
      <div class="text-center">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <a-form :form="form">
              <a-form-item
                class="gap-bot"
                label="เลือกประเภท"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 15 }"
              >
                <a-select
                  v-decorator="[
                    'type',
                    {rules: [{ required: true, message: 'Please input your note!' }]},
                    {
                      initialValue:'lucy'
                    }
                  ]"
                >
                  <a-select-option :value="1">คิวโรงพยาบาล</a-select-option>
                  <a-select-option :value="2">ช่วงเวลาใช้บริการสูงสุด</a-select-option>
                  <a-select-option :value="3">เวลารอเฉลี่ยต่อคิว</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                class="gap-bot"
                label="แผนก"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 15 }"
              >
                <a-radio-group name="radioGroup" :defaultValue="1">
                  <a-radio :value="1">ทั้งหมด</a-radio>
                  <a-radio :value="2">เลือกแผนก</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item
                class="gap-bot"
                label="ช่วงเวลา"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 15 }"
              >
                <a-range-picker
                  v-decorator="[
                    'date_range',
                    {rules: [{ required: true, message: 'Please input your note!' }]}
                  ]"
                />
              </a-form-item>
              <a-form-item
                class="gap-bot"
                label="ประเภทไฟล์"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 15 }"
              >
                <a-radio-group
                  name="radioGroup"
                  :defaultValue="1"
                  v-decorator="[
                    'file_type',
                    {rules: [{ required: true, message: 'Please input your note!' }]},
                    {
                      initialValue:1
                    }
                  ]"
                >
                  <a-radio :value="1">Excel</a-radio>
                  <a-radio :value="2">PDF</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item class="gap-bot" :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" class="remove-margin size-btn nomal">จัดเตรียม</a-button>
                <a-button type="primary" class="remove-margin size-btn nomal reset">รีเซ็ต</a-button>
              </a-form-item>
            </a-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "exportComponent",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  }
};
</script>

<style scoped>
.gap-bot {
  margin-bottom: 0px;
}
.size-btn {
  height: 37px;
}
</style>