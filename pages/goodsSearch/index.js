import { $wuxDialog } from '../../component/wux/index'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue:'',
        historyWords: [],
        hotWords:[
            '水果提货券','牛奶','辣片','卫生纸','口红','水果','手机壳','口红 唇膏','榨汁机',
            '牛奶','辣片','卫生纸','口红','水果','手机壳','口红 唇膏','榨汁机',
            '牛奶','辣片','卫生纸','口红','水果','手机壳','口红 唇膏','榨汁机','榨汁机'
        ]
    },
    chooseWord(e){
        let value=e.currentTarget.dataset.value
        this.setData({
            inputValue:value
        })
        this.search()
    },
    changeWord(e){
        this.setData({
            inputValue:e.detail.value
        })
    },
    search() {
        let word = this.data.inputValue
        if (word) {
            var words=[...this.data.historyWords]
            let index=words.indexOf(word)
            if(index>=0){
                words.splice(index, 1);
            }
            words.unshift(word)
            this.setData({
                historyWords: words
            })
            wx.setStorageSync('searchWords',words)
            wx.navigateTo({
                url: '../goodsSearchResult/index?enter=goods_search&word=' + this.data.inputValue
            })
        }
    },
    clearSearchWord(e) {
        this.setData({inputValue:''})
    },
    clearSearchHistory() {
        let that=this
        $wuxDialog("#wux-dialog").confirm({
            resetOnClose: true,
            closable: true,
            title: '清除确认',
            content: '清除后无法恢复哦',
            onConfirm() {
                that.setData({
                    historyWords: []
                })
                wx.setStorageSync('searchWords',[])
            },
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            historyWords: wx.getStorageSync('searchWords') || []
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
