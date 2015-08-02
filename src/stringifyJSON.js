// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var outputStr = '';
  if (Array.isArray(obj)) {
  	outputStr += '[';
  	for (var i = 0; i < obj.length; i++) {
  		if (typeof obj[i] !== 'function' && typeof obj[i] !== 'undefined') {
	  		outputStr = prepareNext(outputStr);
	  		outputStr += stringifyJSON(obj[i]);
  		}
  	}
  	outputStr += ']';
  	return outputStr;
  }
  if (obj !== null && typeof obj === 'object') {
  	outputStr += '{';
  	for (var key in obj) {
  		if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
	  		outputStr = prepareNext(outputStr);
	  		outputStr += ('"' + key + '":' + stringifyJSON(obj[key]));
	  	}
  	}
  	outputStr += '}';
  	return outputStr;
  }
  if (typeof obj === 'function') {
  	return null;
  }
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  return String(obj);
};

var prepareNext = function(str) {
	var prev  = str[str.length - 1];
	if (prev !== '[' && prev !== '{') {
		str += ',';
	} 
	return str;
}
