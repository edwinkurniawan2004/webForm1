const submit = document.getElementById("submit");
// const tampil = document.getElementById("tampil");

const dataPasien = document.getElementById("dataPasien");
var table = document.createElement("table");
table.className = "table text-center mt-5";
dataPasien.appendChild(table);

const elementTr = document.createElement("tr");
table.appendChild(elementTr);
elementTr.innerHTML = `
	 		<th>No RM</th>
		 	<th>No NIK</th>
	 		<th>Nama</th>
	 		<th>Alamat</th>
	 		<th>No.Telp</th>`;

submit.addEventListener("click", () => {
  let lnoRm = document.getElementById("noRm").value;
  let lnoNik = document.getElementById("noNik").value;
  let lnama = document.getElementById("nama").value;
  let lalamat = document.getElementById("alamat").value;
  let lnoTelp = document.getElementById("noTelp").value;

  // console.log(lnama);

  let elementTr1 = document.createElement("tr");
  elementTr1.innerHTML = `
			<td>${lnoRm}</td>
			<td>${lnoNik}</td>
			<td>${lnama}</td>
			<td>${lalamat}</td>
			<td>${lnoTelp}</td>`;
  table.appendChild(elementTr1);

  document.getElementById("noRm").value = "";
  document.getElementById("noNik").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("noTelp").value = "";
});

// tampil.addEventListener("click", () => {
//   let snoRm = document.getElementById("noRm").value;
//   console.log(snoRm);
//   console.log("21");
// });

// for(let key in dataRs){
// 	var Judul = document.createElement('h2');
// 	Judul.className = "mt-3";
// 	Judul.innerHTML = key;
// 	document.getElementById(key).appendChild(Judul);

// 	var table = document.createElement('table');
// 	table.className = "table table-sm mt-5";
// 	document.getElementById(key).appendChild(table);

// 	const elementTr = document.createElement('tr');
// 	table.appendChild(elementTr);
// 	elementTr.innerHTML = `
// 		 		<th>No</th>
// 		 		<th>No RM</th>
// 		 		<th>No NIK</th>
// 		 		<th>Nama</th>
// 		 		<th>Alamat</th>
// 		 		<th>No. Telp</th>`

// 	for(let i = 0; i < dataRs[key].length; i++){
// 		let no = dataRs[key][i].no;
// 		let noRm = dataRs[key][i].noRm;
// 		let noNik = dataRs[key][i].noNik;
// 		let nama = dataRs[key][i].nama;
// 		let alamat = dataRs[key][i].alamat;
// 		let noTelp = dataRs[key][i].noTelp;

// 		let elementTr = document.createElement('tr');
// 		elementTr.innerHTML = `
// 				<td>${no}</td>
// 				<td>${noRm}</td>
// 				<td>${noNik}</td>
// 				<td>${nama}</td>
// 				<td>${alamat}</td>
// 				<td>${noTelp}</td>`
// 		table.appendChild(elementTr);
// 	}
// }
