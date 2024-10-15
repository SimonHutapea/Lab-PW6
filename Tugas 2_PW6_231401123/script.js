const root = document.getElementsByClassName("root")[0];
document.title = 'Tugas 2';

alert("Selamat Datang! Silakan isi form di bawah.");

const headerWrp = document.createElement("div");
headerWrp.classList.add("header-wrapper");

const header = document.createElement("h1");
header.setAttribute("class", "header");
header.innerText = "Tugas-2 Praktikum Pemrogramman Web";

root.appendChild(headerWrp);
headerWrp.appendChild(header);

const mainContent = document.createElement("div");
mainContent.setAttribute("class", "main-content");

const formulir = document.createElement("form");
formulir.setAttribute("onsubmit", "return false");  // Prevent default form submission

const nama = document.createElement("div");
const lNama = document.createElement("label");
lNama.setAttribute("for", "usernameInput");
lNama.textContent = "Nama";

const iNama = document.createElement("input");
iNama.setAttribute("id", "usernameInput");
iNama.type = 'text';
iNama.placeholder = 'Simon Hutapea';
iNama.required = true;

const nim = document.createElement("div");
const lNim = document.createElement("label");
lNim.setAttribute("for", "nimInput");
lNim.textContent = "NIM";

const iNim = document.createElement("input");
iNim.setAttribute("id", "nimInput");
iNim.type = 'text';
iNim.placeholder = '231401123';
iNim.required = true;

const kom = document.createElement("div");
const lKom = document.createElement("label");
lKom.setAttribute("for", "komInput");
lKom.textContent = "KOM";

const iKom = document.createElement("input");
iKom.setAttribute("id", "komInput");
iKom.type = 'text';
iKom.placeholder = 'C';
iKom.required = true;

const foto = document.createElement("div");
const lFoto = document.createElement("label");
lFoto.setAttribute("for", "fotoInput");
lFoto.textContent = "Upload Photo";

const iFoto = document.createElement("input");
iFoto.setAttribute("id", "fotoInput");
iFoto.type = 'file';
iFoto.accept = 'image/png, image/jpeg';
iFoto.required = true;

const submitBtn = document.createElement("button");
submitBtn.textContent = 'Submit';
submitBtn.onclick = hasil;

root.appendChild(mainContent);
mainContent.appendChild(formulir);
formulir.appendChild(nama);
nama.appendChild(lNama);
nama.appendChild(iNama);
formulir.appendChild(nim);
nim.appendChild(lNim);
nim.appendChild(iNim);
formulir.appendChild(kom);
kom.appendChild(lKom);
kom.appendChild(iKom);
formulir.appendChild(foto);
foto.appendChild(lFoto);
foto.appendChild(iFoto);
formulir.appendChild(submitBtn);

const result = document.createElement("div");
result.setAttribute("class", "result-wrapper");

function hasil() {
    // Clear previous results
    result.innerHTML = '';

    alert("Form berhasil disubmit!");

    const photo = document.createElement("img");
    const file = iFoto.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        photo.src = reader.result;
        photo.alt = "User Photo";
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }

    const usernameOutput = document.createElement("p");
    usernameOutput.textContent = `Nama: ${iNama.value}`;

    const nimOutput = document.createElement("p");
    nimOutput.textContent = `NIM: ${iNim.value}`;

    const komOutput = document.createElement("p");
    komOutput.textContent = `KOM: ${iKom.value}`;

    mainContent.appendChild(result);
    result.appendChild(photo);
    result.appendChild(usernameOutput);
    result.appendChild(nimOutput);
    result.appendChild(komOutput);
}