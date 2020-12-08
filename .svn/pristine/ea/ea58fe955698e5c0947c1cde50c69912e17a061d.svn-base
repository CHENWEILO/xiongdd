
const request = (parmas) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: parmas.url,
      data: parmas.data ? parmas.data : {},
      header: parmas.header ? parmas.header : {'content-type':'application/json'},
      method: parmas.method ? parmas.method : 'GET',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
module.exports=request;