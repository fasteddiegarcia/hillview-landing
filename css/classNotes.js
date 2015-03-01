/*
* loop from 1 to 100
* if loop % 3 print fizz
* if loop % 5 print buzz
* if loop % 3 and 5 print fizzbuzz
*/

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log("fizzbuzz", i);
	} else if (i % 3) {
		console.log("fizz", i);
	} else if (i % 5) {
		console.log("buzz", i);
	}	
  };
}


// fizzbuzz test to know for interview question
function fb() {
	for (var i = 1; i <= 100; i++) {
		var fbstring = "";
		if (i % 3 === 0) {
			fbstring += "fizz";
		}
		if (i % 5 === 0) {
			fbstring += "buzz";
		}
		console.log(fbstring, i);
	};
	console.timeEnd("fb");
}