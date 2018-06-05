// pages/audio/audio.js

//创建audio控件
const myaudio = wx.createInnerAudioContext(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

    //音频列表
    audioArr: [
      {
        id: '000',
        src: 'http://mp3.djwma.com/mp3/爆袭全站欢快节奏感觉那是杠杠滴.mp3',
        time: '30s',
        bl: false
      },
      {
        id: '001',
        src: 'http://mp3.djwma.com/mp3/好听的欧美男声 网络流行.mp3',
        time: '50s',
        bl: false
      },
    ]
  },


  //音频播放  
  audioPlay: function (e) {
    var that = this,
      id = e.currentTarget.dataset.id,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr,
      vidSrc = audioArr[key].src;
    myaudio.src = vidSrc;
    myaudio.autoplay = true;

    //切换显示状态
    for (var i = 0; i < audioArr.length; i++) {
      audioArr[i].bl = false;
    }
    audioArr[key].bl = true;

    //开始监听
    myaudio.onPlay(() => {
      that.setData({
        audioArr: audioArr
      })
    })

    //结束监听
    myaudio.onEnded(() => {
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
    })

  },

  // 音频停止
  audioStop: function (e) {
    var that = this,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;
    //切换显示状态
    for (var i = 0; i < audioArr.length; i++) {
      audioArr[i].bl = false;
    }
    audioArr[key].bl = false;

    myaudio.stop();
    //停止监听
    myaudio.onStop(() => {
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
    })
    //结束监听
    myaudio.onEnded(() => {
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
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