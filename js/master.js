(() => {
// what do we want to do with
// 
// this is a 1 to 1 connection (selects one element)
	var iconset = document.querySelector('#iconset');

// yjos os pme to many selections ( get a collection of elements)
// 
	var allTheBadges = document.querySelectorAll('.isabadge');

// what wdo we want it to do
	function logMyId() {
			// log some stuff to the dev tools
		console.log(this.id);
		//debugger;
		}

// how do we want to do that?
// 1 to 1 event handling
	iconset.addEventListener("click", logMyId);

	allTheBadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyId));
})();