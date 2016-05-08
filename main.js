
$(document).on('ready',function(){
	
	console.log("jQuery Listo");

	var slideout = new Slideout({
	    'panel': document.getElementById('panel'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'duration' : 200
	});
	 slideout.on('open',function(){
	 	$('#nav-icon').addClass('open');
	 });
	 slideout.on('close',function(){
	 	$('#nav-icon').removeClass('open');
	 });
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		slideout.toggle();
	});

});

