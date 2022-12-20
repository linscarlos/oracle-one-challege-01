const texto = document.querySelector("#insertText");
const criptografar = document.querySelector(".btn-criptografar");
const decriptografar = document.querySelector(".btn-decriptografar");
const resultado = document.querySelector(".containerResult");
const copiarTexto = document.querySelector(".btn-copiar");
const textoConvertido = document.querySelector(".texto-convertido");

const imgEmptyResult = document.querySelector(".decodificador-empty");
const titleEmptyResult = document.querySelector(".title-decodificador-empty");
const descriptionEmptyResult = document.querySelector(
  ".description-decodificador-empty"
);

criptografar.addEventListener("click", (e) => {
  e.preventDefault();

  let textoConvert = texto.value;
  let textoFinal = textoConvert
    .replaceAll("i", "imes")
    .replaceAll("e", "enter")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  textoConvertido.innerHTML = `${textoFinal}`;

  if (imgEmptyResult.style.display != "none") {
    resultado.classList.add("active");
    imgEmptyResult.classList.add("desable");
    titleEmptyResult.classList.add("desable");
    descriptionEmptyResult.classList.add("desable");
    textoConvertido.classList.remove("desable");
    copiarTexto.classList.remove("desable");
  }
});

decriptografar.addEventListener("click", (e) => {
  e.preventDefault();
  let textoConvert = texto.value;

  let textoFinal = textoConvert
    .replaceAll("imes", "i")
    .replaceAll("enter", "e")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  textoConvertido.innerHTML = `${textoFinal}`;

  if (imgEmptyResult.style.display != "none") {
    resultado.classList.add("active");
    imgEmptyResult.classList.add("desable");
    titleEmptyResult.classList.add("desable");
    descriptionEmptyResult.classList.add("desable");
    textoConvertido.classList.remove("desable");
    copiarTexto.classList.remove("desable");
  }
});

copiarTexto.addEventListener("click", () => {
  //   textoConvertido.select();
  //   textoConvertido.execCommand("copy");
  //   alert("Texto Copiado!");

  // POR ALGUM MOTIVO DESCONHECIDO ESSA FUNÇÂO NÂO FUNCIONA
  console.log("Funcionalidade inativa");
});
