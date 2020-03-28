import Vue from 'vue';
import {
  Button, Statistic, Col, Row, Form, Icon, Tabs, Table, Input,
  Modal, Spin, Menu, Popover, LocaleProvider, Card, Carousel, Select,
  Checkbox, Divider, Badge,
  message, notification
} from 'ant-design-vue';

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;

Vue.use(Button);
Vue.use(Statistic);
Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(Modal);
Vue.use(Spin);
Vue.use(Menu);
Vue.use(Popover);
Vue.use(LocaleProvider);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Select);
Vue.use(Badge);
