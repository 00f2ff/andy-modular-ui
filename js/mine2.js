$(function() {
	/* This code modified from: http://www.html5rocks.com/en/tutorials/dnd/basics/ */
	var dragSrcEl = null;

	function handleDragStart(e) {
		// Target (this) element is the source node.

		dragSrcEl = this;
		this.classList.add('nav-selected');

		e.dataTransfer.effectAllowed = 'move';
		var data = this.innerHTML; // so that the actual HTML doesn't move
		// How would I want to store the actual information?
		e.dataTransfer.setData('text/html', data);
	}

	function handleDragOver(e) {
		if (e.preventDefault) {
			e.preventDefault(); // Necessary. Allows us to drop.
		}

		e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

		return false;
	}

	function handleDrop(e) {
	// this/e.target is current target element.

		if (e.stopPropagation) {
			e.stopPropagation(); // Stops some browsers from redirecting.
		}

		// Don't do anything if dropping the same column we're dragging.
		if (dragSrcEl != this) {
			// Set the source bundle's background color to the color we saved
			// dragSrcEl.innerHTML = this.innerHTML;
			this.style.backgroundColor = e.dataTransfer.getData('text/html');
		}

		return false;
	}

	var navBundles = document.querySelectorAll('.nav-bundle');
	[].forEach.call(navBundles, function(navBundle) {
		navBundle.addEventListener('dragstart', handleDragStart, false);
	});
	var bundles = document.querySelectorAll('.bundle');
	[].forEach.call(bundles, function(bundle) {
		// col.addEventListener('dragenter', handleDragEnter, false)
		bundle.addEventListener('dragover', handleDragOver, false);
		// col.addEventListener('dragleave', handleDragLeave, false);
		bundle.addEventListener('drop', handleDrop, false);
		// bundle.addEventListener('dragend', handleDragEnd, false);
	});

	/* Resizing (this should really just be in a different script) */

	/* I'll do this later
	* Helper for resizing bundles
	* parent    parent element of span (a bundle)
	* dir    the direction the bundle will resize to
	*/    
	// function resize(parent, dir) {
	// 	var position;
	// 	if (dir === 'left' || dir === 'right') {
	// 		position = 'left';
	// 	}
	// 	else if (dir === 'up' || dir === 'down') {
	// 		position = 'top';
	// 	}
	// 	if (dir === 'left' || dir === 'top') {
	// 		if (parseInt(parent.css(position),10) > 0) {

	// 		}
	// 	}
	// }

	$('.bundle span').click(function() {
		var c,
			parent;
		c = $(this).attr('class');
		$parent = $(this).parent();
		if (c === 'cancel') {
			$parent.css('background-color','transparent'); // placeholder
			// decide which elements to turn back into quadrants
			if ($parent.hasClass('row')) {
				$parent.removeClass('row')
					.addClass('quadrant');
				if ($parent.hasClass('top-left')) {
					$('.top-right').removeClass('empty')
						.addClass('quadrant')
						.removeClass('top-right')
						.addClass('top-right'); // to put back in correct location
				}
				else if ($parent.hasClass('bottom-left')) {
					$('.bottom-right').removeClass('empty')
						.addClass('quadrant')
						.removeClass('bottom-right')
						.addClass('bottom-right'); // to put back in correct location
				}
				else if ($parent.hasClass('top-right')) {
					$('.top-left').removeClass('empty')
						.addClass('quadrant')
						.removeClass('top-left')
						.addClass('top-left'); // to put back in correct location
				}
				else if ($parent.hasClass('bottom-right')) {
					$('.bottom-left').removeClass('empty')
						.addClass('quadrant')
						.removeClass('bottom-left')
						.addClass('bottom-left'); // to put back in correct location
				}
			}
			else if ($parent.hasClass('column')) {
				$parent.removeClass('column')
					.addClass('quadrant');
				if ($parent.hasClass('top-left')) {
					$('.bottom-left').removeClass('empty')
						.addClass('quadrant')
						.removeClass('bottom-left')
						.addClass('bottom-left'); // to put back in correct location
				}
				else if ($parent.hasClass('bottom-left')) {
					$('.top-left').removeClass('empty')
						.addClass('quadrant')
						.removeClass('top-left')
						.addClass('top-left'); // to put back in correct location
				}
				else if ($parent.hasClass('top-right')) {
					$('.bottom-right').removeClass('empty')
						.addClass('quadrant')
						.removeClass('bottom-right')
						.addClass('bottom-right'); // to put back in correct location
				}
				else if ($parent.hasClass('bottom-right')) {
					$('.top-right').removeClass('empty')
						.addClass('quadrant')
						.removeClass('top-right')
						.addClass('top-right'); // to put back in correct location
				}
			}
			else if ($parent.hasClass('whole')) {
				$parent.removeClass('whole')
					.addClass('quadrant');
				// I should refactor this into a loop or something. maybe a foreach
				// Re-add all classes because locations may be altered
				$('.top-left').removeClass('empty')
					.addClass('quadrant')
					.removeClass('top-left')
					.addClass('top-left');
				$('.bottom-left').removeClass('empty')
					.addClass('quadrant')
					.removeClass('bottom-left')
					.addClass('bottom-left');
				$('.top-right').removeClass('empty')
					.addClass('quadrant')
					.removeClass('top-right')
					.addClass('top-right');
				$('.bottom-right').removeClass('empty')
					.addClass('quadrant')
					.removeClass('bottom-right')
					.addClass('bottom-right');
			}

		}
		else if (c === 'left') {
			// // check if it's a row or whole that's turning into a quadrant
			// if ($parent.hasClass('row')) {
			// 	if ($parent.hasClass('top'))
			// }
			// check if on the right side
			if (parseInt($parent.css('left'),10) > 0) {
				// decide if it becomes a row or a whole
				if ($parent.hasClass('quadrant')) {
					$parent.removeClass('quadrant');
					$parent.addClass('row');
				}
				else if ($parent.hasClass('column')) {
					$parent.removeClass('column');
					$parent.addClass('whole');
					// remove column or quadrant status from all other bundles
					$('.quadrant').removeClass('quadrant').addClass('empty');
					$('.column').removeClass('column').addClass('empty');
				}
				// remove the current left element's quadrant status
				if ($parent.hasClass('top-right')) {
					$('.top-left').removeClass('quadrant');
					$('.top-left').addClass('empty');
				}
				else if ($parent.hasClass('bottom-right')) {
					$('.bottom-left').removeClass('quadrant');
					$('.bottom-left').addClass('empty');
				}
			}
		}
		else if (c === 'right') {
			// check if on the left side
			if (parseInt($parent.css('left'),10) === 0) {
				// decide if it becomes a row or a whole
				if ($parent.hasClass('quadrant')) {
					$parent.removeClass('quadrant');
					$parent.addClass('row');
				}
				else if ($parent.hasClass('column')) {
					$parent.removeClass('column');
					$parent.addClass('whole');
					// remove column or quadrant status from all other bundles
					$('.quadrant').removeClass('quadrant').addClass('empty');
					$('.column').removeClass('column').addClass('empty');
				}
				// remove the current left element's quadrant status
				if ($parent.hasClass('top-left')) {
					$('.top-right').removeClass('quadrant');
					$('.top-right').addClass('empty');
				}
				else if ($parent.hasClass('bottom-left')) {
					$('.bottom-right').removeClass('quadrant');
					$('.bottom-right').addClass('empty');
				}
			}
		}
		else if (c === 'up') {
			// check if on the bottom
			if (parseInt($parent.css('top'),10) > 0) {
				// decide if it becomes a column or a whole
				if ($parent.hasClass('quadrant')) {
					$parent.removeClass('quadrant');
					$parent.addClass('column');
				}
				else if ($parent.hasClass('row')) {
					$parent.removeClass('row');
					$parent.addClass('whole');
					// remove row or quadrant status from all other bundles
					$('.quadrant').removeClass('quadrant').addClass('empty');
					$('.row').removeClass('row').addClass('empty');
				}
				// remove the current top element's quadrant status
				if ($parent.hasClass('bottom-left')) {
					$('.top-left').removeClass('quadrant');
					$('.top-left').addClass('empty');
				}
				else if ($parent.hasClass('bottom-right')) {
					$('.top-right').removeClass('quadrant');
					$('.top-right').addClass('empty');
				}
			}
		}
		else if (c === 'down') {
			// check if on the bottom
			if (parseInt($parent.css('top'),10) === 0) {
				// decide if it becomes a column or a whole
				if ($parent.hasClass('quadrant')) {
					$parent.removeClass('quadrant');
					$parent.addClass('column');
				}
				else if ($parent.hasClass('row')) {
					$parent.removeClass('row');
					$parent.addClass('whole');
					// remove row or quadrant status from all other bundles
					$('.quadrant').removeClass('quadrant').addClass('empty');
					$('.row').removeClass('row').addClass('empty');
				}
				// remove the current top element's quadrant status
				if ($parent.hasClass('top-left')) {
					$('.bottom-left').removeClass('quadrant');
					$('.bottom-left').addClass('empty');
				}
				else if ($parent.hasClass('top-right')) {
					$('.bottom-right').removeClass('quadrant');
					$('.bottom-right').addClass('empty');
				}
			}
		}

	})

// I need to rewrite cancel
// I need to refactor this entire thing

});

/*
 * There are a ton of different cases for changing quadrant classes into different things.
 * MISSING: Recreating quadrants when rows/columns/wholes are sized down in some way.
 * Before I do ^, I should refactor the whole thing
 * Add a diagonal corner to make it the whole thing
 * 
 * Bugs: what happens when I have a quadrant colored, and then whole-size another one, and then cancel that whole one
 * Full-column prevents dragging into another quadrant, and general iffyness
 */


/*
 * I'll be relying on native HTML5 dragging for menu items
 * http://www.html5rocks.com/en/tutorials/dnd/basics/
 *
 * I should transfer a data tag on drop for menu items that lets me deselect the item when cancel is pressed
 */