//  Fahrenheit to celcius

document.getElementById("btn").addEventListener("click", convert);

function convert() {
  // input
  let fah = +document.getElementById("input").value;
  //   Proccess
  let math = (((fah - 32) * 5) / 9).toFixed(2);
  //   Output
  document.getElementById("output").innerHTML = math;
}
