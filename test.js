for (var index = 1; index <= 5; index++) {
  (function (index) {
    setTimeout(function () {
      console.log("after " + index + " second(s):" + index);
    }, index * 1000);
  })(index);
}

for (var index = 1; index <= 5; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 3000);
}

for (let index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}
