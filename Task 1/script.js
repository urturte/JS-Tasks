/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("submit-btn").addEventListener("click", () => {
  // event.preventDefault();

  //   calculating value
  const userInput = document.getElementById("search").value;
  const lbValue = userInput * 2.2046;
  const gValue = userInput / 0.001;
  const ozValue = userInput * 35.274;

  // creating elements
  const values = document.createElement("div");
  const kgOutput = document.createElement("h2");
  const lbOutput = document.createElement("h2");
  const gOutput = document.createElement("h2");
  const ozOutput = document.createElement("h2");

  //   styles
  values.style.display = "flex";
  values.style.backgroundColor = "white";
  values.style.padding = "1rem";
  values.style.borderRadius = "5px";
  values.style.width = "50rem";
  values.style.margin = "auto";
  values.style.justifyContent = "space-between";
  kgOutput.style.color = "black";
  lbOutput.style.color = "blue";
  gOutput.style.color = "red";
  ozOutput.style.color = "green";

  //   text with values
  kgOutput.textContent = userInput + "kg";
  lbOutput.textContent = lbValue + "lb";
  gOutput.textContent = gValue + "g";
  ozOutput.textContent = ozValue + "oz";

  //   append

  const output = document.getElementById("output");
  values.append(kgOutput, lbOutput, gOutput, ozOutput);
  output.append(values);
});
