$(function() {
	/* This code modified from: http://www.html5rocks.com/en/tutorials/dnd/basics/ */
	var dragSrcEl = null;

	function handleDragStart(e) {
		// Target (this) element is the source node.

		dragSrcEl = this;
		this.classList.add('nav-selected');

		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', this.innerHTML);
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
			dragSrcEl.innerHTML = this.innerHTML;
			this.style.backgroundColor = e.dataTransfer.getData('text/html');
		}

		return false;
	}

	function handleDragEnd(e) {
		// this/e.target is the source node.

		// [].forEach.call(cols, function (col) {
		//   col.classList.remove('over');
		// });
		this.style.color = 'blue';
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
		bundle.addEventListener('dragend', handleDragEnd, false);
	});

	/* Handles (this should really just be in a different script) */

	



});




/*
 * I'll be relying on native HTML5 dragging for menu items
 * http://www.html5rocks.com/en/tutorials/dnd/basics/
 */