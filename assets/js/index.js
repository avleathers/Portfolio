// Parallax Responsive Background Image
/* resize the image(s) on page load */
$(document).ready(function() {
	resize_all_parallax();
});

/* resize the image(s) on page resize */
$(window).on('resize', function(){
	resize_all_parallax();
});

/* keep all of your resize function calls in one place so you don't have to edit them twice (on page load and resize) */
function resize_all_parallax() {
	var div_id = 'bgimg-1'; /* the ID of the div that you're resizing */
	var img_w = 1000; /* the width of your image, in pixels */
	var img_h = 864; /* the height of your image, in pixels */
	resize_parallax(div_id,img_w,img_h);
}

/* this resizes the parallax image down to an appropriate size for the viewport */
function resize_parallax(img_w,img_h) {
	var div = $('#' + bgimg-1);
	var divwidth = div.width();
	if (divwidth < 769) { var pct = (img_h/img_w) * 105; } /* show full image, plus a little padding, if on static mobile view */
	else { var pct = 60; } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
	var newheight = Math.round(divwidth * (pct/100));
	newheight = newheight  + 'px';
	div.height(newheight);
}