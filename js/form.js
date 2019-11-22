const encryptionRate = document.querySelector(".encryptionRate");
encryptionRate.addEventListener("change", function(event) {
    if (this.value > 25 || this.value < 1) {
        this.value = 3;
    }
});

var encrypt = document.getElementById("btnEncrypt");
encrypt.addEventListener("click", function(event){
    event.preventDefault();

    const encryptionRate = document.querySelector(".encryptionRate").value;

    const str = document.getElementById("textEncrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str, encryptionRate);

    var tbody = document.querySelector(".tbodyEncrypt");
    var td = document.createElement("td");
    td.textContent = action.magic("encrypt");
    var tr = document.createElement("tr");
    tr.appendChild(td);
    tbody.appendChild(tr);
});

var decrypt = document.getElementById("btnDecrypt");
decrypt.addEventListener("click", function(event) {
    event.preventDefault();

    var encryptionRate = document.querySelector(".encryptionRate").value;

    const str = document.getElementById("textDecrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str, encryptionRate);

    var tbody = document.querySelector(".tbodyDecrypt");
    var td = document.createElement("td");
    td.textContent = action.magic("decrypt");
    var tr = document.createElement("tr");
    tr.appendChild(td);
    tbody.appendChild(tr);
});
