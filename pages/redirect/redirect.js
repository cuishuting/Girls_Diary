// pages/redirect/redirect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:["/pages/static/tabBar/button1.png", "/pages/static/tabBar/original_head.png"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      console.log('good night');
  },
  //只是把图片上传到了内存
  addImage: function() {
    var that = this;
    wx.chooseImage({
      count:9,
      sizeType:['original', 'compressed'],
      sourceType: ['album','camera'],
      success: function(res) {
        that.setData({
          imageList: that.data.imageList.concat(res.tempFilePaths),
        })
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