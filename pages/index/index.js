//index.js
//获取应用实例
const { $Toast } = require('../../iview/base/index');
const app = getApp();
// const img1 = require('../../images/index/1.png');
// const img2 = require('../../images/index/2.png');
// const img3 = require('../../images/index/3.png'); 
// const img4 = require('../../images/index/4.png');
// const img5 = require('../../images/index/5.png');
// const img6 = require('../../images/index/6.png');
// const img7 = require('../../images/index/7.png');
// const img8 = require('../../images/index/8.png')
Page({
  handleText() {
    $Toast({
      content: '暂未开放'
    });
  },
  data: {
    targetTime: 0,
    targetTime1: 0,
    myFormat: ['时', '分', '秒'],
    myFormat1: ['天', '时', '分', '秒'],
    status: '进行中...',
    clearTimer: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://pic1.win4000.com/wallpaper/c/57a830ab635e9.jpg',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'http://img.mp.itc.cn/upload/20160821/b00542e2078a439b9dd523d969b470b4_th.gif',
 
    ],
    // imgbox:[img1,img2,img3,img4,img5,img6,img7,img8],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    //每日资讯数据
    contNum:10,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleClick(){
    this.setData({
      contNum:20
    }) 
  },
  // 跳转到搜索也米娜
  suo(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  goContDetails() {
    
    wx.navigateTo({
      url: '/pages/contDetails/coneDetails'
    })
  },
  onLoad: function () {
    this.setData({
      targetTime: new Date().getTime() + 6430000,
      targetTime1: new Date().getTime() + 86430000,
      targetTime2: new Date().getTime() + 10000
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onUnload() {
    this.setData({
      clearTimer: true
    });
  },
  myLinsterner(e) {
    this.setData({
      status: '结束'
    });
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
