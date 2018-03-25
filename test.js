// 名前生成
// http://kazina.com/dummy/

// 日本語正規表現
// https://qiita.com/graminume/items/2ac8dd9c32277fa9da64

(function() {

  var result = [];
  var notResult = [];
  var regJp = /^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf\sA-Za-zＡ-Ｚａ-ｚ0-9０-９□☆★]+$/;

  function getCSV() {
    var req = new XMLHttpRequest();
    req.open("get", "./dummy.csv", true);
    req.send(null);

    req.onload = function(){
      convertCSVtoArray(req.responseText);
    }
  }

  function convertCSVtoArray(str) {
    var tmp = str.split("\n");

    for (var i = 0; i < tmp.length; ++i) {
        var tmpText = tmp[i].split(',');
        if (regJp.test(tmpText)) {
          // OK
          result.push(tmpText);
        } else {
          // NG
          notResult.push(tmpText);
        }
    }

    console.log(result);
    console.log(notResult);
  }

  getCSV();

})();