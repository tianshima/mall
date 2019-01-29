'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Component({
    behaviors: [],
    properties: {
        showIcon: {
            type: Boolean,
            value: true // 是否显示 search icon
        },
        iconColor: {
            type: String,
            value: '#bbb' // search icon 的颜色
        },
        phColor: {
            type: String,
            value: '#bbb' // placeholder 的颜色
        },
        bgColor: {
            type: String,
            value: '#f6f6f6' // 搜索栏背景色
        },
        align: {
            type: String,
            value: 'left' // static 模式下，内容居左还是居中center, left
        },
        color: {
            type: String,
            value: '#333' // 输入框字体颜色
        },
        radius: {
            type: [Number, String],
            value: 6 // 圆角弧度
        },
        placeholder: {
            type: String,
            value: '搜索'
        },
        mode: {
            type: String,
            value: 'normal' // normal static
        },
        showClear: {
            type: Boolean,
            value: true
        },
        button: {
            type: String,
            value: '' // 显示按钮
        },
        btnStyle: {
            type: String,
            value: 'color:#333;' // 按钮样式
        },
        value: {
            type: String,
            value: '',
            observer(newVal) {
                this.updated(newVal)
            },
        },
    },
    data: {
        _showClear: false,
        inputValue: ''
    },
    methods: {
        updated(inputValue) {
            if (this.data.inputValue !== inputValue) {
                this.setData({
                    inputValue: inputValue,
                    _showClear: inputValue && this.data.showClear
                })
            }
        },
        onClick: function onClick(e) {
            this.triggerEvent('click', e.detail, {});
        },
        onFocus(e) {
            this.triggerEvent('focus', e.detail)
        },
        onBlur(e) {
            this.triggerEvent('blur', e.detail)
        },
        onChange(e) {
            this.updated(e.detail.value)
            this.triggerEvent('change', e.detail)
        },
        onConfirm: function onConfirm(e) {
            this.triggerEvent('confirm', e.detail)
        },
        onSubmit: function onSubmit(e) {
            var detail = e.detail || {};
            detail.value = this.data.inputValue;
            this.triggerEvent('submit', detail);
        },
        onClear:function onClear() {
            this.updated('')
            this.triggerEvent('clear', {value: ''})
        }
    }
});
