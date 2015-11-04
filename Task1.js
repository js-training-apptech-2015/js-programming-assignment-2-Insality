;function solution1(A){
	var prepared = A.filter(function(x){
		return x > 0;
	}).sort();

	var min = 1;
	for (var i=0; i<prepared.length; i++){
		if (prepared[i] > min ) break;
		min++;
	}
	return min;
}


console.log(solution1([1, 2, 4, 5, -2, 0, -2, 3, 7])); // 6
console.log(solution1([1, 5, 4, 2])); // 3
console.log(solution1([-1, 0, -2])); // 1
;
