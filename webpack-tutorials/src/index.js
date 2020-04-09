// var _ = require('lodash');
import _ from "lodash";

function component() {
	var element = document.createElement("div");
	// lodash is required for the next line to work
	// _.join(array, separator)
	element.innerHTML = _.join(["hello", "webpack"], " ");

	return element;
}

document.body.appendChild(component());
