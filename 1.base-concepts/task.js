"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  let root1;
  let root2;

  if (discriminant < 0) {
    console.log(arr);
  }

  else if (discriminant == 0) {
    root1 = (- b / (2 * a));
    arr.push(root1);
  }

  else if (discriminant > 0) {
    root1 = (-b + Math.sqrt(d) ) / (2*a);
    root2 = (-b - Math.sqrt(d) ) / (2*a);
    arr.push(root1, root2)
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
