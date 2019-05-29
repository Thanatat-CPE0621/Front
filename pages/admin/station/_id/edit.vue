<template>
  <div>
    <div class="title-page">Station / Edit Station</div>
    <div class="card full">
      <div class="header flex content-header">
        <img src="@/assets/images/admin/arrow-light.png" height="15">
        <div>
          <nuxt-link class="link" to="/admin/station">Station</nuxt-link>
        </div>
        <div>
          <span class="underline link">Edit Station</span>
        </div>
      </div>
      <div class="content flex-center">
        <div class="title">Edit Station</div>
      </div>
      <div class="flex-center">
        <div class="label">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item label="Hosital Name" v-bind="formItemLayout">
              <a-select
                disabled
                v-decorator="[
                'hospital_id',
                {
                  initialValue:getStationIDExist ? getStationIDExist :null,
                  rules: [{ required: true, message: 'Please select hospital !' }]
                }
              ]"
                showSearch
                optionFilterProp="children"
                :filterOption="filterOption"
              >
                <a-select-option
                  v-for="(val,index) in hospitals"
                  :key="index"
                  :value="val.hospital_id"
                >{{val.hospital_name}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="Station Name"
              v-bind="formItemLayout"
              hasFeedback
              :validateStatus="validations.station_name"
              :help="`${validations.station_name==='error'?errorMessages.station_name :``}`"
            >
              <a-input
                v-decorator="['station_name',
                {rules: [{ required: true, message: 'Please input station name !' }]}
              ]"
                @keyup="checkStationName"
              ></a-input>
            </a-form-item>
            <a-form-item
              label="Station Code"
              v-bind="formItemLayout"
              hasFeedback
              :validateStatus="validations.station_code"
              :help="validations.station_code==='error'? errorMessages.station_code : `ตัวอักษรตัวแรกที่แสดงบนใบคิว`"
            >
              <a-input
                :maxlength="10"
                v-decorator="['station_code',
                {
                  rules: [
                    { required: true, message: 'Please input station code !' },
                  ]
                }
              ]"
                @keyup="checkStationCode"
              ></a-input>
            </a-form-item>
            <a-form-item label="Queue Prefix" v-bind="formItemLayout">
              <a-input v-decorator="['queue_prefix']"></a-input>
            </a-form-item>
            <a-form-item label="Status" v-bind="formItemLayout">
              <a-radio-group v-decorator="['status', { initialValue:1 }]">
                <a-radio :value="1">Enable</a-radio>
                <a-radio :value="0">Disable</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="Queue Number Type" v-bind="formItemLayout" help="ลักษณะการออกใบคิว">
              <a-select
                v-decorator="[
                'queue_number_type',
                {rules: [{ required: true, message: 'Please select queue number type !' }]}
              ]"
                placeholder="Choose Number Type"
              >
                <a-select-option v-for="index in 5" :key="index" :value="index">{{index}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Queue Number Index" v-bind="formItemLayout" help="	จำนวนหลักของคิว">
              <a-select
                placeholder="Choose Number Index"
                v-decorator="[
                'queue_number_index',
                {rules: [{ required: true, message: 'Please select queue number index !' }]}
              ]"
              >
                <a-select-option
                  v-for="(val,index) in queueNumberTypes"
                  :key="index"
                  :value="val.queue_number_type"
                >{{val.queue_number_type_name}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="Transfer Room"
              v-bind="formItemLayout"
              help="เปิดให้โยนเข้าไปในห้องตรวจห้องแรกโดยตรง"
            >
              <a-radio-group v-decorator="['tranfer_room', { initialValue:0 }]">
                <a-radio :value="1">True</a-radio>
                <a-radio :value="0">False</a-radio>
              </a-radio-group>
            </a-form-item>
            <div class="flex-center">
              <b class="title-row">Room Statistic Color</b>
            </div>
            <div class="flex-center">
              <div class="ant-form ant-form-inline">
                <a-form-item label="สีเทา" v-bind="formItemLayoutColor">
                  <a-input-number
                    v-decorator="['gray', { initialValue: 0 ,rules: [{ required: true}]}]"
                    :min="0"
                  />
                </a-form-item>
                <a-form-item label="สีเขียว" v-bind="formItemLayoutColor">
                  <a-input-number
                    v-decorator="['green', { initialValue: 0 ,rules: [{ required: true}]}]"
                    :min="0"
                  />
                </a-form-item>
              </div>
            </div>
            <div class="flex-center">
              <div class="ant-form ant-form-inline">
                <a-form-item label="สีส้ม" v-bind="formItemLayoutColor">
                  <a-input-number
                    v-decorator="['yellow', { initialValue: 0 ,rules: [{ required: true}]}]"
                    :min="0"
                  />
                </a-form-item>
                <a-form-item label="สีแดง" v-bind="formItemLayoutColor">
                  <a-input-number
                    v-decorator="['red', { initialValue: 0 ,rules: [{ required: true}]}]"
                    :min="0"
                  />
                </a-form-item>
              </div>
            </div>

            <br>
            <div class="flex-center">
              <a-button type="primary" html-type="submit" size="large" class="submit gap-btn">Save</a-button>
              <a-button
                type="primary"
                size="large"
                class="submit reset gap-btn"
                @click="$router.push('/admin/station')"
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
import { hospitalService, stationService, roomService } from "@/service";

export default {
  name: "stationRegister",
  layout: "admin",
  head() {
    return {
      title: "Create Station : QueQ Hospital Warroom"
    };
  },
  computed: {
    getStationIDExist() {
      return this.$store.state.hospital.hospital_id
        ? this.$store.state.hospital.hospital_id
        : null;
    }
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
      formItemLayoutColor: {
        labelCol: { span: 10 },
        wrapperCol: { span: 12 }
      },
      hospitals: [],
      queueNumberTypes: [],
      validations: {
        station_name: "",
        station_code: ""
      },
      errorMessages: {
        station_name: "",
        station_code: ""
      },
      timer: {
        station_name: null,
        station_code: null
      }
    };
  },
  async mounted() {
    window.$nuxt.$root.$loading.start();
    // getAllHospitalListforReorder
    const resApi = await hospitalService.getAllHospitalListforReorder();
    if (resApi.data) {
      this.hospitals = resApi.data.hospitals;
    } else {
      console.log(error);
    }
    // getQueueNumberTypesList
    const resApi2 = await roomService.getQueueNumberTypesList();
    if (resApi2.data) {
      this.queueNumberTypes = resApi2.data.queueNumberTypes;
    } else {
      console.log(error);
    }

    const sID = this.$route.params.id;
    const resInfo = await stationService.getStationInfo(sID);
    console.log("resInfo:", resInfo);
    if (resInfo.data) {
      const { station } = resInfo.data;
      this.form.setFieldsValue({
        ["hospital_id"]: station.hospital_id,
        ["station_name"]: station.station_name,
        ["station_code"]: station.station_code,
        ["status"]: station.status,
        ["queue_prefix"]: station.queue_prefix,
        ["queue_number_type"]: station.queue_number_type,
        ["queue_number_index"]: station.queue_number_index,
        ["tranfer_room"]: station.station_mode,
        ["gray"]: station.stat_gray,
        ["green"]: station.stat_green,
        ["yellow"]: station.stat_red,
        ["red"]: station.stat_yellow
      });
    }
    Promise.all([resApi, resApi2])
      .then(res => {
        window.$nuxt.$root.$loading.finish();
        // console.log(res);
      })
      .catch(err => {
        window.$nuxt.$root.$loading.finish();
        console.log(err);
      });
  },
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    checkStationName(e) {
      e.preventDefault();
      clearTimeout(this.timer.station_name);
      this.timer.station_name = setTimeout(async () => {
        this.validations.station_name = "validating";
        try {
          const res = await stationService.checkStationName(
            this.form.getFieldValue("station_name"),
            this.form.getFieldValue("hospital_id")
          );
          console.log("res:", res);
          if (res.data.available) {
            this.validations.station_name = "success";
          } else {
            this.validations.station_name = "error";
            this.errorMessages.station_name = "Station name is not available";
          }
        } catch (error) {
          this.validations.station_name = "";
          console.log(error);
        }
      }, 500);
    },
    checkStationCode(e) {
      e.preventDefault();
      clearTimeout(this.timer.station_code);
      this.timer.station_code = setTimeout(async () => {
        this.validations.station_code = "validating";
        try {
          const code = this.form.getFieldValue("station_code");
          const res = await stationService.checkStationCode(code);
          console.log("res:", res);
          if (res.data.available) {
            this.validations.station_code = "success";
          } else {
            this.validations.station_code = "error";
            this.errorMessages.station_code = "Station code is not available";
          }
        } catch (error) {
          this.validations.station_code = "";
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
              hospital_id: value.hospital_id,
              station_name: value.station_name,
              station_code: value.station_code,
              queue_prefix: value.queue_prefix,
              queue_number_type: value.queue_number_type,
              queue_number_index: value.queue_number_index,
              status: value.status,
              station_mode: value.tranfer_room,
              stat_gray: value.gray,
              stat_green: value.green,
              stat_yellow: value.yellow,
              stat_red: value.red
            };
            console.log("data:", data);
            const sID = this.$route.params.id;
            const res = await stationService.editStation(sID, data);
            if (res.data) {
              window.$nuxt.$root.$loading.finish();
              this.$success({
                title: "Success",
                content: "Update station successful"
              });
              this.$router.push("/admin/station");
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
          if (err.station_name) {
            this.validations.station_name = "error";
            this.errorMessages.station_name = "Please input station name";
          }
          if (err.station_code) {
            this.validations.station_code = "error";
            this.errorMessages.station_code = "Please input station code";
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

