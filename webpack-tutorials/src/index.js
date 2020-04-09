// var _ = require('lodash');
// import _ from "lodash";
import "./../base.css";

// function component() {
// 	var element = document.createElement("div");
// 	// lodash is required for the next line to work
// 	// _.join(array, separator)
// 	element.innerHTML = _.join(["hello", "webpack"], " ");

// 	return element;
// }

// document.body.appendChild(component());

var div = document.querySelector(".container");
div.innerText = "Webpack loaded!!";
