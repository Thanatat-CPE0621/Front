<template>
  <div>
    <div class="title-page">Hospital / Edit Hospital</div>
    <div class="card full">
      <div class="header flex content-header">
        <img src="@/assets/images/admin/arrow-light.png" height="15">
        <div>
          <nuxt-link class="link" to="/admin/hospital">Hospital</nuxt-link>
        </div>
        <div>
          <span class="underline link">Edit Hospital</span>
        </div>
      </div>
      <div class="flex-end over-text">
        <ul type="none">
          <li>Build :</li>
          <li>Edited : 24/05/2019 16:47:13</li>
          <li>Hospital ID : 2</li>
          <li>Hospital GUID :</li>
        </ul>
      </div>
      <div class="content flex-center">
        <div class="title">Edit Hospital</div>
      </div>
      <div class="flex-center">
        <div class="label">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item
              label="Hospital Name"
              v-bind="formItemLayout"
              hasFeedback
              :validateStatus="validatingHname"
              :help="`${validatingHname==='error'?'Hospital name is not available' :``}`"
            >
              <a-input
                v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input  hospital name !' }]}
              ]"
                @keyup="checkHospitalName"
              />
            </a-form-item>
            <a-form-item label="Status" v-bind="formItemLayout">
              <a-radio-group v-decorator="['status', { initialValue:1 }]">
                <a-radio :value="1">Enable</a-radio>
                <a-radio :value="0">Disable</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="Hospital Logo" v-bind="formItemLayoutUpload" :help="txtHelp">
              <a-input v-model="logo.hospitalLogo"/>
            </a-form-item>
            <a-form-item label="Print Logo" v-bind="formItemLayoutUpload" :help="txtHelp">
              <a-input v-model="logo.printLogo"/>
            </a-form-item>
            <a-form-item label="Mobile Logo" v-bind="formItemLayoutUpload" :help="txtHelp">
              <a-input v-model="logo.mobildLogo"/>
            </a-form-item>
            <br>
            <div class="flex-between logo">
              <div class="text-center">
                <h2>Hospital Logo</h2>
                <img class="img-logo" width="200" height="80" :src="logo.hospitalLogo">
              </div>
              <div class="text-center">
                <h2>Print Logo</h2>
                <img class="img-logo" width="200" height="80" :src="logo.printLogo">
              </div>
              <div class="text-center">
                <h2>Mobile Logo</h2>
                <img class="img-logo" width="80" height="80" :src="logo.mobildLogo">
              </div>
            </div>
            <br>
            <br>
            <div class="flex-center">
              <a-button type="primary" html-type="submit" size="large" class="submit gap-btn">Save</a-button>
              <a-button
                type="primary"
                size="large"
                class="submit reset gap-btn"
                @click="$router.push('/admin/hospital')"
              >Cancel</a-button>
            </div>
            <br>
            <br>
            <br>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hospitalService from "@/service/hospital";
export default {
  name: "hospitalRegister",
  layout: "admin",
  head() {
    return {
      title: "Edit Hospital : QueQ Hospital Warroom"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 }
      },
      formItemLayoutUpload: {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
      },
      logo: {
        hospitalLogo: null,
        printLogo: null,
        mobildLogo: null
      },
      txtHelp: "Should be url only",
      validatingHname: "",
      timer: null
    };
  },
  async mounted() {
    window.$nuxt.$root.$loading.start();
    try {
      const id = this.$route.params.id;
      const res = await hospitalService.getHospitalInfomation(id);
      if (res.data) {
        window.$nuxt.$root.$loading.finish();
        const { hospital } = res.data;
        this.form.setFieldsValue({
          ["name"]: hospital.hospital_name,
          ["status"]: hospital.status
        });
        this.logo.hospitalLogo = hospital.hospital_logo_path;
        this.logo.printLogo = hospital.hospital_print_logo_path;
        this.logo.mobildLogo = hospital.hospital_mobile_logo_path;
      } else {
        window.$nuxt.$root.$loading.finish();
      }
    } catch (error) {
      console.log(error);
      window.$nuxt.$root.$loading.finish();
    }
  },
  methods: {
    checkHospitalName(e) {
      e.preventDefault();
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        this.validatingHname = "validating";
        try {
          const res = await hospitalService.checkHospitalNameAvailable(
            this.form.getFieldValue("name")
          );
          if (res.data.available) {
            this.validatingHname = "success";
          } else {
            this.validatingHname = "error";
          }
        } catch (error) {
          console.log(error);
        }
      }, 500);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, value) => {
        if (!err) {
          window.$nuxt.$root.$loading.start();
          try {
            console.log("value:", value);
            const data = {
              hospital_name: value.name,
              status: value.status,
              hospital_logo_path: this.logo.hospitalLogo,
              hospital_print_logo_path: this.logo.printLogo,
              hospital_mobile_logo_path: this.logo.mobildLogo
            };
            const id = this.$route.params.id;
            const res = await hospitalService.editHospitalInfo(id, data);
            if (res.data) {
              window.$nuxt.$root.$loading.finish();
              this.$success({
                title: "Success",
                content: "Edit hospital successful"
              });
              this.$router.push("/admin/hospital");
            } else {
              window.$nuxt.$root.$loading.finish();
              this.$error({
                title: "Error",
                content: res.error.message
              });
            }
          } catch (error) {
            console.log(error);
            window.$nuxt.$root.$loading.finish();
          }
        }
      });
      return;
    }
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
.logo {
  width: 90%;
}
h2 {
  color: #878887;
}
.img-logo {
  border-radius: 5px;
  background-color: rgb(210, 210, 212);
}
.link {
  font-size: 1.4em;
  margin-left: 30px !important;
}
.label {
  width: 40%;
}
.pointer {
  cursor: pointer;
}
.submit {
  width: 15%;
  font-size: 18px;
}
</style>

