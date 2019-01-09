import {MockLoginService} from "./mock/MockLoginService";

const services = {
  loginService: MockLoginService
};

let ServicePlugin = {};
ServicePlugin.install = function (Vue, options) {
  Vue.prototype.$services = services;
};

export default ServicePlugin;