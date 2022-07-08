const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);


const advancedFilter = arr => arr.filter((number) => number > 0).filter((number) => number % 3 === 0).map((number) => number * 10);

