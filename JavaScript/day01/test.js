function toggle(self) {
	var target = document.querySelector('body');
	var aList = document.querySelectorAll('a');

	if (self.value === 'night') {
		self.value = 'day';
		target.style.backgroundColor = 'black';
		target.style.color = 'white';
		for (var i = 0; i < aList.length; i++) {
			aList[i].style.color = 'powderblue';
		}
	} else if (self.value === 'day') {
		self.value = 'night';
		target.style.backgroundColor = 'white';
		target.style.color = 'black';
		for (var i = 0; i < aList.length; i++) {
			aList[i].style.color = 'blue';
		}
	}
}