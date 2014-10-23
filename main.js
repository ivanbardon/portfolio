var botones,selec,cajaNombre;

$(document).on('ready',function init(){
	botones = $('nav ul li');
	selec = $('article ul li');

	botones.on('click', function(){
		
		var el=$(this).attr('id');
		$('#nav2').fadeIn(200, function(){
			botones.fadeOut(500,function(){
				if (el=='b1') {
					$('#s1').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b2') {
					$('#s2').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b3') {
					$('#s3').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b4') {
					$('#s4').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b5') {
					$('#s5').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b6') {
					$('#s6').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else if (el=='b7') {
					$('#s7').fadeIn(500,function () {
						$('body,html').stop(true,true).animate({
					    scrollTop: $('#navBar').offset().top
					  })
					})
				}
				else{console.log('Algo falla en la botonera')};
			})
		});
	})
	
	$('.btnRetorno').on('click', function () {
		$('#nav2').fadeOut(500,function(){
			$('article').fadeOut(500, function(){
				botones.fadeIn(500)
			});
			
		})
	})
})

