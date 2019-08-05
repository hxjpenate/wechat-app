// pages/around/around.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicData:[]
  },
  //  获取数据的方法
  audioPlay() {
   
  },
  getMusic(){
    let that = this
    wx.request({
      url: 'https://api.apiopen.top/musicRankingsDetails?type=1',
      success(res){
        console.log(res.data.result,'zhoubianshujuqingqiu')
        that.setData({
          musicData : res.data.result
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMusic()
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