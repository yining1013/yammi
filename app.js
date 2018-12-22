//app.js
App({
  onLaunch: function (ops) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              js_code: res.code,
              appid: 'wxeb3ca6ec32ed2bce',
              secret: '1a7d3b6794d16b9f6e318b97efc3acf1',
              grant_type: 'authorization_code'
            },
            success(res) {
              console.log(res)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    if(ops.scene==1044){
      var shareTickets = ops.shareTicket
      wx.getShareInfo({
        shareTicket: shareTickets,
        success: function (res) {
          console.log(res)
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})