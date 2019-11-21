var encrypt = document.getElementById("btnEncrypt");
encrypt.addEventListener("click", function(event){
    event.preventDefault();

    const str = document.getElementById("textEncrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str);

    var tbody = document.querySelector(".tbodyEncrypt");
    var td = document.createElement("td");
    td.textContent = action.magic("encrypt");
    var tr = document.createElement("tr");
    tr.appendChild(td);
    tbody.appendChild(tr);

    alert("Sua criptografia é: "+td.textContent);
});

var decrypt = document.getElementById("btnDecrypt");
decrypt.addEventListener("click", function(event) {
    event.preventDefault();

    const str = document.getElementById("textDecrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str);

    var tbody = document.querySelector(".tbodyDecrypt");
    var td = document.createElement("td");
    td.textContent = action.magic("decrypt");
    var tr = document.createElement("tr");
    tr.appendChild(td);
    tbody.appendChild(tr);

    alert("Sua descriptografia é: "+td.textContent);
});
