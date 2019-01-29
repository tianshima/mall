// pages/goods/index.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {
            id: 12,
            goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
            goodsDesc: '依丽美-魔法扫把】不粘毛发浴室卫生间刮发神器【卫生间刮发卫生间刮发神器【卫生间刮发神器【卫生间刮发神器【神器【卫生间刮发神器【卫生间刮发神器【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头不粘毛发浴室卫生间刮水器扫帚扫头发神器【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器【依丽美-魔法扫把】不粘毛发浴室卫生间刮水器扫帚扫头发神器',
            carouselImages: [
                'https://t00img.yangkeduo.com/goods/images/2018-09-18/2ba470fad223a4b0930145535c9965e6.jpeg@500w_1l_50Q.JP2',
                'https://t00img.yangkeduo.com/goods/images/2019-01-22/27a585a236b952f3ac82e648377c6093.jpeg@500w_1l_50Q.JP2',
                'https://t00img.yangkeduo.com/goods/images/2019-01-02/79c73d0a17c23aabade0ecb56e346ec9.jpeg@500w_1l_50Q.JP2'
            ],
            hasCoupon: true,
            oldPrice: '9.9',
            couponPrice: '7.6',
            couponAmount: '540',
            couponLeftCount: 2349,
            validDate: "2019.01.01--2019.12.31",
            soldCount: 100,
            mallName: '佳宇超市',
            mallId:111,
            sameGoods: [
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/1.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/2.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/3.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/4.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/5.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/6.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/7.png',
                    soldPrice: '30.1'
                },
                {
                    id: 12,
                    goodsName: '【前500名9.9元】打底裤女裤外穿学生小脚秋冬季弹力九分韩版811',
                    goodsImage: 'http://zhaozhuanxian.oss-cn-shanghai.aliyuncs.com/henglixiangxiaochengxu/8.png',
                    soldPrice: '30.1'
                },
            ]
        },
    },
    enterMall(e){
        let o=e.currentTarget.dataset
        wx.navigateTo({
            url: '../mallGoodsList/index?enter=goods_detail&mallId=' + o.value+'&mallName='+o.label
        })
    },
    returnHome() {
        wx.switchTab({url: '../home/index'})
    },
    buyGoods(e) {
        wx.navigateToMiniProgram({
            appId: 'wx32540bd863b27570',
        })
    },
    getDetail(e) {
        let goodsId = e.currentTarget.dataset.value
        if (!goodsId) return
        wx.navigateTo({
            url: '../goods/index?enter=goods_detail&goodsId=' + goodsId
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
