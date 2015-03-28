$(function() {

	// this doesn't include the line with classes because that is defined in vert/horiz divide
	var bundle = '<div class="bundle-bar">' +
					'<span>Bundle Name</span>' +
					'<div class="bundle-options">' +
					'</div>' +
				'</div>' +
				'<div class="bundle-border"></div>' +
			'</div>';

	var x = '<svg class="x" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">' +
			'<polygon points="33.527,5.99 29.285,1.747 17.5,13.532 5.715,1.747 1.472,5.99 13.257,17.774 1.472,29.56 5.715,33.803 17.5,22.018 ' +
				'29.285,33.803 33.527,29.56 21.742,17.774 "/>' +
			'</svg>';

	var gear = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 37 37" enable-background="new 0 0 37 37" xml:space="preserve">' +
				'<path d="M32.773,18.5c0-0.453-0.022-0.902-0.063-1.345l3.583-2.454c-0.248-1.174-0.61-2.306-1.072-3.384l-4.31,' +
				'0.119c-0.461-0.811-0.998-1.573-1.604-2.275l1.462-4.109c-0.853-0.78-1.778-1.481-2.768-2.09l-3.39,' +
				'2.61c-0.905-0.432-1.862-0.771-2.859-1.006l-1.231-4.182c-0.679-0.076-1.365-0.117-2.063-0.117c-0.426,' +
				'0-0.849,0.016-1.268,0.045l-1.205,4.086c-1.115,0.194-2.185,0.517-3.195,0.953L9.349,2.702c-0.926,0.535-1.8' +
				',1.15-2.613,1.834l1.429,4.016c-0.83,0.858-1.553,1.82-2.149,2.863l-4.311-0.119c-0.407,0.943-0.735,1.928-0.979' +
				',2.946l3.534,2.421c-0.077,0.601-0.117,1.214-0.117,1.836c0,0.624,0.04,1.237,0.117,1.836l-3.534,2.422c0.244,' +
				'1.018,0.572,2.004,0.979,2.945l4.311-0.119c0.596,1.045,1.319,2.006,2.149,2.863l-1.429,4.018c0.813,0.684,1.687,' +
				'1.299,2.613,1.834l3.442-2.65c1.01,0.436,2.08,0.76,3.195,0.953l1.205,4.086c0.419,0.029,0.842,0.045,1.268,0.045c0.698' +
				',0,1.385-0.039,2.063-0.117l1.231-4.182c0.997-0.234,1.954-0.574,2.859-1.006l3.39,2.609c0.989-0.607,1.915-1.309,' +
				'2.768-2.09l-1.462-4.107c0.605-0.703,1.143-1.465,1.604-2.275l4.31,0.119c0.462-1.078,0.824-2.211,1.072-3.383l-3.583-2.455C32.751' +
				',19.402,32.773,18.954,32.773,18.5 M18.458,28.377c-5.455,0-9.878-4.422-9.878-9.877c0-5.455,4.423-9.877,9.878-9.877s9.878,4.423' +
				',9.878,9.877C28.336,23.955,23.913,28.377,18.458,28.377"/>' + 
				'</svg>';

	var vertical_divide = '<svg class="vertical-divide" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">'+
						'<g><defs><rect id="SVGID_1_" x="1.399" y="14.493" width="32.056" height="5.999"/></defs>' +
							'<clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_"  overflow="visible"/></clipPath>' +
							'<line clip-path="url(#SVGID_2_)" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="33.455" y1="17.493" x2="1.399" y2="17.493"/></g>' +
						'<g><defs><rect id="SVGID_3_" x="14.372" y="26.688" width="6.111" height="6.111"/></defs>' +
							'<clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_"  overflow="visible"/></clipPath>' +
							'<rect x="14.372" y="26.688" clip-path="url(#SVGID_4_)" width="6.11" height="6.111"/></g>' +
						'<g><defs><rect id="SVGID_5_" x="14.372" y="2.201" width="6.111" height="6.111"/></defs>' +
							'<clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_"  overflow="visible"/></clipPath>' +
							'<rect x="14.372" y="2.201" clip-path="url(#SVGID_6_)" width="6.11" height="6.111"/></g>' +
						'</svg>';

	var horizontal_divide = '<svg class="horizontal-divide" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 35 35" enable-background="new 0 0 35 35" xml:space="preserve">' +
						'<g><defs><rect id="SVGID_1_" x="14.436" y="1.472" width="5.999" height="32.055"/></defs>' +
							'<clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_"  overflow="visible"/></clipPath>' +
							'<line clip-path="url(#SVGID_2_)" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="17.435" y1="33.527" x2="17.435" y2="1.472"/></g>' +
						'<g><defs><rect id="SVGID_3_" x="2.129" y="14.444" width="6.111" height="6.11"/></defs>' +
							'<clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_"  overflow="visible"/></clipPath>' +
							'<rect x="2.129" y="14.445" clip-path="url(#SVGID_4_)" width="6.111" height="6.11"/></g>' +
						'<g><defs><rect id="SVGID_5_" x="26.615" y="14.444" width="6.111" height="6.11"/></defs>' +
							'<clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_"  overflow="visible"/></clipPath>' +
							'<rect x="26.615" y="14.445" clip-path="url(#SVGID_6_)" width="6.111" height="6.11"/></g>' +
						'</svg>';

	/**
	* Contains the divide logic for turning columns into quadrants.
	* Attached to all new vertical-divide SVG elements.
	*/
	function divideVertically() {
		var $parent = $(this).parent().parent().parent(); // the bundle
		if ($parent.hasClass('left')) { // check left column
			// turn left column into top-left quadrant
			$parent.removeClass('column')
				.addClass('quadrant')
				.addClass('top')
				.find('.bundle-bar span')
					.text('Top-Left Quadrant');
			// remove vertical divide
			$(this).remove(); 
			// add new bundle
			var blq = newBundle(['bottom','left'], 'Bottom-Left Quadrant'); 
			$('#container').append(blq);

		} else if ($parent.hasClass('right')) { // check right column
			// turn right column into top-right quadrant
			$parent.removeClass('column')
				.addClass('quadrant')
				.addClass('top')
				.find('.bundle-bar span')
					.text('Top-Right Quadrant');
			// remove vertical divide
			$(this).remove(); 
			// add new bundle
			var blq = newBundle(['bottom','right'], 'Bottom-Right Quadrant'); 
			$('#container').append(blq);
		}
	}

	/**
	* Contains the divide logic for turning rows into quadrants and whole into columns.
	* Attached to all new horizontal-divide SVG elements.
	*/
	function divideHorizontally() {
		var $parent = $(this).parent().parent().parent(); // the bundle
		if ($parent.hasClass('top')) { // check top row
			// turn top row into top-left quadrant
			$parent.removeClass('row')
				.addClass('quadrant')
				.addClass('left')
				.find('.bundle-bar span')
					.text('Top-Left Quadrant');
			// remove horizontal divide
			$(this).remove(); 
			// add new bundle
			var trq = newBundle(['top','right'], 'Top-Right Quadrant'); 
			$('#container').append(trq);

		} else if ($parent.hasClass('bottom')) { // check bottom row
			// turn bottom row into bottom-left quadrant
			$parent.removeClass('row')
				.addClass('quadrant')
				.addClass('left')
				.find('.bundle-bar span')
					.text('Bottom-Left Quadrant');
			// remove horizontal divide
			$(this).remove(); 
			// add new bundle
			var brq = newBundle(['bottom','right'], 'Bottom-Right Quadrant'); 
			$('#container').append(brq);
		} else if ($parent.hasClass('whole')) { // check whole
			// turn whole into left column
			$parent.removeClass('whole')
				.addClass('column')
				.addClass('left')
				.find('.bundle-options')
					.prepend($(vertical_divide).click(divideVertically)) // add vertical divide + handler
				.parent().parent()
				.find('.bundle-bar span')
					.text('Left Column');
			// remove horizontal divide
			$(this).remove(); 
			// add new bundle
			var rc = newBundle(['bottom','right'], 'Right Column'); 
			// change bundle into a column
			rc.removeClass('quadrant')
				.removeClass('bottom')
				.addClass('column')
				.find('.bundle-options')
					.prepend($(vertical_divide).click(divideVertically));
			$('#container').append(rc);
		}
	}

	/**
	* Contains the close and resize logic for quadrants, rows, columns and whole.
	* Attached to all new and existing X SVG elements.
	*/
	function bundleClose() {
		var $parent = $(this).parent().parent().parent(); // the bundle
		if ($parent.hasClass('quadrant')) { // check if quadrant
			if ($parent.hasClass('left')) { // check if left side
				if ($parent.hasClass('top')) { // check if top-left quadrant
					// delete top-left quadrant
					$parent.remove();
					// turn bottom-left quadrant into column if present
					if ($('.bottom.left').show().length > 0) {
						$('.bottom.left')
							.removeClass('quadrant')
							.removeClass('bottom')
							.addClass('column')
							.find('.bundle-options')
								.prepend($(vertical_divide).click(divideVertically)) // add vertical divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Left Column');
					} else if ($('.top.right').show().length > 0) {
						// turn top-right quadrant into row if present
						$('.top.right')
							.removeClass('quadrant')
							.removeClass('right')
							.addClass('row')
							.find('.bundle-options')
								.prepend($(horizontal_divide).click(divideHorizontally)) // add horizontal divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Top Row');
					}
				} else if ($parent.hasClass('bottom')) { // check if bottom-left quadrant
					// delete bottom-left quadrant
					$parent.remove();
					// turn top-left quadrant into column if present
					if ($('.top.left').show().length > 0) {
						$('.top.left')
							.removeClass('quadrant')
							.removeClass('top')
							.addClass('column')
							.find('.bundle-options')
								.prepend($(vertical_divide).click(divideVertically)) // add vertical divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Left Column');
					} else if ($('.bottom.right').show().length > 0) {
						// turn bottom-right quadrant into row if present
						$('.bottom.right')
							.removeClass('quadrant')
							.removeClass('right')
							.addClass('row')
							.find('.bundle-options')
								.prepend($(horizontal_divide).click(divideHorizontally)) // add horizontal divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Bottom Row');
					}
				}
			} else if ($parent.hasClass('right')) { // check if right side
				if ($parent.hasClass('top')) { // check if top-right quadrant
					// delete top-right quadrant
					$parent.remove();
					// turn bottom-right quadrant into column if present
					if ($('.bottom.right').show().length > 0) {
						$('.bottom.right')
							.removeClass('quadrant')
							.removeClass('bottom')
							.addClass('column')
							.find('.bundle-options')
								.prepend($(vertical_divide).click(divideVertically)) // add vertical divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Right Column');
					} else if ($('.top.left').show().length > 0) {
						// turn top-left quadrant into row if present
						$('.top.left')
							.removeClass('quadrant')
							.removeClass('left')
							.addClass('row')
							.find('.bundle-options')
								.prepend($(horizontal_divide).click(divideHorizontally)) // add horizontal divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Top Row');
					}
				} else if ($parent.hasClass('bottom')) { // check if bottom-right quadrant
					// delete bottom-right quadrant
					$parent.remove();
					// turn top-right quadrant into column if present
					if ($('.top.right').show().length > 0) {
						$('.top.right')
							.removeClass('quadrant')
							.removeClass('top')
							.addClass('column')
							.find('.bundle-options')
								.prepend($(vertical_divide).click(divideVertically)) // add vertical divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Right Column');
					} else if ($('.bottom.left').show().length > 0) {
						// turn bottom-left quadrant into row if present
						$('.bottom.left')
							.removeClass('quadrant')
							.removeClass('left')
							.addClass('row')
							.find('.bundle-options')
								.prepend($(horizontal_divide).click(divideHorizontally)) // add horizontal divide + handler
							.parent().parent()
							.find('.bundle-bar span')
								.text('Bottom Row');
					}
				}
			} 
		} else if ($parent.hasClass('column')) { // check if column
			if ($parent.hasClass('left')) { // check if left column
				// delete left column
				$parent.remove();
				// turn right column into whole (if it is present)
				$('.right.column').show()
					.removeClass('column')
					.removeClass('right')
					.addClass('whole')
					.find('.bundle-bar span')
						.text('Whole')
					.parent().parent()
					.find('.bundle-options .vertical-divide') // replace vertical divide with horizontal divide
						.replaceWith($(horizontal_divide).click(divideHorizontally));
				// turn top-right quadrant into row (if it is present)
				$('.top.right.quadrant').show()
					.removeClass('quadrant')
					.removeClass('right')
					.addClass('row')
					.find('.bundle-options') // add horizontal divide
						.prepend($(horizontal_divide).click(divideHorizontally))
					.parent().parent()
					.find('.bundle-bar span')
						.text('Top Row');
				// turn bottom-right quadrant into row (if it is present)
				$('.bottom.right.quadrant').show()
					.removeClass('quadrant')
					.removeClass('right')
					.addClass('row')
					.find('.bundle-options') // add horizontal divide
						.prepend($(horizontal_divide).click(divideHorizontally))
					.parent().parent()
					.find('.bundle-bar span')
						.text('Bottom Row');
			} else if ($parent.hasClass('right')) { // check if right column
				// delete right column
				$parent.remove();
				// turn left column into whole (if it is present)
				$('.left.column').show()
					.removeClass('column')
					.removeClass('left')
					.addClass('whole')
					.find('.bundle-bar span')
						.text('Whole')
					.parent().parent()
					.find('.bundle-options .vertical-divide') // replace vertical divide with horizontal divide
						.replaceWith($(horizontal_divide).click(divideHorizontally));
				// turn top-left quadrant into row (if it is present)
				$('.top.left.quadrant').show()
					.removeClass('quadrant')
					.removeClass('left')
					.addClass('row')
					.find('.bundle-options') // add horizontal divide
						.prepend($(horizontal_divide).click(divideHorizontally))
					.parent().parent()
					.find('.bundle-bar span')
						.text('Top Row');
				// turn bottom-left quadrant into row (if it is present)
				$('.bottom.left.quadrant').show()
					.removeClass('quadrant')
					.removeClass('left')
					.addClass('row')
					.find('.bundle-options') // add horizontal divide
						.prepend($(horizontal_divide).click(divideHorizontally))
					.parent().parent()
					.find('.bundle-bar span')
						.text('Bottom Row');
			}
		} else if ($parent.hasClass('row')) { // check if row
			if ($parent.hasClass('top')) { // check if top row
				// delete top row
				$parent.remove();
				// turn bottom row into whole.
				/* NOTE: default behavior of removing quadrants and turning one above/below into column means
				there will never be instance of row above/below two quadrants */
				$('.bottom.row')
					.removeClass('row')
					.removeClass('bottom')
					.addClass('whole')
					.find('.bundle-bar span')
						.text('Whole');
			} else if ($parent.hasClass('bottom')) { // check if bottom row
				// delete bottom row
				$parent.remove();
				// turn top row into whole.
				$('.top.row')
					.removeClass('row')
					.removeClass('top')
					.addClass('whole')
					.find('.bundle-bar span')
						.text('Whole');
			}
		} else if ($parent.hasClass('whole')) { // In production, this would just remove its content
			console.log('Pretend there is content here and it changed');
		}
	};

	// New bundle function takes classes and a name defined in divide functions and returns a new bundle with 
	// full functionality
	function newBundle(classes, name) {
		var firstLine = '<div class="quadrant bundle';
		var endLine = '">' + bundle;
		// add classes to bundle firstline string
		classes.forEach(function(c) {
			firstLine = firstLine + ' ' + c;
		});
		var b = $(firstLine + endLine);
		b.find('.bundle-bar span')
			.text(name);
		b.find('.bundle-options')
			.append($(gear))
			.append($(x).click(bundleClose));
		// style does not appear to be an issue for some reason
		return b;
	}

	// add bundle close click handler to existing elements
	$('.x').click(bundleClose);

	


});
