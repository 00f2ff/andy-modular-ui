// // Bundle vertical divide function
// function divideVertically() {
// 	console.log('hi')
// 	var $parent = $(this).parent().parent().parent(); // the bundle
// 	if ($parent.hasClass('left')) { // check left column
// 		// turn left column into top-left quadrant
// 		$parent.removeClass('column')
// 			.addClass('quadrant')
// 			.addClass('top')
// 			.find('.bundle-bar span')
// 				.text('Top-Left Quadrant');
// 		// add bottom-left quadrant
// 		var $bundle = bundle;
// 		$bundle.addClass('bottom')
// 			.addClass('left')
// 			.find('.bundle-bar span')
// 				.text('Bottom-Left Quadrant');
// 		$('#container').append(bundle);
// 	}
// 	else if ($parent.hasClass('right')) { // check right column
// 		// turn right column into top-right quadrant
// 		$parent.removeClass('column')
// 			.addClass('quadrant')
// 			.addClass('top')
// 			.find('.bundle-bar span')
// 				.text('Top-Right Quadrant');
// 		// add bottom-right quadrant
// 		// var $bundle = bundle;
// 		// $bundle.addClass('bottom')
// 		// 	.addClass('right')
// 		// 	.find('.bundle-bar span')
// 		// 		.text('Bottom-Right Quadrant');
// 		var brq = $('<div class="bottom right quadrant bundle">' + bundle);
// 		brq.find('.bundle-bar span')
// 			.text('Bottom-Right Quadrant');
// 		$('#container').append(brq);
// 	}
// }

// var x = '<svg class="x" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">' +
// 		'<polygon points="33.527,5.99 29.285,1.747 17.5,13.532 5.715,1.747 1.472,5.99 13.257,17.774 1.472,29.56 5.715,33.803 17.5,22.018 ' +
// 			'29.285,33.803 33.527,29.56 21.742,17.774 "/>' +
// 		'</svg>'
 
// var bundle = '<div class="bundle-bar">' +
// 				'<span>Bundle Name</span>' +
// 				'<div class="bundle-options">' +
// 					'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="37px" height="37px" viewBox="0 0 37 37" enable-background="new 0 0 37 37" xml:space="preserve">' +
// 					'<path d="M32.773,18.5c0-0.453-0.022-0.902-0.063-1.345l3.583-2.454c-0.248-1.174-0.61-2.306-1.072-3.384l-4.31,' +
// 					'0.119c-0.461-0.811-0.998-1.573-1.604-2.275l1.462-4.109c-0.853-0.78-1.778-1.481-2.768-2.09l-3.39,' +
// 					'2.61c-0.905-0.432-1.862-0.771-2.859-1.006l-1.231-4.182c-0.679-0.076-1.365-0.117-2.063-0.117c-0.426,' +
// 					'0-0.849,0.016-1.268,0.045l-1.205,4.086c-1.115,0.194-2.185,0.517-3.195,0.953L9.349,2.702c-0.926,0.535-1.8' +
// 					',1.15-2.613,1.834l1.429,4.016c-0.83,0.858-1.553,1.82-2.149,2.863l-4.311-0.119c-0.407,0.943-0.735,1.928-0.979' +
// 					',2.946l3.534,2.421c-0.077,0.601-0.117,1.214-0.117,1.836c0,0.624,0.04,1.237,0.117,1.836l-3.534,2.422c0.244,' +
// 					'1.018,0.572,2.004,0.979,2.945l4.311-0.119c0.596,1.045,1.319,2.006,2.149,2.863l-1.429,4.018c0.813,0.684,1.687,' +
// 					'1.299,2.613,1.834l3.442-2.65c1.01,0.436,2.08,0.76,3.195,0.953l1.205,4.086c0.419,0.029,0.842,0.045,1.268,0.045c0.698' +
// 					',0,1.385-0.039,2.063-0.117l1.231-4.182c0.997-0.234,1.954-0.574,2.859-1.006l3.39,2.609c0.989-0.607,1.915-1.309,' +
// 					'2.768-2.09l-1.462-4.107c0.605-0.703,1.143-1.465,1.604-2.275l4.31,0.119c0.462-1.078,0.824-2.211,1.072-3.383l-3.583-2.455C32.751' +
// 					',19.402,32.773,18.954,32.773,18.5 M18.458,28.377c-5.455,0-9.878-4.422-9.878-9.877c0-5.455,4.423-9.877,9.878-9.877s9.878,4.423' +
// 					',9.878,9.877C28.336,23.955,23.913,28.377,18.458,28.377"/>' + 
// 					'</svg>' +
// 					x + 
// 				'</div>' +
// 			'</div>' +
// 			'<div class="bundle-border"></div>' +
// 		'</div>';

// var verticalDivide = $('<svg class="vertical-divide" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">'+
// 					'<g><defs><rect id="SVGID_1_" x="1.399" y="14.493" width="32.056" height="5.999"/></defs>' +
// 						'<clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_"  overflow="visible"/></clipPath>' +
// 						'<line clip-path="url(#SVGID_2_)" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="33.455" y1="17.493" x2="1.399" y2="17.493"/></g>' +
// 					'<g><defs><rect id="SVGID_3_" x="14.372" y="26.688" width="6.111" height="6.111"/></defs>' +
// 						'<clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_"  overflow="visible"/></clipPath>' +
// 						'<rect x="14.372" y="26.688" clip-path="url(#SVGID_4_)" width="6.11" height="6.111"/></g>' +
// 					'<g><defs><rect id="SVGID_5_" x="14.372" y="2.201" width="6.111" height="6.111"/></defs>' +
// 						'<clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_"  overflow="visible"/></clipPath>' +
// 						'<rect x="14.372" y="2.201" clip-path="url(#SVGID_6_)" width="6.11" height="6.111"/></g>' +
// 					'</svg>');

// // add vertical divide click handler
// verticalDivide.click(divideVertically);

// var horizontalDivide = '<svg class="horizontal-divide" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">' +
// 					'<g><defs><rect id="SVGID_1_" x="14.436" y="1.472" width="5.999" height="32.055"/></defs>' +
// 						'<clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_"  overflow="visible"/></clipPath>' +
// 						'<line clip-path="url(#SVGID_2_)" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="17.435" y1="33.527" x2="17.435" y2="1.472"/></g>' +
// 					'<g><defs><rect id="SVGID_3_" x="2.129" y="14.444" width="6.111" height="6.11"/></defs>' +
// 						'<clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_"  overflow="visible"/></clipPath>' +
// 						'<rect x="2.129" y="14.445" clip-path="url(#SVGID_4_)" width="6.111" height="6.11"/></g>' +
// 					'<g><defs><rect id="SVGID_5_" x="26.615" y="14.444" width="6.111" height="6.11"/></defs>' +
// 						'<clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_"  overflow="visible"/></clipPath>' +
// 						'<rect x="26.615" y="14.445" clip-path="url(#SVGID_6_)" width="6.111" height="6.11"/></g>' +
// 					'</svg>';
