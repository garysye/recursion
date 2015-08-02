// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
	// your code here
	var output = [];

	if (element === undefined) {
		output = output.concat(getElementsByClassName(className, document.body));
	}

	if (typeof element === 'object' && element !== null) {
		if(element.classList !== undefined) {
			for (var i = 0; i < element.classList.length; i++) {
				if (element.classList[i] === className) {
					output.push(element);
					i = element.classList.length;
				}
			}
		}
		if(element.childNodes !== undefined) {
			for (var i = 0; i < element.childNodes.length; i++) {
				var elementsOut = getElementsByClassName(className, element.childNodes[i]);
				if (elementsOut.length > 0) {
					output = output.concat(elementsOut);
				}
			}
		}
	}
	return output;
};