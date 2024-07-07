function findGetParameter(parameterName) {
  var result = null,tmp = [];
  console.log(location)
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  if (document.domain !== "global.cctv.com"   && document.domain !== 'big5.cctv.com'  && result !== '0') {
    return '1';
  }
  return result;
}


function goto4asia() {
  let isCN = getArea()

  if (isCN.toLocaleUpperCase() === 'CN') {
    var guowai = findGetParameter("guowai");
    if (guowai === '0') {
      return;
    }
    if (guowai !== '1') {
      if (document.domain === "global.cctv.com") {
        window.location.href="https://tv.cctv.com/cctv4asia/";
      }
    }
  }
}

