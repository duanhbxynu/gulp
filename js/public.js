//document.write("<script language=javascript src='../bin/pccb_bin.js'></script>");
//设置html标签的字体大小
+ function() {
    var winWidth, txt_size;
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    txt_size = winWidth / 375 * 20;
    document.querySelector("html").style.fontSize = Math.ceil(txt_size) + "px";
}()
$(window).resize(function(){
	var winWidth, txt_size;
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    txt_size = winWidth / 375 * 20;
    document.querySelector("html").style.fontSize = Math.ceil(txt_size) + "px";
});
//cookie
 jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


//手机端判断各个平台浏览器及操作系统平台

//});
//页面加载前执行判断浏览器
/*$(window).load(function(){
  checkPlatform();
});*/
//判断是否登录
function cookies(){
	if(userid !=null){

	}else{
		if(/MicroMessenger/i.test(navigator.userAgent)){
			/*微信2.0*/
			/*is_wx();*/
			/*去除微信2.0*/
			$.cookie("returnHref",window.location.href);
			tips("您尚未登录，请先登录！",1,"login.html");
		}else{
			$.cookie("returnHref",window.location.href);
			tips("您尚未登录，请先登录！",1,"login.html");
			//return false;
		}
	}
}


//删除所有cookies
function clearCookie(){
	var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--;)
		document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
	}
}

//删除单个cookie
function deleteCookie(name){
    var date=new Date();
    date.setTime(date.getTime()-10000);
    document.cookie=name+"=v; expires="+date.toGMTString();
}


/*时间戳*/
function timeFormate(time){
	if(time==""){
		return "";
	}
	var date = new Date(time*1000);
	Y = date.getFullYear();
	M = date.getMonth()+1;
	D = date.getDate();
	h = date.getHours();
	m = date.getMinutes()
	s = date.getSeconds();

	M=M>9?M:'0'+M;
	D=D>9?D:'0'+D;
	h=h>9?h:'0'+h;
	m=m>9?m:'0'+m;
	s=s>9?s:'0'+s;

	/*return Y+'-'+M+'-'+D;*/
	return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;

}
/*时间转换时间戳*/
//dateStr格式为“2014-05-08 00:22:11 ”
function unix_time(dateStr)
{
    var newstr = dateStr.replace(/-/g,'/');
    var date =  new Date(newstr);
    var time_str = date.getTime().toString();
    return time_str.substr(0,10);
}


//获取url后的参数
function request(paras)
{
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
    paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
    return "";
    }else{
    return returnValue;
    }
}

function GetDateDiff(datetime)
{
// 可以将2012 - 12 - 12 12 : 12 : 12字符串转为JS中的时期对象,
// 因为默认情况下只把持2000 / 05 / 05这样形式的字符串转为时间对象
var dateBegin = new Date(datetime.replace(/-/g, "/"));
var dateEnd = new Date();
var dateDiff = dateEnd.getTime() - dateBegin.getTime();
// 计算相差的天数
var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算相差的天数
var hourleft = Math.floor(dateDiff / (3600 * 1000)); //计算相差的小时数
var minuteleft = Math.floor(dateDiff / (60 * 1000)); //计算相差的分钟数
var returnstr = "";
if(dayDiff > 5) //前天以前就直接返回时间字符串
{
    return datetime;
}
else if (hourleft>=24)
{
    returnstr += dayDiff+"天前 ";
}
else if (hourleft>=1)
{
    returnstr += hourleft+"小时前 ";
}
else if (minuteleft>=1)
{
    returnstr += minuteleft+"分钟前 ";
}
else
{
    if (Math.floor(dateDiff / 1000)<0)
    {
        returnstr += "1秒前 ";
    }
    else
    {
        returnstr += Math.floor(dateDiff / 1000) +"秒前 ";
    }
}
return returnstr;
}

function getRandom(){
	var num="";
	for(var i=0;i<6;i++){
		num+=Math.floor(Math.random()*10);
	}
	return num;
}
//千分位
//使用规则
/*
 * $.rFormatMoney(el.tradeAmount,2);
 *$.unformatMoney(el.tradeAmount);
 */
