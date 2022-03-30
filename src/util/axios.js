const Ajax = function (method, address, data, callback, flag) {
  // 创建一个Ajax对象
  let xml = null
  if (XMLHttpRequest) {
    xml = new XMLHttpRequest()
  } else {
    // eslint-disable-next-line no-undef
    xml = new ActiveXObject('Microsoft.XMLHttp')
  }

  // 判断请求方式
  if (method === 'GET') {
    xml.open(method, address + '?' + data, flag)
    xml.send()
  } else if (method === 'POST') {
    xml.open(method, address, flag)
    xml.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xml.send(data)
  }

  // 监听readyState值
  xml.onreadystatechange = function () {
    if (xml.readyState === 4) {
      if (xml.status === 200) {
        callback(xml.responseText)
      }
    }
  }
}

export default Ajax
