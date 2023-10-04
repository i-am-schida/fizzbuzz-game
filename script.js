document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("beginGame").addEventListener("click", function() {
    let answer = parseInt(prompt("Enter the number you would like to FizzBuzz to: "));
    let output = document.getElementById("results");
    output.innerHTML = "";

    for (let i = 1; i <= answer; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.innerHTML += "FizzBuzz<br>";
      } else if (i % 3 === 0) {
        output.innerHTML += "Fizz<br>";
      } else if (i % 5 === 0) {
        output.innerHTML += "Buzz<br>";
      } else {
        output.innerHTML += i + "<br>";
      }
    }
  });
});