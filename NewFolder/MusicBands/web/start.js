/**
 * Do not edit this file manualy, it will be overwritten by Platypus Application Designer.
 */
if (!platypus) {
	var platypus = {};
}
platypus.ready = function() {
	require(['gTours.js'], function(){
		var f = new gTours.js();
		f.show();
	});
};
