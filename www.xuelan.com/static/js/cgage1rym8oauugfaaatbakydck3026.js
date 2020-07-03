





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
   // var nEw_time = $(".xn_c_newsc_6_nstime");
   // var nEw_title = $(".xn_c_newsc_6_nstitle"); 
    $(".xn_c_newsc_6_nsmore a").text(" ");
    $(".xn_c_newsc_6_lb_date2").text("/");
  // nEw_time.after(nEw_time.siblings().nEw_title);
  $(".xn_c_newsc_6_nswbox1 .xn_c_newsc_6_nstime").after($(".xn_c_newsc_6_nswbox1 .xn_c_newsc_6_nstitle"));
  $(".xn_c_newsc_6_nswbox2 .xn_c_newsc_6_nstime").after($(".xn_c_newsc_6_nswbox2 .xn_c_newsc_6_nstitle"));
  $(".xn_c_newsc_6_nswbox3 .xn_c_newsc_6_nstime").after($(".xn_c_newsc_6_nswbox3 .xn_c_newsc_6_nstitle"));
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




















