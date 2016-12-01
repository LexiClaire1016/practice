/*
 * cookie.js
 * setCookie()
 * getCookie()
 * removeCookie()
 */


function setCookie(name,value,exdays){
	var now = new Date();
//	now.setTime(now.getTime()+exdays*24*60*60*1000); 
	now.setDate(now.getDate()+exdays);
	
	document.cookie = name+"="+value+"; "+"Expires"+"="+now+"; "; //设置cookie
}

function getCookie(name){
	//先按照； 拆分document.cookie字符串，用字符串的split（）方法
	var cookieArr = document.cookie.split("; "); //第一次分隔按； name=zhangsan age=23
	for(var i=0;i<cookieArr.length;i++){
		var arr=cookieArr[i].split("=");  //第二次分隔 = 分隔  [name,zhangsan][age, 23]
		if(name==arr[0]){
			return arr[1];
		}
	}
}

function removeCookie(name){
	setCookie(name,"",-1); // 最后一个参数-1，表示过去的一个事件，立刻失效，就表示删除cookie
}


