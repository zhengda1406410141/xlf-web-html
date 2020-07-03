





	$(function(){
		if($("#xn_n_7_wrap").length > 0){
			var $wrap = $("#xn_n_7_wrap");
			var $ul = $("#xn_n_7_main ul");
			var $li = $ul.children("li");
			var $bg = $("#xn_n_7_slidebg");
			var currClass = "xn_n_7_curr";
			var timeInterval = 200;
			var speed = 500;
			var delayPlay ;
			var focusClass = "xn_n_7_focs";
			var homeClass = "xn_n_7_homeVisi";
			var $left = $("#xn_n_7_slideLeft");
			var $center = $("#xn_n_7_slideCenter");
			var $right = $("#xn_n_7_slideRight");
			var focusLeft,focusIndex;
			$li.each(function(){		
				var _this = $(this);			
				var _thisWidth = _this.outerWidth(true);		
				_this.addClass("xn_n_7_default"+$(this).index());
				_this.prepend("<span class='xn_n_7_bg_"+$(this).attr("id").split("_")[4]+"'></span>");
                _this.prepend("<span class='xn_n_7_bg_"+$(this).attr("id").split("_")[4]+"_1'></span>");
                _this.append( _this.find('a').clone());
                _this.find('a').last().addClass('xn_n_7_aHover');
				if(_this.hasClass(homeClass)){
					_this.addClass(focusClass);
				}
				if(_this.hasClass(focusClass) || _this.hasClass(homeClass)){	
					focusLeft = _this.position().left;		
					focusIndex = _this.index();		
				}
			});
			$li.hover(function(){
				var _this = $(this);			
				var _thisWidth = _this.outerWidth(true);
				_this.addClass(focusClass).siblings().removeClass(focusClass);
                _this.children('span').first().stop().animate({'opacity':'1','filter':'alpha(opacity=100)'},speed);
                _this.children('span').last().stop().animate({'opacity':'0','filter':'alpha(opacity=0)'},speed);
                _this.find('a').not('.xn_n_7_aHover').stop().animate({'opacity':'0','filter':'alpha(opacity=0)'},speed);
                _this.find('a.xn_n_7_aHover').stop().animate({'opacity':'1','filter':'alpha(opacity=100)'},speed);
				$(this).find("span").addClass("xn_n_7_bgHover"+_this.index());			
			},function(){
				$(this).find("span").removeClass("xn_n_7_bgHover"+$(this).index());
				$(this).removeClass(focusClass);
                $(this).children('span').last().stop().animate({'opacity':'1','filter':'alpha(opacity=100)'},speed);
                $(this).children('span').first().stop().animate({'opacity':'0','filter':'alpha(opacity=0)'},speed);
                $(this).find('a').not('.xn_n_7_aHover').stop().animate({'opacity':'1','filter':'alpha(opacity=100)'},speed);
                $(this).find('a.xn_n_7_aHover').stop().animate({'opacity':'0','filter':'alpha(opacity=0)'},speed);
			});
			$wrap.hover(function(){
				setTimeout(function(){
					$bg.css("display","block");
				},timeInterval);
			},function(){				
				setTimeout(function(){
					$li.removeClass(currClass);
				},timeInterval);
				$li.eq(focusIndex).addClass(focusClass);
				$li.each(function(){		
					var _this = $(this);			
					var _thisWidth = _this.outerWidth(true);	
					_this.removeClass(currClass);
					if(_this.hasClass(focusClass) || _this.hasClass(homeClass)){
						$bg.css("display","block");
						$bg.animate({"left":_this.position().left},speed);
						$center.animate({"width":_thisWidth - $left.outerWidth(true) - $right.outerWidth(true)},speed);
					}
				});
				clearTimeout(delayPlay);
			});
		}
	});


$(function(){
    var t_vLi = $("#t_ver").find("li");
        t_vLi.first().addClass("t_0ff_cur");
        t_vLi.eq(0).children("a").text("CN");
        t_vLi.eq(1).children("a").text("EN");
        t_vLi.hover(function(){
            $(this).addClass("t_0ff_hover").siblings().removeClass("t_0ff_hover");
        });
        t_vLi.on('click',function(){
            $(this).addClass('t_0ff_cur').siblings().removeClass('t_0ff_cur');
        });
         $("#t_ver").hover(function(){},function(){
            t_vLi.removeClass('t_0ff_hover');
         });
});



