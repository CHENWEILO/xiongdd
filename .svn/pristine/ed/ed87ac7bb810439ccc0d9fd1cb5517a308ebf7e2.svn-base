// pages/my/my.js
const request = require('../../common/request/request.js')
const url = require('../../common/request/url.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

    bannerSrc: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    about: [
      {
        "name": "消息",
        "icon": "/static/image/msr_my.png"
      },
      {
        "name": "喜欢",
        "icon": "/static/image/love_my.png"
      },
      {
        "name": "签到有礼",
        "icon": "/static/image/liwu_my.png"
      },
      {
        "name": "历史",
        "icon": "/static/image/time_my.png"
      }
    ],

    about2: [
      {
        "name": "官方资格认证",
        "icon": "/static/image/msr_my.png"
      },
      {
        "name": "投诉与建议",
        "icon": "/static/image/love_my.png"
      },
      {
        "name": "联系客服",
        "icon": "/static/image/liwu_my.png"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var bookList;
    request({
        url: url.home,
      }).then((res) => {
        // bookList = res.data.booklist;
        // bookList = bookList.slice(0,4);
        // console.log(bookList)
        console.log(res)
        this.setData({
          bannerSrc:res.data.banners,
        })
      })
    // wx.login({
    //   success: function (res) {
    //     console.log(res)
    //     request({
    //       url: 'http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=wxapp.login_silent&timestamp=1606958535056',
    //       method: 'POST',
    //       data: {
    //         code: res.code
    //       }.then((res) => {
    //         console.log(res)
    //         wx.setStorage({
    //           key: 'token',
    //           data: res.data.data.skey
    //         })
    //       })
    //     })
    //   }
    // })
    // console.log(request({
    //   url: 'http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=shop.get_shopindex&comefrom=wxapp&openid=sns_wa_oXBzJ5S3FygW-VyWhCTA1_D-vHpk&mid=&merchid=&authkey=&timestamp=1606636353535',
    // }).then((res) => {
    //   console.log(res);
    // }))
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

  },
  login: function () {
    wx.login({
      success: function (res) {
        console.log(res)
        request({
          url: 'http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=goods.get_comment_list&id=232&level=all&page=1&comefrom=wxapp&openid=sns_wa_oXBzJ5S3FygW-VyWhCTA1_D-vHpk&mid=&merchid=&authkey=&timestamp=1607239804272',
          method: 'POST',
          
          data: {
            code: res.code,
          }
        }).then((res) => {
            console.log(res)
            wx.setStorage({
              key: 'token',
              data: res.data.data
            })
          })
        
      }
    })
  },
  check:function(){
    wx.checkSession({
      success: (res) => {
        console.log(res);
      },
      fail:(res)=>{
        console.log(res);
      }
    })
  }
})