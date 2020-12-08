// pages/picture/picture.js
const request = require('../../common/request/request.js')
const url = require('../../common/request/url.js')
Page({


  /**
   * 页面的初始数据
   */
  data: {
    showView: [],
    Category: [{
      "name1": "上新",
      "name2": "书架",
      "name3": "分类",
      "name4": "年龄",
    }],
    child: [{
        "yuefen": "十二月",
        "name": "小学",
        "name1": "审美力"
      },
      {
        "yuefen": '十一月',
        "name": "幼儿园",
        "name1": "思维力",
        "age": "6~8岁"
      },
      {
        "yuefen": '十月',
        "name": "启蒙",
        "name1": "想象力",
        "age": "3~5岁"
      },
      {
        "yuefen": '九月',
        "name": "英语",
        "name1": "认知力",
        "age": "0~2岁"
      },
      {
        "yuefen": '八月',
        "name": "全部",
        "name1": "社交力"

      },
      {
        "yuefen": '七月',
        "name1": "表达力"

      },
      {
        "yuefen": '六月'

      },
      {
        "yuefen": '五月'
      },
      {
        "yuefen": '四月'
      },
      {
        "yuefen": '三月'
      },
      {
        "yuefen": '二月'
      },
      {
        "yuefen": '一月'
      },
    ],

    showView: true,
    showView1: false,
    showView2: false,
    showView3: false
  },
  onLoad: function (options) {
    var Child;
    request({
      url: url.total,
    }).then((res) => {
      Child=res.data.category;
      Child=Child.slice(0,4);
     
      console.log(Child)
      console.log(res)
      this.setData({
        category: res.data.category,
        Child_r:res.data.category[0].child,
        // Goods: res.data.category.child.goods
      })
      console.log(Child_r)
    })
    // 生命周期函数--监听页面加载
    
    showView: (options.showView == "true" ? true : false);
    showView1: (options.showView1 == "true" ? true : false);
    showView2: (options.showView2 == "true" ? true : false);
    showView3: (options.showView3 == "true" ? true : false);
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  onChangeShowState1: function () {
    var that = this;
    that.setData({
      showView1: (!that.data.showView1)
    })
  },
  onChangeShowState2: function () {
    var that = this;
    that.setData({
      showView2: (!that.data.showView2)
    })
  },
  onChangeShowState3: function () {
    var that = this;
    that.setData({
      showView3: (!that.data.showView3)
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