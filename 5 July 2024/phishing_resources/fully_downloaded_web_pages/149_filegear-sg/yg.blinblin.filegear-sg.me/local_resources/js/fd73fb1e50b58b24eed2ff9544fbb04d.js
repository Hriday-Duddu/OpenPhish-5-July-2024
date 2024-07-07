let country_code = ''

function get_cntv_whereis(cntv_whereis){
    var chunwan_areaInfo = eval('(' + cntv_whereis.replace(/(^\s*)|(\s*$)/g, "") + ')');
    country_code = chunwan_areaInfo.country_code;
    //video_player_box();
    setCookie_tvzhibo("country_code",country_code);
}
function setCookie_tvzhibo(name, value) {
    var Days = 0.25;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}

function getArea() {
    return country_code.toLocaleUpperCase()
}

// let areaEl = document.createElement('script')
// areaEl.src = '//ip.apps.cntv.cn/whereis?client=html5'
// document.head.appendChild(areaEl)
