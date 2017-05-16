var Util = require('./lib/util.js');
var Image = require('./lib/image.js');
var formartMsg;

var App ={
	init:function(){
		App.restore = App.restoreInitMsg;
		formartMsg = document.querySelector('#main').innerHTML;
		setTimeout(function(){
			App.events();
			App.handleImage();
			App.hoverBg();
		},100);
	},

	events: function () {
		$('body').on('click','.collapser',function(){
			App.doCollapser(this);
		});
		$('#restore').click(function () {
			App.restore();
		});
	},

	/**
	 * 处理图片显示隐藏
	 */
	handleImage: function () {
		var imgUrlObj = $('.imgUrl');
		imgUrlObj.bind('mouseover', function () {
			Image.ready(this);
		});
		imgUrlObj.bind('mouseout', function () {
			Image.hide();
		});
	},

	/**
	 * 关闭显示代码
	 * @param el
     */
	doCollapser:function(el){
		var $el = $(el);
		var text = $el.text().trim(),textObj = $el.next().next();

		if(text==='-'){
			$el.text(' +');
			$('<span>...</span>').insertAfter(textObj);
			textObj.hide();
		}else{
			$el.text(' -');
			textObj.next().remove();
			textObj.show();
		}
	},

	/**
	 * 背景颜色切换
	 */
	hoverBg:function(){
		var obj =$('.J-hover'),timeout,timeoutA,collapser = $('.collapser');
		obj.mouseover(function(){
			clearTimeout(timeout);
			var self = this;
			timeout = setTimeout(function(){
				$(self).addClass('hover');
			},1);
			return false;
		});
		obj.mouseout(function(){
			var self = this;
			timeoutA = setTimeout(function(){
				$(self).removeClass('hover');
			},1);
		});
	},

	/**
	 * 还原为初始状态
	 */
	restoreInitMsg:function(){
		var initMsg = $('#initMsg').text();
		$('#main').text(initMsg);
		this.restore = this.restoreFormatMsg;
	},

	/**
	 * 还原为格式话状态
	 */
	restoreFormatMsg:function(){
		$('#main').html(formartMsg);
		this.restore = this.restoreInitMsg;
		App.hoverBg();
		App.handleImage();
	}
};

App.init();

