/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
function getData() {
  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cars) => {
        // create el
        const brand = document.createElement("h3");
        const model = document.createElement("h3");
        const car = document.createElement("div");

        // styles
        car.style.display = "flex";
        car.style.justifyContent = "space-between";
        car.style.margin = "1rem auto";
        car.style.text = "white";
        car.style.backgroundColor = "white";
        car.style.borderRadius = "5px";
        car.style.borderBottom = "2px solid black";
        car.style.padding = "1rem 1rem";
        brand.style.width = "8rem";
        model.style.width = "60rem";
        model.style.color = "white";
        brand.style.color = "#F26D50";
        car.style.backgroundColor = "#343434";

        // text cont

        brand.textContent = cars.brand;

        model.textContent = cars.models;

        // append

        car.append(brand, model);

        const output = document.getElementById("output");
        output.append(car);
      });
    });
}
getData();
