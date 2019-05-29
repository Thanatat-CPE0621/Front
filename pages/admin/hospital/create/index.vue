<template>
  <div>
    <div class="title-page">Hospital / Add Hospital</div>
    <div class="card full">
      <div class="header flex content-header">
        <img src="@/assets/images/admin/arrow-light.png" height="15">
        <div>
          <nuxt-link class="link" to="/admin/hospital">Hospital</nuxt-link>
        </div>
        <div>
          <span class="underline link">Add Hospital</span>
        </div>
      </div>
      <div class="content flex-center">
        <div class="title">Add Hospital</div>
      </div>
      <div class="flex-center">
        <div class="label">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item
              label="Hospital Name"
              v-bind="formItemLayout"
              hasFeedback
              :validateStatus="validatingHname"
              :help="`${validatingHname==='error'? errorMsg :``}`"
            >
              <a-input
                v-decorator="[ 'name',{rules: [{ required: true, message: 'Please input  hospital name !' }]}]"
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
      title: "Create Hospital : QueQ Hospital Warroom"
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
      errorMsg: "",
      timer: null
    };
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
            this.errorMsg = "Hospital name is not available";
          }
        } catch (error) {
          console.log(error);
          this.validatingHname = "";
        }
      }, 500);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, value) => {
        console.log("err:", err);
        console.log("value:", value);
        if (!err) {
          window.$nuxt.$root.$loading.start();
          try {
            const data = {
              hospital_name: value.name,
              status: value.status,
              hospital_logo_path: this.logo.hospitalLogo,
              hospital_print_logo_path: this.logo.printLogo,
              hospital_mobile_logo_path: this.logo.mobildLogo
            };
            const res = await hospitalService.createNewHospital(data);
            if (res.data) {
              window.$nuxt.$root.$loading.finish();
              this.$success({
                title: "Success",
                content: "Register hospital successful"
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
        } else {
          if (err.name) {
            this.validatingHname = "error";
            this.errorMsg = "Please input  hospital name !";
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

