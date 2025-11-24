/** @format */

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects

  const result = numberArray.map((e) => {
    return { val: e };
  });

  return result;
}

console.log(transformToObjects([1, 2, 3]));
