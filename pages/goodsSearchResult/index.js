// pages/goodsSearchResult/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputValue:'',
        scrollTop: 0,
        moreLoading: false,
        sortItems: [
            {
                type: 'text',
                label: '综合',
                value: 'all',
                groups: ['001'],
                checked: true
            },
            {
                type: 'sort',
                label: '价格',
                value: 'price',
                groups: ['002'],
            },
            {
                type: 'sort',
                label: '优惠券',
                value: 'coupon',
                groups: ['003'],
            },
            {
                type: 'sort',
                label: '销量',
                value: 'soldCount',
                groups: ['004'],
            },
        ],
        goodsPage: {
            lastPage: false
        },
        goods:[
            {
                id: 11,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                soldCount: '138',
                userGetPoint: '12.3',
                hasCoupon: false,
                oldPrice: '38.3'
            },
            {
                id: 12,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                couponPrice: '38.3',
                soldCount: '138',
                userGetPoint: '12.3',
                couponAmount: '12',
                hasCoupon: true,
            },
            {
                id: 12,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                couponPrice: '38.3',
                soldCount: '138',
                userGetPoint: '12.3',
                couponAmount: '23',
                hasCoupon: true,
            },
            {
                id: 12,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                couponPrice: '38.3',
                soldCount: '138',
                userGetPoint: '12.3',
                couponAmount: '0.5',
                hasCoupon: true,
            },
            {
                id: 12,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                couponPrice: '38.3',
                soldCount: '138',
                userGetPoint: '12.3',
                couponAmount: '34',
                hasCoupon: true,
            },
            {
                id: 12,
                goodsName: '【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                couponPrice: '38.3',
                soldCount: '138',
                userGetPoint: 1230,
                couponAmount: '13',
                hasCoupon: true,
            }
        ],
    },

    goodsDetail(e) {
        let goodsId = e.currentTarget.dataset.value
        if (!goodsId) return
        wx.navigateTo({
            url: '../goods/index?enter=home_goods_list&goodsId=' + goodsId
        })
    },
    changeWord(e){
        this.setData({
            inputValue:e.detail.value
        })
    },
    search(){
        let word = this.data.inputValue
        console.log('word',word)
        if (word) {
            var words=wx.getStorageSync('searchWords') || []
            let index=words.indexOf(word)
            if(index>=0){
                words.splice(index, 1);
            }
            words.unshift(word)
            wx.setStorageSync('searchWords',words)
        }
    },
    clearSearchWord(e) {
        this.setData({inputValue:''})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.word
        })
        this.setData({inputValue:options.word})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (options) {

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

    onPageScroll(event) {
        this.setData({
            scrollTop: event.scrollTop
        });
    },
    onReachBottom() {
        let that = this
        if (!that.data.moreLoading && that.data.goodsPage.lastPage == false) {
            that.setData({
                moreLoading: true
            });
            var array = []
            for (var i = 0; i < 20; i++) {
                array.push({
                    id: 12,
                    goodsName: '【1依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
                    goodsImage: 'https://picsum.photos/750/750/?random&s=1',
                    couponPrice: '38.3',
                    soldCount: '138',
                    userGetPoint: '12.3',
                    couponAmount: '13',
                    hasCoupon: true,
                })
            }
            that.setData({
                goods: that.data.goods.concat(array),
                moreLoading: false,
                goodsPage: {lastPage: true}
            });
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
