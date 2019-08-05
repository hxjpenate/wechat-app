// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputV:'13594347817',
    pwdV:'123456'
  },
  handleClickReg(){
     wx.navigateTo({
       url: '/pages/register/register',
     })
  },
  inputValue(e){
    this.data.inputV = e.detail.value
  },
  passWordValue(e){
    this.data.pwdV = e.detail.pwdV
  },
  handleClick(){
    // if (this.data.inputV == '123' && this.data.pwdV == '123456'){
    //   wx.setStorage({
    //     key: 'token',
    //     data: Math.random(),
    //   })
    //   wx.showToast({
    //     title: '登录成功',
    //     icon: 'success',
    //     duration:3000,
    //     mask: true,
    //     success(){
    //       // wx.switchTab({
    //       //   url: '../mine/mine',
    //       // })
    //     }
    //   })
    wx.request({
      url: 'https://www.apiopen.top/login?phone='+this.data.inputV +'&passwd=' + this.data.pwdV + '&key='+'00d91e8e0cca2b76f515926a36db68f5',
      success(res){
        console.log(res,'res')
        if(res.data.code == '202'){
          wx.showToast({
            title: '账号或密码错误',
            icon:'none'
          })
        }else{
            wx.showToast({
            title: '登陆成功',
            success(){
              wx.setStorage({
                key: 'token',
                data: '123',
              })
              wx.switchTab({
                url: '../mine/mine',
              })
            }
        })
        }
      
      }
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