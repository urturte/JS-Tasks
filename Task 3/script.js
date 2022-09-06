/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "https://api.github.com/users";
document.getElementById("btn").addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((users) => {
        // create el
        const login = document.createElement("h3");
        const avatar = document.createElement("h3");
        const container = document.createElement("div");

        // styles
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
        container.style.margin = "auto";
        container.style.text = "white";
        container.style.backgroundColor = "white";
        container.style.borderRadius = "5px solid white";
        container.style.borderBottom = "2px solid black";
        container.style.padding = "1rem 0";

        // text cont

        login.textContent = users.login;
        avatar.textContent = users.avatar_url;

        // append

        container.append(login, avatar);

        const output = document.getElementById("output");
        output.append(container);
      });
    });
});
