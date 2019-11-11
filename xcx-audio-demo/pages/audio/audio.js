// pages/audio/audio.js
const app = getApp();
//创建audio控件
const myaudio = wx.createInnerAudioContext(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgsUrl:'../images/', //图片路径

    //音频列表（音频地址src是临时地址，自行找音频资源测试哦...）
    audioArr: [
      {
        id: '1001',
        src: 'https://m10.music.126.net/20191111122014/249c4b20c7ee733317c0327a78257875/ymusic/0dd9/d28b/e089/fcbab41f4900212553c5b610c617da2a.mp3',
        time: '30s',
        bl: false
      },
      {
        id: '1002',
        src: 'https://m10.music.126.net/20191111122142/6c5964b5bcd10f8fe14a7b7edb8707a2/ymusic/d444/4451/6e2c/665169e0e959fc602f8ed1315de4c13e.mp3',
        time: '50s',
        bl: false
      },
    ]
  },


  //音频播放  
  audioPlay(e) {
    var that = this,
      id = e.currentTarget.dataset.id,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr,
      vidSrc = audioArr[key].src;
    myaudio.src = vidSrc;
    myaudio.autoplay = true;

    audioArr.forEach((v, i, array)=>{
      v.bl = false;
      if (i == key) {
        v.bl = true;
      }
    })
    that.setData({
      audioArr: audioArr
    })

    myaudio.play();

    //开始监听
    myaudio.onPlay(() => {
      console.log('开始播放');
    })

    //结束监听
    myaudio.onEnded(() => {
      console.log('自动播放完毕');
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
    })

  },

  // 音频停止
  audioStop(e){
    var that = this,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;
    audioArr.forEach((v, i, array) => {
      v.bl = false;
    })
    that.setData({
      audioArr: audioArr
    })

    myaudio.stop();

    //停止监听
    myaudio.onStop(() => {
      console.log('停止播放');
    })

    //结束监听
    myaudio.onEnded(() => {
      console.log('自动播放完毕');
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