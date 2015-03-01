var $ = require('jquery');
var randomColor = require('randomcolor');
var moment = require('moment');

require('jquery-ui');

var hexMode = true;
var d, hours, mins, secs, color;

function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function updateTime() {
	d = new Date();

	if (hexMode){
		hours = d.getHours().toString(16);
		mins = d.getMinutes().toString(16);
		secs = d.getSeconds().toString(16);
		color = '#' + pad(hours, 2) + pad(mins, 2) + pad(secs, 2);
	} else {
		color = randomColor();
	}

	$('body').animate({backgroundColor: color});
	$('.color').html(color);

	$('.time').html(moment(d).format('LTS'));
}


$(document).ready(function(){
  var interval = setInterval(updateTime, 1000);

  $('a.toggle').click(function(){
    hexMode = !hexMode;
  });
});
