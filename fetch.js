function web_fetch(format, url, callback) {
  $.post('https://script.google.com/macros/s/AKfycbxB4D95_idSBo_cjG5GY6IkS-uuj5VpK7lrMiuY4R2rlEFDU30/exec', {
    type: 'fetch',
    format: format,
    url: url
  },
    function (data) {
      callback(data);
    });
}