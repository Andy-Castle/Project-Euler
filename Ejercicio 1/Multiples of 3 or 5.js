function MultiplesOf3Or5(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  let filter = arr
    .filter((num) => (num % 3 && num % 5) === 0)
    .reduce((total, currentItem) => {
      return total + currentItem;
    });
  console.log(filter);
}

MultiplesOf3Or5(10);
