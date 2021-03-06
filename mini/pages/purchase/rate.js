const { request } = require('../../libs/promise')

Page({
  data: {
    comment: '',
  },
  onLoad: function(e) {},
  bindInputChange: function(e) {
    this.setData({ comment: e.detail.value })
  },
  bindSubmit(e) {
    if (this.data.comment) {
      const waitTime = Math.floor(Math.random() * 5000) + 5 * 1000
      wx.showToast({
        title: '正在入链',
        icon: 'loading',
        duration: waitTime,
      })
      // send request
      request({
        path: '/ratings',
        method: 'POST',
        data: this.data,
        success: () => {
          wx.showToast({
            title: '评价成功',
            icon: 'success',
            duration: 3000,
            success: () => {
              setTimeout(() => {
                wx.switchTab({ url: '/pages/index/index' })
              }, 1500)
            },
          })
        },
        timeout: 5000,
      })
    }
  },
})