(function($)
{
    $.extend({
        /**
         * 数字千分位格式化
         * @public
         * @param mixed mVal 数值
         * @param int iAccuracy 小数位精度(默认为2)
         * @return string
         * //console.log($.formatMoney(1234.345, 2));   //此方法用来  格式千分位金额，以及小数点后两位
         */
        formatMoney:function(mVal, iAccuracy){
            var fTmp = 0;//临时变量
            var iFra = 0;//小数部分
            var iInt = 0;//整数部分
            var aBuf = new Array(); //输出缓存
            var bPositive = true; //保存正负值标记(true:正数)
            /**
             * 输出定长字符串，不够补0
             * <li>闭包函数</li>
             * @param int iVal 值
             * @param int iLen 输出的长度
             */
            function funZero(iVal, iLen){
                var sTmp = iVal.toString();
                var sBuf = new Array();
                for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)
                    sBuf.push('0');
                sBuf.push(sTmp);
                return sBuf.join('');
            };

            if (typeof(iAccuracy) === 'undefined')
                iAccuracy = 2;
            bPositive = (mVal >= 0);//取出正负号
            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点
            //所有内容用正数规则处理
            iInt = parseInt(fTmp); //分离整数部分
            iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //分离小数部分(四舍五入)

			if(iFra==100){
				iInt+=1;
				iFra=00;
			}
			if(iFra<0){
				iInt-=1;
				iFra=00;
			}

            do{
                aBuf.unshift(funZero(iInt % 1000, 3));
            }while((iInt = parseInt(iInt/1000)));
            aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0
			 return ((bPositive)?'':'') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));
            //return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));
        },
        /**
         * 将千分位格式的数字字符串转换为浮点数
         * @public
         * @param string sVal 数值字符串
         * @return float
         */
        unformatMoney:function(sVal){
            var fTmp = parseFloat(sVal.replace(/,/g, ''));
            return (isNaN(fTmp) ? 0 : fTmp);
        },
        rFormatMoney:function(mVals, iAccuracys){ //千分位的方法 在頁面中 $.rFormatMoney(金額,小數點位數)；
			//$.formatMoney(mVals,iAccuracys);
            if($.formatMoney(mVals,iAccuracys).split(".")[1]=="00"){
               // return $.formatMoney(mVals,iAccuracys).split(".")[0];
			   return $.formatMoney(mVals,iAccuracys);
            }else{
                return $.formatMoney(mVals,iAccuracys);
            }
        }
    });
})(jQuery);

//判断对象的属性是否存在
function hasPrototype(object,name){
    return object.hasOwnProperty(name)&&(name in object);
}

//选项卡切换
tabTree(".invitChild .tree ul li",".inviteDetail");
function tabTree(menu,content){
   $(menu).click(function(){
      $(this).addClass("on").siblings().removeClass("on");
      var idx = $(this).index();
      $(content).siblings(content).css("display","none").eq(idx).css("display","block");
   }).first().trigger("click");
}





/*条形进度条*/
function progressBarLine(obj,borderWidth)
{
    obj.each(function(){
        var progress = $(this).data('progress');
        var id       = $(this).attr('id');
        var bar = new ProgressBar.Line('#'+id, {
//			                color: '#FFEA82',
                easing: 'easeInOut',
                duration: 1400,
                svgStyle: null,
                strokeWidth: borderWidth,
                trailWidth: borderWidth,
                text: {
                    value: '',
                    alignToBottom: false
                },
                from: {
                    color: '#FFDCAE'
                },
                to: {
                    color: '#FFDCAE'
                },
                // Set default step function for all animate calls
                step: function(state, bar){
	                bar.path.setAttribute('stroke', state.color);
			        var value = Math.round(bar.value() * 100);
			        if (value === 0) {
			            bar.setText('');
			        } else {
			            bar.setText(value);
			        }

			    }
    	});
        bar.animate(progress); // Number from 0.0 to 1.0
    });
}


/*半圆进度条*/
function progressBarCir(obj)
{
    obj.each(function(){
        var progress = $(this).data('progress');
        var id       = $(this).attr('id');
        var bar = new ProgressBar.SemiCircle('#'+id, {
//			                color: '#FFEA82',
                easing: 'easeInOut',
                duration: 1400,
                svgStyle: null,
                text: {
                    value: '',
                    alignToBottom: false
                },
                from: {
                    color: '#FFD24F'
                },
                to: {
                    color: '#FFD24F'
                },
                // Set default step function for all animate calls
                step: function(state, bar){
	                bar.path.setAttribute('stroke', state.color);
			        var value = Math.round(bar.value() * 100);
			        if (value === 0) {
			            bar.setText('');
			        } else {
			            bar.setText(value);
			        }

			    }
    	});
        bar.animate(progress); // Number from 0.0 to 1.0
    });
}



/*脚部*/
+ function(){
	var str = "";
		str+="<footer class='box'>";
		str+="	<div class='flext'>";
		str+="		<a href='index.html?fp=1' rel='1' target='_parent' >";
		str+="			<dl>";
		str+="				<dt><img src='images/index/icon_nav_1.png' ></dt>";
		str+="				<dd>首页</dd>";
		str+="			</dl>";
		str+="		</a>";
		str+="	 </div>";
		str+="	<div class='flext'>";
		str+="		<a href='investNew.html?fp=2' rel='2'  target='_parent' >";
		str+="			<dl>";
		str+="				<dt><img src='images/index/icon_nav_2.png' /></dt>";
		str+="				<dd>产品</dd>";
		str+="			</dl>";
		str+="		 </a>";
		str+="	</div>";
		str+="	<div class='flext'>";
		str+="		<a href='myCenter.html?fp=3' rel='3' target='_parent'>";
		str+="			<dl>";
		str+="				<dt><img src='images/index/icon_nav_3.png' /></dt>";
		str+="				<dd>我的</dd>";
		str+="			</dl>";
		str+="		 </a>";
		str+="	</div>";
		str+="</footer>";
		$("#footer").append(str);
       var tab = request("fp");
       if(tab!=""){
        $("#footer a[rel="+tab+"]").addClass("active").find("img").attr("src","images/index/icon_nav_"+tab+"_h.png");
       }else{
		$("#footer a[rel=1]").addClass("active").find("img").attr("src","images/index/icon_nav_1_h.png");
	   }
}()

