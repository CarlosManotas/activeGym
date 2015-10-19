$(function(){
	var cabecera = $(".cabecera");
	var iMg = cabecera.find("img");
	var textH2 = cabecera.find("h2");
	var preloader = $(".precarga");
	var $body = $("body");
	var viewPort = $(window).width();
	var main = $("#main").find("img");
	$(window).load(function() {
	    preloader.css({display:"none"});
	    $body.css({overflowY:"auto"});
	});
	$(window).on("scroll", function(){
		var pantalla = $(window).scrollTop();
		cabecera.css({ opacity:".95"});
		if (pantalla === 0){
			cabecera.css({ opacity:"1"});
			iMg.css({height:"30px"});
			textH2.css({fontSize:"1.6em"});

		} else{
			cabecera.css({opacity:".95"}); 
			iMg.css({height:"25px"});
			textH2.css({fontSize:"1.4em"});
		}	
	})
	if (viewPort < 480) {
		textH2.removeClass("icon-telefono");
		main.removeAttr("src");
		main.attr("src","img/logovertical.svg");
	}


	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};


	if (isMobile.any()) {
		$(".btn-llamar").append('<a href="tel:+541137231986"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
	}
	
	
});
