// pages/LogIn/LogIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    path:"/pages/static/tabBar/original_head.png",
    localPath:"点击获取当前位置信息"
  },
  gotInfo:function() {
    //写这个就会弹出批准授权得框框
    wx.openSetting({});
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log('success', res);
        that.setData({name:res.userInfo.nickName});
        that.setData({path:res.userInfo.avatarUrl});
      },
      fail:function(res) {
          console.log('fail', res);
      }
    })
  },
  getLocalPath: function() {
    var that = this;
    wx.chooseLocation({
      success:function(res) {
        that.setData({localPath: res.address});
      },
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