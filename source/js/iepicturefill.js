"use strict";

(function () {
  //определяем, что браузер - ie11, загружаем picturefill из cdn
  if(/Trident.*rv:/.test(navigator.userAgent)) {
    document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js" onerror="someFunction()"><\/script>');
  }
  //если cdn недоступен, загружаем picturefill локально
  function loadFile(file) {
    let fileRef = document.createElement('script');

    fileRef.setAttribute("type", "text/javascript");
    fileRef.setAttribute("src", file);
    document.getElementsByTagName("head")[0].appendChild(fileRef);
  }

  function someFunction() {
    loadFile('picturefill.min.js');
  }
})();
