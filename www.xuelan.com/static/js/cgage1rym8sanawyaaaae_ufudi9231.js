





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












$(function(){
    $("#n_content_left_cnt>ul>ul").append($(".lb_zxly"));
});




$(function(){
if($("#xn_c_products_86_wrap").length > 0){
    var oWrap=$("#xn_c_products_86_wrap");
    var oMain=$(".xn_c_products_86_main");
    var oTul=$("#xn_c_products_86_tul");
    var oTul_li=oTul.children("li");
    var oTul_li_w=oTul_li.outerWidth(true);
    var oTul_li_l=oTul_li.length;
    var oLbtn=$("#xn_c_products_86_leftBtn");
    var oRbtn=$("#xn_c_products_86_rightBtn");
    var oShade=$(".xn_c_products_86_shade");
    var oCon=$(".xn_c_products_86_btcon");
    var speed=400;
    var _this;
    var inum=6;
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
        _this.children(".xn_c_products_86_shade").stop().animate({"top":0},speed,function(){
            _this.children(".xn_c_products_86_btcon").show().stop().animate({"top":0},speed);
        });        
    },function(){
        _this.children(".xn_c_products_86_btcon").fadeOut(function(){
            $(this).stop().animate({"top":oCon.height()},speed)
        });
        _this.children(".xn_c_products_86_shade").stop().animate({"top":-oShade.height()},speed);
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




















