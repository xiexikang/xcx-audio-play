// pages/audio/audio.js
const app = getApp();
//创建audio控件
const myaudio = wx.createInnerAudioContext(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgsUrl:'../images', //图片路径

    //音频列表（音频地址src是临时地址，自行找音频资源测试哦...）
    audioArr: [
      {
        id: '1001',
        src: 'https://m10.music.126.net/20191120180520/bc6a73f966b47b8ac6995d60ff8fa2d9/ymusic/0dd9/d28b/e089/fcbab41f4900212553c5b610c617da2a.mp3',
        time: '30s',
        bl: false
      },
      {
        id: '1002',
        src: 'https://m10.music.126.net/20191120180558/848d69bdaef62ca6a27d69a93445ac63/ymusic/525e/510b/020e/e47dd55bdcfaddfef0475d64d4829b08.mp3',
        time: '50s',
        bl: false
      },
    ],

    audKey:'',  //当前选中的音频key
  },

  //音频播放  
  audioPlay(e) {
    var that = this,
      id = e.currentTarget.dataset.id,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;
  
    //设置状态
    audioArr.forEach((v, i, array) => {
      v.bl = false;
      if (i == key) {
        v.bl = true;
      }
    })
    that.setData({
      audioArr: audioArr,
      audKey: key,
    })

    myaudio.autoplay = true;
    var audKey = that.data.audKey,
        vidSrc = audioArr[audKey].src;
    myaudio.src = vidSrc;
    
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

    //错误回调
    myaudio.onError((err) => {
      console.log(err); 
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
      return
    })

  },

  // 音频停止
  audioStop(e){
    var that = this,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;
    //设置状态
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