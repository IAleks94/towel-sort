
// You should implement your task here.

 module.exports = function towelSort (matrix = []) {
  let newArr = [];
  matrix.forEach((element, index) => {
    if (index%2 !== 0) {
      element = element.reverse();
    } 
    newArr = newArr.concat(element);
  });
  return newArr;
};

