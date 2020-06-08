// BOTONERA
const btningles = document.getElementById("btningles");
const btnlengua = document.getElementById("btnlengua");
const btnmatematica = document.getElementById("btnmatematica");

const tarealengua = document.getElementById("lengua");
const tareaingles = document.getElementById("ingles");
const tareamatematica = document.getElementById("matematica");

const btnayudalengua = document.getElementById("btnayudalengua");
const ayudalengua = document.getElementById("ayudatxtlengua");

const btnayudamate = document.getElementById("btnayudamate");
const ayudamate = document.getElementById("ayudatxtmate");

const btnayudaingles = document.getElementById("btnayudaingles");
const ayudaingles = document.getElementById("ayudatxtingles");

let tamanopantalla = window.innerWidth;

btningles.addEventListener("click", function () {
  tareaingles.style.display = "grid";
  tareamatematica.style.display = "none";
  tarealengua.style.display = "none";
  btningles.style.backgroundColor = "pink";
  btnmatematica.style.backgroundColor = "cornsilk";
  btnlengua.style.backgroundColor = "cornsilk";
});

btnlengua.addEventListener("click", function () {
  tarealengua.style.display = "grid";
  tareamatematica.style.display = "none";
  tareaingles.style.display = "none";
  btnlengua.style.backgroundColor = "pink";
  btnmatematica.style.backgroundColor = "cornsilk";
  btningles.style.backgroundColor = "cornsilk";
});

btnmatematica.addEventListener("click", function () {
  tareamatematica.style.display = "grid";
  tareaingles.style.display = "none";
  tarealengua.style.display = "none";
  btnmatematica.style.backgroundColor = "pink";
  btningles.style.backgroundColor = "cornsilk";
  btnlengua.style.backgroundColor = "cornsilk";
});

console.log(window.innerWidth);
if (tamanopantalla < 500) {
  btningles.addEventListener("click", function () {
    tareaingles.style.display = "flex";
    tareaingles.style.flexDirection = "column";
    tareamatematica.style.display = "none";
    tarealengua.style.display = "none";
    btningles.style.backgroundColor = "pink";
    btnmatematica.style.backgroundColor = "cornsilk";
    btnlengua.style.backgroundColor = "cornsilk";
  });

  btnlengua.addEventListener("click", function () {
    tarealengua.style.display = "flex";
    tareaingles.style.flexDirection = "column";
    tareamatematica.style.display = "none";
    tareaingles.style.display = "none";
    btnlengua.style.backgroundColor = "pink";
    btnmatematica.style.backgroundColor = "cornsilk";
    btningles.style.backgroundColor = "cornsilk";
  });

  btnmatematica.addEventListener("click", function () {
    tareamatematica.style.display = "flex";
    tareaingles.style.flexDirection = "column";
    tareaingles.style.display = "none";
    tarealengua.style.display = "none";
    btnmatematica.style.backgroundColor = "pink";
    btningles.style.backgroundColor = "cornsilk";
    btnlengua.style.backgroundColor = "cornsilk";
  });
}

btnayudalengua.addEventListener("click", function () {
  ayudalengua.classList.toggle("oculta");
});

btnayudamate.addEventListener("click", function () {
  ayudamate.classList.toggle("oculta");
});

btnayudaingles.addEventListener("click", function () {
  ayudaingles.classList.toggle("oculta");
});

//LENGUA
var contador = 0;
var encontrados = [];
var encontradosproxy = [];
const sustantivos = document.querySelectorAll(".sust");
const verbos = document.querySelectorAll(".verb");
const adjetivos = document.querySelectorAll(".adj");
var nota = document.getElementById("nota");
const boton = document.getElementById("boton");

sustantivos.forEach((sus) =>
  sus.addEventListener("click", function (e) {
    const cadasust = e.currentTarget;
    cadasust.classList.add("colora");

    if (!encontradosproxy.includes(cadasust.id)) {
      encontrados.push(cadasust.id);
    }
    encontradosproxy.push(cadasust.id);
  })
);

verbos.forEach((ver) =>
  ver.addEventListener("click", function (e) {
    const cadaverb = e.currentTarget;
    cadaverb.classList.add("colora");

    if (!encontradosproxy.includes(cadaverb.id)) {
      encontrados.push(cadaverb.id);
    }
    encontradosproxy.push(cadaverb.id);
  })
);

adjetivos.forEach((adj) =>
  adj.addEventListener("click", function (e) {
    const cadaadj = e.currentTarget;
    cadaadj.classList.add("colora");

    if (!encontradosproxy.includes(cadaadj.id)) {
      encontrados.push(cadaadj.id);
    }
    encontradosproxy.push(cadaadj.id);
  })
);

boton.addEventListener("click", function () {
  var calif = 0;

  calif = encontrados.length;

  var cantidadpalabras = sustantivos.length + verbos.length + adjetivos.length;

  nota.innerHTML =
    "Tu nota es " +
    calif +
    " <br> Encontraste " +
    encontrados.length +
    " palabras de " +
    cantidadpalabras;
});
// FIN DE LENGUA

//MATEMATICA

const resultados = [2, 8, 19, 20, 55, 9, 44, 32, 10, 5];

const botonresulmate = document.getElementById("resulmate");
const notam = document.getElementById("notam");
const resultadosingresados = document.querySelectorAll(".resultadomate");

botonresulmate.addEventListener("click", function () {
  var contador = 0;
  for (var i = 0; i < resultadosingresados.length; i++) {
    if (resultadosingresados[i].value == resultados[i]) {
      resultadosingresados[i].style.borderColor = "green";
      contador++;
    } else {
      resultadosingresados[i].style.borderColor = "red";
    }
  }
  notam.innerHTML =
    "Tu nota es " +
    contador +
    "<br> Contestaste correctamente " +
    contador +
    " de " +
    resultadosingresados.length +
    " operaciones";
});

//FIN DE MATEMATICA

//INGLES

$(function () {
  $("#go, #buy, #fly, #drive, #lead").draggable();
  $("#gone").droppable({
    accept: "#go",
    drop: function (event, ui) {
      $(this).addClass("verbingdrop").find("p").html("Go-Gone!");
      $("#go").addClass("oculta");
    },
  });

  $("#driven").droppable({
    accept: "#drive",
    drop: function (event, ui) {
      $(this).addClass("verbingdrop").find("p").html("Drive-Driven!");
      $("#drive").addClass("oculta");
    },
  });

  $("#bought").droppable({
    accept: "#buy",
    drop: function (event, ui) {
      $(this).addClass("verbingdrop").find("p").html("Buy-Bought!");
      $("#buy").addClass("oculta");
    },
  });

  $("#led").droppable({
    accept: "#lead",
    drop: function (event, ui) {
      $(this).addClass("verbingdrop").find("p").html("Lead-Led!");
      $("#lead").addClass("oculta");
    },
  });

  $("#flown").droppable({
    accept: "#fly",
    drop: function (event, ui) {
      $(this).addClass("verbingdrop").find("p").html("Fly-Flown!");
      $("#fly").addClass("oculta");
    },
  });
});

//FIN DE INGLES
