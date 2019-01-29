/**
 * 判断是否预设的颜色值
 * @param {String} color 颜色值
 */
const isPresetColor = (color) => {
    if (!color) {
        return false
    }
    return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color))
}

Component({
    externalClasses: ['wux-class', 'wux-hover-class'],
    data: {
        className: '',
        style: '',
    },
    properties: {
        color: {
            type: String,
            value: '',
            observer(newVal) {
                const isPreset = isPresetColor(newVal)
                const className = isPreset ? `wux-tag--${newVal}` : ''
                this.setData({
                    className,
                })
            },
        },
        tagStyle: {
            type: String,
            value: '',
            observer(newVal) {
                if (newVal) {
                    this.setData({
                        style: newVal,
                    })
                }
            },
        }
    },
    methods: {
        onTap() {
            this.triggerEvent('click')
        },
    },
})
