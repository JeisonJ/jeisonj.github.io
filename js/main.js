
/* Funcion de JQuery para determinar el alto de la pantalla
 * y ajustar el background de header
 */
 $(document).ready(
 	function(){
 		$("#slider-bg").css({
 			"height":$(window).height() + "px"});
 		
 	});