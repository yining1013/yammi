// pages/recommenddish/recommenddish.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Dish_List: []
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
    var recdish = [{
      DishID: '1',
      DishName: '三杯鸡',
      DishBigImage:"http://120.79.160.115/test/food.jpg",
      Description: '三杯鸡是江西省地方传统名菜，相传与民族英雄文天祥有关。因烹制时不放汤水，仅用米酒一杯、猪油一杯、酱油一杯，故得名。',
      Like: 1431,
      RawStuff: ['蒜','料酒']
    },
    {
      DishID: '2',
      DishName: '三杯鸡2',
      DishBigImage: "http://120.79.160.115/test/salad.jpg",
      Description: '三杯鸡是江西省地方传统名菜，相传与民族英雄文天祥有关。因烹制时不放汤水，仅用米酒一杯、猪油一杯、酱油一杯，故得名。2',
      Like: 1431,
      RawStuff: ['蒜', '料酒']
    }]
    this.setData({ Dish_List: recdish })
    app.globalData.Dish_List = recdish
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