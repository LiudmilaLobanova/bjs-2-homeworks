"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discr = b**2 - 4*a*c;
	if (discr > 0) {
		arr[0] = (-b + Math.sqrt(discr)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discr)) / (2 * a);
	} else if (discr == 0) {
		arr[0] = -b / (2 * a);
	}
	return arr;
}

console.log(solveEquation(1, 2, -3))


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = (percent * 0.01) / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (interestRate +
		(interestRate / (((1 + interestRate) ** countMonths) - 1)));
	let totalPayment = +(monthlyPayment * countMonths).toFixed(2);

	return totalPayment;
}