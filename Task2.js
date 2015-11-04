;function solution2(S){
	var stack = [];
	var brackets = { "}": "{", "]": "[", ")": "(" };

	for (i in S){
		if (S[i] in brackets){
			var b = stack.pop();
			if (b !== brackets[S[i]]){
				return false;
			}
		} else {
			stack.push(S[i]);
		}
	}

	if (stack.length === 0) { 
		return true; 
	}
	return false;
}

console.log(solution2("")); //true
console.log(solution2("[]")); //true
console.log(solution2("[()]")); //true
console.log(solution2("[](){}")); //true
console.log(solution2("][")); //false
console.log(solution2("[)])")); //false