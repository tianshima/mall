//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        active: 0,
        scrollTop: 0,
        moreLoading: false,
        notice: {
            content: '[1]微信小程序自定义组件[2]微信小程序自定义组件[3]微信小程序自定义组件[4]微信小程序自定义组件'
        },
        noticeRead: false,
        opts: [
            {text: "推荐", value: 0},
            {text: "百货", value: 1},
            {text: "女装", value: 2},
            {text: "食品", value: 3},
            {text: "电器", value: 4},
            {text: "数码", value: 5},
            {text: "母婴", value: 6},
            {text: "鞋包配饰", value: 7},
            {text: "男装", value: 8},
            {text: "内衣", value: 9},
            {text: "水果", value: 10},
            {text: "家装", value: 11},
            {text: "家纺", value: 12},
            {text: "美妆", value: 13},
        ],
        goodsPage: {
            lastPage: false
        },
        goods: [
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
                userGetPoint: '12.3',
                couponAmount: '13',
                hasCoupon: true,
            }
        ],
    },

    readNotice(e){
        this.setData({
            noticeRead: true
        });
    },
    searchClick: function () {
        wx.navigateTo({url: '../goodsSearch/index?enter=home_search'})
    },
    onOptChange(e) {
        wx.showToast({
            title: `切换到标签 ${e.detail.index + 1}`,
            icon: 'none'
        });
    },
    goodsDetail(e) {
        let goodsId = e.currentTarget.dataset.value
        if (!goodsId) return
        wx.navigateTo({
            url: '../goods/index?enter=home_goods_list&goodsId=' + goodsId
        })
    },
    onLoad: function () {

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

})
