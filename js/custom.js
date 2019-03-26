$(function() {
	
	//animate on scroll
	new WOW().init();
});

// ============Work============//

$(function(){
	$('#work').magnificPopup({
		delegate: 'a', //child items selector, by clicking on it popup will open
		type: 'image',
		gallery : {
			enabled: true
		}
	});
});

// ================Team =============//
$(function(){
	$("#team-members").owlCarousel({
	items: 3,
	autoplay: true,
	smartSpeed: 300,
	loop: true
	});
});