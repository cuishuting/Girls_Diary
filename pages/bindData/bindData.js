// pages/bindData/bindData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:"彼岸花",
      name:"",
      path:"/pages/static/tabBar/original_head.png",
      dataList:["菠萝包","寿司","羊蝎子","烤肉"],
      bossInfo:{
        name: "崔淑婷",
        age:18
      }
  },
  changeData:function() {
    console.log(this.data.message);
    // this.data.message = "大大的彼岸花" 是一种错误的写法，这样写的话只修改了后端，不会渲染到前端
    //下面才能同时修改后端+前端
    this.setData({message : "大大的彼岸花"});
  },
  getInfo:function() {
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