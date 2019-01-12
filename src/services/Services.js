import MockAccountService from "./mock/MockAccountService";

const services = {
  loginService: MockAccountService
};

let ServicePlugin = {};
ServicePlugin.install = function (Vue) {
  Vue.prototype.$services = services;
};

export default ServicePlugin;