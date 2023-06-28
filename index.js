
(function() {
  function isIE() {
    return !!window.ActiveXObject || 'ActiveXObject' in window
  }

  if(!isIE()) {
    return
  }

  (function showAlert () {

    var maskDOM = document.createElement('div')
    maskDOM.setAttribute('style','position: fixed;top:0;left: 0;width: 100vw;height: 100vh;background: rgba(0,0,0,.4);z-index:999999')
    maskDOM.id = 'ie-compatibility-alert-mask'
    function closeFn() {
      var mask = document.getElementById('ie-compatibility-alert-mask')
      if(mask) {
        mask.parentNode.removeChild(mask)
      }
    }
    maskDOM.onclick = closeFn
    var contentBodyDOM = document.createElement('div')
    contentBodyDOM.setAttribute('style','background: #FFFFFF;box-shadow: 0 10px 19px 0 rgba(0,0,0,0.05);border-radius: 14px;width:619px;height:395px;position:absolute;left:50%;top:50%;transform: translate(-50%,-50%);padding:59px 35px 0 35px;')
    contentBodyDOM.onclick = function(e) {
      e.stopPropagation()
    }

    var container = document.createElement('div')
    container.setAttribute('style','width:100%;height:100%;position: relative;')
    contentBodyDOM.appendChild(container)

    var closeBtn = document.createElement('div')
    closeBtn.setAttribute('style', 'position: absolute;right:-73px;top:-97px;width: 36px;height: 36px;border-radius: 50%;background: none;cursor: pointer;')
    maskDOM.appendChild(contentBodyDOM)
    var closeIcon = document.createElement('img')
    closeIcon.setAttribute('src','./ie-compatibility-alert/assets/close.png')
    closeIcon.setAttribute('style','width: 36px;height: 36px;')
    closeBtn.appendChild(closeIcon)
    closeBtn.onclick = closeFn
    container.appendChild(closeBtn)

    var bannerImg = document.createElement('img')
    bannerImg.setAttribute('style','width: 143px;height: 139px;')
    bannerImg.setAttribute('src','./ie-compatibility-alert/assets/abnormal.png')
    container.appendChild(bannerImg)

    var title = document.createElement('div')
    title.setAttribute('style','font-size: 28px;color: #333333;text-align: center;position: absolute;top: 0px;width: 381px;left: 211px;')
    title.innerText = 'IE浏览器已停止维护'
    container.appendChild(title)

    var subtitle = document.createElement('div')
    subtitle.setAttribute('style','font-size: 19px;color: #585454;text-align: center;line-height: 38px;position: absolute;top: 57px;width: 381px;left: 211px;')
    subtitle.innerText = '为获得更好地使用体验，强烈建议您更换其他浏览器继续访问'
    container.appendChild(subtitle)

    var line1 = document.createElement('div')
    line1.setAttribute('style','width:140px;height:1px;background-color:#e0e0e0; position: absolute;left:50%;top:183px;transform: translate(-140%,0);')
    container.appendChild(line1)

    var line2 = document.createElement('div')
    line2.setAttribute('style','width:140px;height:1px;background-color:#e0e0e0; position: absolute;left:50%;top:183px;transform: translate(35%,0);')
    container.appendChild(line2)
    var text = document.createElement('div')
    text.innerText = '推荐使用'
    text.setAttribute('style','position: absolute;left:50%;top:173px;font-size:13px;line-height:20px;color:#585454;transform: translate(-50%,0);')
    container.appendChild(text)

    var edge  = document.createElement('a')
    edge.setAttribute('style','background:none;display:block;width:120px;height:82px;position:absolute;box-shadow: none;text-decoration: none;;left:50%;top:233px;transform: translate(45%,0);')
    edge.href = 'https://www.microsoft.com/zh-cn/edge'

    var edgeIcon = document.createElement('img')
    edgeIcon.setAttribute('style','width: 55px;height: 55px;display:block;position:absolute;left:50%; transform: translate(-50%,0);border:0;')
    edgeIcon.setAttribute('src','./ie-compatibility-alert/assets/edge.png')
    edge.appendChild(edgeIcon)

    var edgeText = document.createElement('div')
    edgeText.innerText = 'Microsoft Edge'
    edgeText.setAttribute('style','font-size: 13px;color: #585454;width:120px;text-align:center;position:absolute;left:0;bottom:0 ')
    edge.appendChild(edgeText)
    container.appendChild(edge)

    var chrome  = document.createElement('a')
    chrome.setAttribute('style','background:none;display:block;width:120px;height:82px;position:absolute;box-shadow: none;text-decoration: none;;left:50%;top:233px;transform: translate(-150%,0);')
    chrome.href = 'https://www.google.cn/chrome/index.html'

    var chromeIcon = document.createElement('img')
    chromeIcon.setAttribute('style','width: 55px;height: 55px;display:block;position:absolute;left:50%; transform: translate(-50%,0);border:0;')
    chromeIcon.setAttribute('src','./ie-compatibility-alert/assets/chrome.png')
    chrome.appendChild(chromeIcon)

    var chromeText = document.createElement('div')
    chromeText.innerText = 'Google Chrome'
    chromeText.setAttribute('style','font-size: 13px;color: #585454;width:120px;text-align:center;position:absolute;left:0;bottom:0 ')
    chrome.appendChild(chromeText)
    container.appendChild(chrome)

    maskDOM.appendChild(contentBodyDOM)
    // console.log('body===',window.document.body)
    document.body.appendChild(maskDOM)
  })()
})()
