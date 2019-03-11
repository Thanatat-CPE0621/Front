import Vue from 'vue';
import VeeValidate , { ValidationProvider }from 'vee-validate';

Vue.use(VeeValidate);

Vue.component('ValidationProvider', ValidationProvider);