// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWords:'',
    searchResArr:[],
    isLoading:false,
    hotArr:[],
    loading:true
  },
  keyWords(e){
    this.setData({
      keyWords: e.detail.value
    })
  },
  enterStoryDetails(e){
    console.log('name', e.currentTarget.dataset.id)
    var name = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/storyDetails/storyDetails?name=' + name,
    })
  },
  search(){
    console.log(this.data.keyWords,'searchValue')
    let that = this
    that.setData({
      isLoading: true
    })
    wx.request({
      url: "https://www.apiopen.top/novelSearchApi?name=" + this.data.keyWords,
      data: "",
      method: "GET",
      dataType: "json",//若设置json则直接返回的是对象，若其他返回貌似是String
      success: function (res) {
        var obj = res;//我们这里打断点来看数据是否获取到了
        //这里执行数据操作，
        console.log(obj,'obj')
        if(obj.data.code == '200'){
          that.setData({
            isLoading:false
          })
        }

        that.setData({
          searchResArr: obj.data.data
        })
      },
      fail: function (e) {

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: "https://www.apiopen.top/novelApi" ,//热门小说
      data: "",
      method: "GET",
      dataType: "json",//若设置json则直接返回的是对象，若其他返回貌似是String
      success: function (res) {
        var obj = res;//我们这里打断点来看数据是否获取到了
        //这里执行数据操作，
        console.log(obj, 'obj')
        if (obj.data.code == '200') {
          that.setData({
            loading: false
          })
        }
        obj.data.data.forEach((item) => {
          item.book_info = item.book_info.substring(0, 500)+'.....'; //要截取字段的字符串
        }) 
        that.setData({
          hotArr: obj.data.data
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