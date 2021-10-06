function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
  }
};
