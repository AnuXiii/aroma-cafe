import Toastify from "toastify-js";

export function callAlert(msg, type) {
	Toastify({
		text: msg,
		duration: 3000,
		gravity: "top",
		position: "right",
		className: type,
	}).showToast();
}

// this function to show custom toast with specefic message and alert types we are passing in
