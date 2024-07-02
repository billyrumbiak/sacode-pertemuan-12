// method menambahkan teks
document.getElementById("demo").textContent = "Hello World";

// method tambahkan teks dan tag
const create = document.createElement("p");
create.textContent = "Hello Billy";
document.body.appendChild(create);