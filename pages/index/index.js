//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getItems()
  },
  getItems: function () {
    const that = this
    wx.request({
      url: 'https://xddou.com/api/wechat/items',
      success: function (res) {
        console.log(res.data.length)
        that.setData({
          items: res.data
        })
      }
    })
  }
})