var xn_ba_js_1_autoPlay = true;
var xn_ba_js_1_interval = 4000;
var bannerW = "100%";
var xn_ba_js_1_nextfunc;
var xn_ba_js_1_timer;
$(document).ready(function () {
    if ($("#xn_ba_js_1_banner").length>0) {
        xn_ba_js_1_start();
    };
});
var xn_ba_js_1_start = function () {
    var maxLen = 0;
    var index = 0;
    var prev = -1;
    var imgW, imgH, sizeW, sizeH = 0;
    var running = false;
    maxLen = $(".xn_ba_js_1_element").length;
    imgW = $(".xn_ba_js_1_bigImg").find("img").eq(0).width();
    imgH = $(".xn_ba_js_1_bigImg").find("img").eq(0).height();
    for (var i = 0; i < $(".xn_ba_js_1_element").length; i++) {
        var ele = $(".xn_ba_js_1_element").eq(i).find("img");
        ele.attr("src", ele.attr("data-original"));
    }
    var btnData = "";
    for (var i = 0; i < maxLen; i++) btnData += '<li class="xn_ba_js_1_element_btn">';
    $(".xn_ba_js_1_btn").html(btnData);
    var btn = $(".xn_ba_js_1_btn").find("li").eq(0);
    var btnW = btn.width() + Math.round(btn.css("margin-left").replace(/[a-zA-Z]/g, ""));
    $(".xn_ba_js_1_btn").css("width", maxLen * btnW);
    btn.attr("class", "xn_ba_js_1_element_btn_on");
    $(".xn_ba_js_1_banner").css("visibility", "visible");
    for (var i = 0; i < maxLen; i++) {
        $(".xn_ba_js_1_element").eq(i).attr("id", "ea_ba_no_b_" + i);
        var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
        if (i == index) _opa = 1;
        if (_pos > sizeW) {
            _pos -= maxLen * imgW
        } else if (_pos < -imgW) {
            _pos += maxLen * imgW
        }
        $(".xn_ba_js_1_element").eq(i).css({
            left: _pos,
            opacity: 0
        }).animate({
            opacity: _opa
        }, {
            duration: 400,
            easing: 'linear'
        })
    }
    onResize();
    $(window).resize(onResize);
    function onResize() {
        for (var i = 0; i < maxLen; i++) {
            if (bannerW == "100%") {
                sizeW = $(window).width();
            } else {
                sizeW = parseInt(bannerW);
            }
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos,
                opacity: _opa
            })
        }
    };
    $(".xn_ba_js_1_btn li").each(function (i) {
        $(this).click(function () {
            skipHandler((i));
        });
    });
    timerRepeat();
    function skipHandler(target) {
        if (target == index) return;
        var d = 1;
        var pure = index;
        if (target < pure) d = -1;
        var btn = $(".xn_ba_js_1_btn").find("li");
        btn.eq(pure).attr("class", "xn_ba_js_1_element_btn");
        btn.eq(target).attr("class", "xn_ba_js_1_element_btn_on");
        var len;
        if (d == 1) {
            len = target - pure;
            if (len <= 1) {
                index = target;
                nextPage();
            } else {
                for (var k = pure; k <= target; k++) {
                    index = k;
                    nextPage();
                }
            }
        } else {
            len = index - target;
            if (len <= 1) {
                index = target;
                prevPage();
            } else {
                for (var k = index; k >= target; k--) {
                    index = k;
                    prevPage();
                }
            }
        }
    }
    function timerRepeat() {
        if (!xn_ba_js_1_autoPlay) return;
        xn_ba_js_1_nextfunc = isPause;
        xn_ba_js_1_timer = setInterval(xn_ba_js_1_nextfunc, xn_ba_js_1_interval);
    }
    function isPause() {
        var isRun = true;
        if (typeof parent.runonce != 'undefined') {
            isRun = parent.runonce;
        }
        if (isRun) {
            var cur = index;
            cur++;
            if (cur > maxLen - 1) cur = 0;
            skipHandler(cur);
            return false;
        } else {
            return true;
        }
    }
    function nextPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        _pict = $(".xn_ba_js_1_element");
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            } else if (_pos < -imgW * 2) {
                _pos += maxLen * imgW
            }
            _pict.eq(i).stop().css({
                left: _pos + imgW
            }).animate({
                left: _pos,
                opacity: _opa
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
    function prevPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            if (_pos < -imgW) {
                _pos += maxLen * imgW
            } else if (_pos > sizeW + imgW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos - imgW
            }).animate({
                left: _pos
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuint',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});










$(function(){
    $(".index_cnt_m_about_more a").text("更多");
});


$(function(){
if($("#xn_c_index_271_wrap").length > 0){
    var oWrap=$("#xn_c_index_271_wrap");
    var oMain=$(".xn_c_index_271_main");
    var oTul=$("#xn_c_index_271_tul");
    var oTul_li=oTul.children("li");
    var oTul_li_w=oTul_li.outerWidth(true);
    var oTul_li_l=oTul_li.length;
    var oLbtn=$("#xn_c_index_271_leftBtn");
    var oRbtn=$("#xn_c_index_271_rightBtn");
    var oShade=$(".xn_c_index_271_shade");
    var oCon=$(".xn_c_index_271_btcon");
    var speed=400;
    var _this;
    var inum=7;
    oLbtn.hide();
    oRbtn.hide();
    oShade.css("top",-oShade.height());
    oCon.css("top",oCon.height());
    oMain.css("overflow","hidden");
    function iGetLeft(){
        oWrap.width($(window).width());//外层盒子与浏览器同宽
        var iDeffer=inum*oTul_li_w-$(window).width();
        if (iDeffer>0) {
            iDeffer=iDeffer;
        }else{
            iDeffer=-iDeffer;
        };
        if (oTul_li_l>inum) {
            oTul.css("margin-left",-iDeffer/2);
        };
    }
    iGetLeft();
    $(window).resize(function () {          //当浏览器大小变化时
        iGetLeft();
    });
    oTul.width(oTul_li_l*oTul_li_w).css("position","relative");
    oTul_li.each(function(){
        $(this).attr("keys",$(this).index());
    });
    if (oTul.width()>oWrap.width() && oTul_li_l>inum) {
        oLbtn.show().click(function(){
            oTul.stop().animate({"left":-oTul_li_w},speed,function(){
                $(this).append($(this).children().first());
                $(this).css("left","0px");
            });
        });
        oRbtn.show().click(function(){
            oTul.css("left",-oTul_li_w)
            oTul.prepend(oTul.children().last());
            oTul.stop().animate({"left":0},speed);
        });
    };
    oTul_li.hover(function(){
        _this=$(this);
        _this.children(".xn_c_index_271_shade").stop().animate({"top":0},speed,function(){
            _this.children(".xn_c_index_271_btcon").show().stop().animate({"top":0},speed);
        });        
    },function(){
        _this.children(".xn_c_index_271_btcon").fadeOut(function(){
            $(this).stop().animate({"top":oCon.height()},speed)
        });
        _this.children(".xn_c_index_271_shade").stop().animate({"top":-oShade.height()},speed);
    });
}
}); 


$(function(){
    $(".xn_c_index_252_news2").text("/");
});


$(function(){
    $(".xn_c_index_5_img a").attr("href","/video_complex.aspx?FId=n15:15:1");
    $(".xn_c_index_5_img a").append("<div class='bfan'></div><div class='zzc'></div>");
});
$(function(){
    var wrap_len = $("#xn_c_index_5_wrap");
    if(wrap_len.length > 0){
        var speed = 800;     //下拉速度
        var cli = $(".xn_c_index_5_style1");
        var cimg = ".xn_c_index_5_img";
        var cmore = ".xn_c_index_5_img a .zzc";
        var ctitle = ".xn_c_index_5_img a .bfan";
        var addwh = 40;    //图片宽高均增加40像素
        var lt = 20;       //左,上定位偏移20像素
        var cli_w,cli_h;
        cli.hover(function(){
            cli_w = $(this).outerWidth();
            cli_h = $(this).outerHeight();
            $(this).find(cimg).stop(false,true).animate({"width":cli_w+addwh,"height":cli_h+addwh,"left":-lt,"top":-lt},speed);
            $(this).find(cmore).stop(false,true).animate({"width":cli_w+addwh,"height":cli_h+addwh,"left":"0","top":"0"},speed);
            $(this).find(ctitle).stop(false,true).animate({"bottom":"50%"},speed);
        },function(){
            $(cimg).stop(false,true).animate({"width":cli_w,"height":cli_h,"left":"0px","top":"0px"},speed);
            $(cmore).stop(false,true).animate({"width":"0px","height":"0px","left":"50%","top":"50%"},speed);
            $(ctitle).stop(false,true).animate({"bottom":"-100%"},speed);
        });
    }
});





$(function(){		
	var speed =1000;
	$(window).scroll(function(){
        if ($(window).scrollTop()>200){
            $("#xn_c_7_wrap").fadeIn(speed);
        }else{
            $("#xn_c_7_wrap").fadeOut(speed);
        }
    });	
	$("#xn_c_7_main").click(function(){	
		$("html,body").animate({"scrollTop":0});			
	});		
});




















