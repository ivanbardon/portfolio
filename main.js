var botones,selec,cajaNombre;

$(document).on('ready',function init(){
	botones = $('nav ul li');
	selec = $('article ul li');

	botones.on('click', function(){
		
		var el=$(this).attr('id');
		$('#nav2').
		fadeIn(200);
		botones.fadeOut(500,function(){
			if (el=='b1') {
				$('#s1').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
				  animateprogress('#geoProgress',25)
				})
			}
			else if (el=='b2') {
				$('#s2').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
					animateprogress('#calProgress',90)
				})
			}
			else if (el=='b3') {
				$('#s3').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
				  animateprogress('#insProgress',80)
				})
			}
			else if (el=='b4') {
				$('#s4').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
					animateprogress('#banProgress',40)
				})
			}
			else if (el=='b5') {
				$('#s5').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
					animateprogress('#resProgress',100)
				})
			}
			else if (el=='b6') {
				$('#s6').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
					animateprogress('#sigProgress',10)
				})
			}
			else if (el=='b7') {
				$('#s7').fadeIn(500,function () {
					$('body,html').stop(true,true).animate({
				    scrollTop: $('#navBar').offset().top
				  })
					animateprogress('#botProgress',99)
				})
			}
			else{console.log('Algo falla en la botonera')};
		})
	})
	
	$('.btnRetorno').on('click', function () {
		$('#nav2').fadeOut(500,function(){
			$('article').fadeOut(500);
			botones.fadeIn(500)
		})
	})
})

function enlaces(enlace){
		window.location.assign('http://ivanbardon.github.com/'+enlace)
}

function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(enroute, 1 / 60 * 1000)
		}
		
	}
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
			
	if (i<=val) 
		{
			document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
			document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
			i++;
			fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
		}
										
	}

		fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
				
}
