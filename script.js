function suitBatuGuntingKertas() {
  jalankanSuit(["batu", "gunting", "kertas"], "Suit Batu Gunting Kertas");
}

function suitGajahOrangSemut() {
  jalankanSuit(["gajah", "orang", "semut"], "Suit Gajah Orang Semut");
}

function suitJari() {
  jalankanSuit(["jempol", "telunjuk", "kelingking"], "Suit Jari");
}

function jalankanSuit(opsiArray, namaMode) {
  var pilihanUser = prompt("pilih(" + opsiArray.join(" / ") + "):");

  if (pilihanUser == null) return;

  pilihanUser = pilihanUser.toLowerCase().trim();

  if (!opsiArray.includes(pilihanUser)) {
    document.getElementById("hasil").innerHTML = "Pilihan tidak valid!";
    return;
  }

  var pilihanComp = opsiArray[Math.floor(Math.random() * opsiArray.length)];
  var hasil = "";

  if (pilihanUser == pilihanComp) {
    hasil = "Seri!";
  } else if (
    (pilihanUser == opsiArray[0] && pilihanComp == opsiArray[1]) ||
    (pilihanUser == opsiArray[1] && pilihanComp == opsiArray[2]) ||
    (pilihanUser == opsiArray[2] && pilihanComp == opsiArray[0])
  ) {
    hasil = "Kamu Menang!";
  } else {
    hasil = "Komputer Menang!";
  }

  document.getElementById("hasil").innerHTML =
    "<b>Mode:</b> " + namaMode + "<br>" +
    "<b>Kamu:</b> " + pilihanUser +
    " | <b>Komputer:</b> " + pilihanComp + "<br><br>" +
    "<b>Hasil:</b> " + hasil;
}