/*悬浮导航传送门*/
+ function(){
	var str = '';
		str+='<a href="index.html"><img src="images/goIndex.png"/></a>';
		str+='<a href="myCenter.html?fp=3"><img src="images/goMycenter.png"/></a>';
		$("#portal").html(str);
}()


/**单选按钮**/
/*$(function(){
	$('.radioArry>div').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

})*/


/**
 * 公共弹窗---
 * 单按钮
 * 双按钮
 * 双按钮后续操作
 *
 * **/
function tips(val,n,url,event){
	//$('head').append("<link rel='stylesheet' href='css/tips.css' />");
	var str = "";
	str+="<div class='tips-bgc'></div>";
	str+="	<div class='publicTip'>";
	str+="		<div class='publicTip-cont'>"+val+"</div>";
	str+="		<div class='publicTip-close'>";
	if(!url){
		url='javascript:void(0)';
	}
	if(n==2){//是否双按钮
		str+="		<a href='javascript:void(0)' class='publicTip-n'>否</a>";
		str+="		<a href="+url+" class='publicTip-y'>是</a>";
	}else if(n==3){//确认取消双按钮
		str+="		<a href='javascript:void(0)' class='publicTip-n'>取消</a>";
		str+="		<a href="+url+" class='publicTip-y true'>确定</a>";
	}else if(n==4){
		str+="		<a href='javascript:void(0)' class='publicTip-n'>取消</a>";
		str+="		<a href='javascript:void(0)' rel="+event+" class='publicTip-y true'>确定</a>";
	}else if(n==5){
		str+="		<a href='javascript:void(0)' class='publicTip-n'>否</a>";
		str+="		<a href='javascript:void(0)' rel="+event+" class='publicTip-y true'>是</a>";
	}else{//单个确认按钮
		str+="		<a href="+url+" class='publicTip-s'>确定</a>";
	}
	str+="		</div>";
	str+="	</div>";
	$('body').append(str);
	$('.publicTip').css('margin-top','-'+$('.publicTip').outerHeight()/40+'rem');
}
$(function(){//双按钮时区分点击确实或取消
	$(document).on('click','.publicTip-close a',function(){
		$('.tips-bgc,.publicTip').remove();
		/*if($(this).hasClass('publicTip-y')){
			returnTrue($(this).attr("rel"));
		}else if($(this).hasClass('publicTip-n')){
			return false;
		}*/
	});
})

//可提交按钮
function btnStatus($input,$btn){
	$input.each(function(){
		if($(this).val()==''){
			$btn.addClass('disabled').attr('disabled',true);
			return false;
		}else{
			$btn.removeClass('disabled').attr('disabled',false);
		}
	})
}


//**6位随机数
function getRandom(){
	var num="";
	for(var i=0;i<6;i++){
		num+=Math.floor(Math.random()*10);
	}
	return num;
}



/**
  * [send description]短信验证码倒计时
  * @param  {[type]} moblie [手机号码]
  * @param  {[type]} obj     [发送验证码按钮]
  * @return {[type]}         [description]
  */
  function sendCodes($obj){
    console.log($obj);
     var rel = $obj.attr("rel");
	 var time = 60;
	 if(rel==0){
     	 var clr = setInterval(function(){
          time--;
          if(time>0){
              $obj.html("重新发送("+time+")").attr("rel",1);
              console.log(time);
          }else{
              $obj.html("重新发送").attr("rel",0);
                  clearInterval(clr);
              }
          }, 1000);
     }
  }

// 快速注册表单验证
  function fastRegister(_obj,_input,_code){
    var register_status=false;//如果手机号码已经注册 次值改为true
    var reg=/^1[3,4,5,7,8]\d{9}$/;
      _obj.on("click",function(e){
          //获取验证码页面的时候函数终止执行
          if(_code)return;
          var bool=reg.test(Number(_input.val()))
          if(!_input.val()){
            $(".nothing").html("请输入手机号").show();
          }else if(!bool){
            $(".nothing").html("请输入正确的手机号!").show();
          }else if (register_status) {
            $(".nothing").html("手机号已经注册，请去登陆！").show();
          }else{
            location.assign("fastRegisterPwd.html");
          }
      })
      $(".err").on("click",function(e){
        _input.val("");
        _obj.addClass("disabled");
      });
      _input.on("input propertychange",function(e){
        if($(this).val().length==0){
          _obj.addClass("disabled");
        }else {
          _obj.removeClass("disabled");
        }
      });
      if(!_input.val()){
        _obj.addClass('disabled');
      };
  };


//动态添加透明遮罩--根目录
//$("html").append('<div id="loading" style="display:block"><div><img src="images/loading.gif" ></div></div>');
//动态添加透明遮罩--二级根目录
$("html").append('<div id="loading" style="display:none"><div><img src="../images/loading.gif" ></div></div>');
