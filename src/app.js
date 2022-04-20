// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

//write your code here

let pronoun = ["I", "Me", "Mine", "My", "Myself"];
let adj = ["cosmic", "large", "small"];
let noun = ["revenge", "business", "industry"];
let extensions = [".com", ".net", ".us", ".io"];

window.onload = function() {
console.log("Hello Rigo from the console!");
};

let ul = document.createElement("ul");
document.getElementById("domain-list").appendChild(ul);

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let a = 0; a < extensions.length; a++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let result = `${pronoun[i]}${adj[j]}${noun[k]}${extensions[a]}`;
        li.innerHTML = li.innerHTML + result;

      }
    }
  }
}


