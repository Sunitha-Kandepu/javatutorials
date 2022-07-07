function toggle() {
	if (document.querySelector("#toggle").value === "night") {
		document.querySelector("#toggle").value = "day";
		document.querySelector("body").style.backgroundColor = "black";
		document.querySelector("body").style.color = "white";
	} else {
		document.querySelector("#toggle").value = "night";
		document.querySelector("body").style.backgroundColor = "white";
		document.querySelector("body").style.color = "black";
	}
}