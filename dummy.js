let isi = document.querySelector(".doc").outerHTML;

const kolom = [
  "Letter Code",
  "Client Company Caps",
  "Client Company Proper",
  "Client City",
  "Office Address Client",
  "Client Rep",
  "Client Rep Position",
  "Client Surname Caps",
  "Vendor Company Caps",
  "Vendor Company Proper",
  "Vendor City",
  "Office Address Vendor",
  "Vendor Rep",
  "Vendor Rep Position",
  "Vendor Surname Caps",
];

for (let x of kolom) {
  isi = isi.replace(
    new RegExp(`\\$\\{${x}\\}`, "g"),
    automaRefData("googleSheets", `data.0.${x}`)
  );
}

const variabel = ["city", "day", "date", "month", "year"];

for (let x of variabel) {
  isi = isi.replace(
    new RegExp(`\\$\\{${x}\\}`, "g"),
    automaRefData("variables", `data.0.${x}`)
  );
}

automaSetVariable("isi", isi);
automaNextBlock();
