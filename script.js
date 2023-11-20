const parseCode = (str) => {
	let firstZero = str.indexOf("0");
	let lastZero = str.lastIndexOf("0");

	let regex = /\d([A-Z]|[a-z])+/g;
	let matched = str.match(regex);

	let obj = {
	  firstName: str.slice(0, firstZero),
	  lastName: matched.toString().slice(1),
	  id: str.slice(lastZero + 1),
	};

	return obj
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
