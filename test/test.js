var unique = require("../uniq.js")

require("tape")("unique", function(t) {

	t.equals(unique([1,1,2,3,5,5,7]).join(), [1,2,3,5,7].join())
	t.equals(unique([1,1,1,2,2,2], function(a,b) { return (a^b)&1 }).join(), [2,1].join())
	  
	t.equals(unique([]).join(), [].join())
	t.equals(unique([1,1,1]).join(), [1].join())
	t.equals(unique([1,1,1,2,1]).join(), [1,2].join())
	t.equals(unique([1,1,2,3,5,5,7]).join(), [1,2,3,5,7].join())

	t.equals(unique([8,1,1,2,3,5,5,7], Array.sort).join(), [1,2,3,5,7,8].join())  
	t.equals(unique([1,1,1,2,2,2], function(a,b) { return (a^b)&1 }).join(), [2,1].join())
	t.equals(unique([1,1,1,2,2,2], function(a,b) { return (a^b)&1 }, true).join(), [1,2].join())
	t.equals(unique([1,1,1,2,2,2], function(a,b) { return (a^b)&1 }, false).join(), [2,1].join())

	t.equals(unique([1,1,2,3,5,5,7], function(a,b){return a!==b;}, true).join(), [1,2,3,5,7].join())
	t.equals(unique([1,1,2,3,5,5,7], Array.sort, false).join(), [1,2,3,5,7].join())
	t.equals(unique([8,1,1,2,3,5,5,7], Array.sort, false).join(), [1,2,3,5,7,8].join())  	

	t.end()
})