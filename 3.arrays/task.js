function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let count = (users.filter(item => item.gender == gender)).length;
	if (count == 0) {
		return 0;
	}
	let result = (users.filter(item => item.gender == gender).map(users => users.age).reduce((sum, current) => sum + current)) / count;
	return result;
  
}