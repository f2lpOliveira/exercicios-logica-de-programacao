// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
// Example
// arr = [1, 1, 2, 2, 3]
// There are two each of types '1' and '2', and one sighting of type '3'. Pick the lower of the two types seen twice: type '1'.

function migratoryBird(arr) {
  let types = [];
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      types.push(arr[i]);
    }
  }
  let lowerAmount;
  for (let i = 0; i < types.length; i++) {
    if (types[i] < types[i + 1]) {
      lowerAmount = types[i];
    }
  }
  return lowerAmount;
}

console.log(migratoryBird([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
