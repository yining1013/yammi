// pages/detail/detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    dish:{},
    like:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   console.log(options)
    this.setData({id:options.id})
    console.log(app.globalData)
    for(let i in app.globalData.recdish){
      if (app.globalData.recdish[i].id==options.id){
        // console.log(item)
        this.setData({ dish: app.globalData.recdish[i]})
      }
    }
  },

  clicklike: function(){
    console.log('click:',this.data.like);
    if(this.data.like==false){
      console.log('true');
      this.setData({like:true});
    }else{
      console.log('false');
      this.setData({like:false});
    }
    
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
  
})