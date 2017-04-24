//jquery库:高度可复用的代码
function $(selector){
	this.domArr = document.querySelectorAll(selector);
}

$.prototype.click = function(fun){
	var len = this.domArr.length;
	for(var i = 0;i<len;i++){
		this.domArr[i].addEventListener('click',fun)
	}
}




// $.prototype.addClass = function(str){
// 	var newClassname = "";
// 	if(this.dom.className){
// 		var cname = this.dom.className;
// 		newClassname = cname + " " + str;
// 	}else{
// 		newClassname = str;
// 	}
// 	this.dom.className = newClassname;
// }