function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length &&
		arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	let usersConcreteGender = users.filter(user => user.gender == gender);	
	if (usersConcreteGender.length === 0) {
		return 0;
	}
	return usersConcreteGender.map(users => users.age)
		.reduce((sum, current) => sum + current) / usersConcreteGender.length;
}
