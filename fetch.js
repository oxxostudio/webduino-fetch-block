+(function (window, document) {

  'use strict';

  function webFetch(url) {
    return fetch('https://script.google.com/macros/s/AKfycbxB4D95_idSBo_cjG5GY6IkS-uuj5VpK7lrMiuY4R2rlEFDU30/exec', {
      method: 'post',
      body: JSON.stringify({ url: url, type: 'fetch' }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }).then(res => {
      return res.text();
    }).then(text => {
      window.myFetchDataUrl = url;
      window.myFetchData = text;
    });
  };

  function getImage(url, data, subName) {
    let originUrl, hostName, sameUrl, fileName;
    if (url.indexOf('https://') != -1) {
      hostName = url.split('https://')[1].split('/')[0];
      fileName = url.split('/').slice(-1)[0];
      originUrl = 'https://' + hostName;
      sameUrl = url.split(fileName)[0];
    } else {
      hostName = url.split('http://')[1].split('/')[0];
      fileName = url.split('/').slice(-1)[0];
      originUrl = 'http://' + hostName;
      sameUrl = url.split(fileName)[0];
    }
    // 抓取圖片
    if (data.indexOf(subName) != -1) {
      let imgSubName = subName;
      let imgListRaw = data.split(imgSubName);
      let imgList = [];
      for (let i = 0; i < (imgListRaw.length - 1); i++) {
        let imgUrl = imgListRaw[i].split('=').slice(-1)[0].replace('"', '').replace(/\'/, '');
        imgList[i] = imgUrl + imgSubName;
        // 使用根目錄為路徑的圖片
        if (imgUrl.split('/')[0].length == 0) {
          imgList[i] = originUrl + imgUrl + imgSubName;
        }
        // 使用絕對路徑的圖片
        if (imgUrl.indexOf('://') != -1) {
          imgList[i] = imgUrl + imgSubName;
        }
        // 和網頁放在同一層的圖片
        if (imgUrl.split('/')[0].length > 0 && imgUrl.indexOf('..') == -1 && imgUrl.indexOf('http') == -1) {
          imgList[i] = sameUrl + imgUrl + imgSubName;
        }
        // 使用 CSS 背景圖，且根目錄為路徑的圖片
        if (imgUrl.indexOf('url(/') != -1) {
          imgList[i] = originUrl + imgUrl.split('url(')[1] + imgSubName;
        }
        // 使用 CSS 背景圖，且是絕對路徑的圖片
        if (imgUrl.indexOf('url(') != -1 && imgUrl.indexOf('://') != -1) {
          imgList[i] = imgUrl.split('url(')[1] + imgSubName;
        }
      }
      return imgList;
    }
  }


  window.webFetch = webFetch;
  window.getImage = getImage;

}(window, window.document));