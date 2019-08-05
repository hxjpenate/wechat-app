// pages/storyDetails/storyDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsObj:{},
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let name = options.name
    console.log(options,'options')
    let that = this
    wx.request({
      url: "https://www.apiopen.top/novelInfoApi?name="+name,
      data: "",
      method: "post",
      dataType: "json",//若设置json则直接返回的是对象，若其他返回貌似是String
      success: function (res) {
        var obj = res;//我们这里打断点来看数据是否获取到了
        //这里执行数据操作，
        console.log(obj, '像爱情obj')
        if (obj.data.code == '200') {
          that.setData({
            isLoading: false
          })
        }

        that.setData({
          detailsObj: obj.data.data
        })
      },
      fail: function (e) {

      }
    })
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