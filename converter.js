const from = document.querySelector(".fromCol");
const to = document.querySelector(".toCol");
const output = document.querySelector(".outputtext");
const convert = document.querySelector(".btn-convert");
const input = document.querySelector(".inputarea");

const dectoOther = function (n) {
  let x = Number(input.value);
  output.textContent = x.toString(n);
};
const othertodec = function (m) {
  let x = input.value;
  output.textContent = parseInt(x, m);
};
const otherConversion = function (o, m) {
  let x = input.value;
  output.textContent = parseInt(x, m).toString(o);
};

convert.addEventListener("click", function () {
  if (from.value === "decimal" && to.value === "bin") {
    dectoOther(2);
  } else if (from.value === "decimal" && to.value === "octadecimal") {
    dectoOther(8);
  } else if (from.value === "decimal" && to.value === "hexaDecimal") {
    dectoOther(16);
  } else if (from.value === "hexaDecimal" && to.value === "decimal") {
    othertodec(16);
  } else if (from.value === "hexaDecimal" && to.value === "bin") {
    otherConversion(2, 16);
  } else if (from.value === "hexaDecimal" && to.value === "octadecimal") {
    otherConversion(8, 16);
  } else if (from.value === "bin" && to.value === "decimal") {
    othertodec(2);
  } else if (from.value === "bin" && to.value === "octadecimal") {
    otherConversion(8, 2);
  } else if (from.value === "bin" && to.value === "hexaDecimal") {
    otherConversion(16, 2);
  } else if (from.value === "octadecimal" && to.value === "hexaDecimal") {
    otherConversion(16, 8);
  } else if (from.value === "octadecimal" && to.value === "bin") {
    otherConversion(2, 8);
  } else if (from.value === "octadecimal" && to.value === "decimal") {
    othertodec(8);
  } else if (from.value === "from" || to.value === "to") {
    output.textContent = "Choose an appropriate conversion term";
  }
});
