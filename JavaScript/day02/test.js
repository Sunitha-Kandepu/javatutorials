function toggle(self) {
	var body = {
		target		: document.querySelector("body"),
		setColor	:		function (color) {
							target.style.color = color;
						},
		setBackColor:	function setBackColor(color) {
							target.style.backgroundColor = color;
						}
	}

	var list = {
		aList	: document.querySelectorAll("a"),
		setListColor:	function setListColor(color) {
							for (var index = 0; index < aList.length; index++) {
								aList[index].style.color = color;
							}
							// for (var key in aList) { 객체의 특성 문제인듯
							// 	aList[key].style.color = color;
							// }
						}

	}

	if (self.value === "night") {
		body.setColor("white");
		body.setBackColor("black");
		list.setListColor("powderblue");
		self.value = "day";
	} else {
		body.setColor("black");
		body.setBackColor("white");
		list.setListColor("blue");
		self.value = "night";
	}
}