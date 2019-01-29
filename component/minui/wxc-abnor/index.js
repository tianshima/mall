'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component({
  behaviors: [],
  properties: {
    type: {
      type: String,
      value: '',
      observer: function observer(type) {
        if (type && _config2.default[type]) {
          var image = this.data.image || _config2.default[type].image;
          var title = this.data.title || _config2.default[type].title;
          var button = this.data.button || _config2.default[type].button;
          var tip = this.data.tip || _config2.default[type].tip;
          this.setData({
            image: image,
            title: title,
            button: button,
            tip: tip
          });
        }
      }
    },
    image: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    tip: {
      type: String,
      value: ''
    },
    button: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    emitAbnorTap: function emitAbnorTap(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('abnortap', detail, option);
    }
  }
});
