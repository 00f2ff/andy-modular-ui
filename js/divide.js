// Bundle vertical divide function
	function divideVertically() {
		console.log('hi')
		var $parent = $(this).parent().parent().parent(); // the bundle
		if ($parent.hasClass('left')) {// check left column
			// turn left column into top-left quadrant
			$parent.removeClass('column')
				.addClass('quadrant')
				.addClass('top')
				.find('.bundle-bar span')
					.text('Top-Left Quadrant');
			// add bottom-left quadrant
			var $bundle = $('#container').append(bundle);
			$bundle.addClass('bottom')
				.addClass('left')
		}
	}