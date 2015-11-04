;function solution3(A, F){
	var args = F.split("=>")[0].replace(/[()]/g, '');
	var fun = "return " + F.split("=>")[1];
	var f = new Function(args, fun);

	return A.map(f);
}


console.log( solution3([1, 2, 3], "(a)=>a*2") ); // 2, 4, 6
console.log( solution3([1, 2, 3], "(a)=>a+2") ); // 3, 4, 5
console.log( solution3([1, 2, 3], "()=>1") ); // 1, 1, 1

console.log( solution3([1, 2, 3], "(a, b, c)=>a*a") ); // 1, 4, 9