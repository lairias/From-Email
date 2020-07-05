const css =   require('../css/custom.css');
const css1 =  require('../css/materialize.min.css');


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-Variables Globales
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const BtnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector('#enviar-mail')
const BtnReset = document.querySelector('#resetBtn')
//miniatu☺ra de envio
const spiner = document.querySelector('#spinner');
const enviado = document.createElement('img');

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-EventListener
addEventListeners();
function addEventListeners() {
  //funcion de inicia de la pagina web
  document.addEventListener("DOMContentLoaded", inicioApp);
  //campos del formulario
  email.addEventListener("blur", ValidarCampo);
  asunto.addEventListener("blur", ValidarCampo);
  mensaje.addEventListener("blur", ValidarCampo);
  BtnEnviar.addEventListener('click',EnviarEmail )
  BtnReset.addEventListener('click',reset)
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-funciones Relacianadas al addEventListener
//funcion al cargar la pagina web
function inicioApp() {
  //desavilitamos el boton enviar cuando carge la pagina
  BtnEnviar.disabled = true;
}

//funcion para validar los campos del formulario

function ValidarCampo() {
  //funcion validamos la longitud del texto
  ValidarLongitud(this);
  //validamos sola mente el email con type de JS
  if (this.type === "email") {
    validarEmail(this);
  }
//variable de todos los errores
  let errores = document.querySelectorAll(".error");
  if (email.value !== "" && asunto.value !== "" && mensaje !== "") {
    if (errores.length === 0) {
      BtnEnviar.disabled = false;
    }
  }
}

function EnviarEmail(e){
    e.preventDefault();
    //mostramos el spiner al precionar enciar
    spiner.style.display = 'block'//mostramos con el argumento block
    document.querySelector('#loaders').appendChild(enviado)//lugar donde enviaremos el img

    setTimeout(() => {
        spiner.style.display = 'none'
        
            enviado.src = 'img/mail.gif';
            enviado.style.display = 'block'
            setTimeout(() => {
                enviado.remove()//removemos el img
                formulario.reset()//con el reset formatiamos el formulario
                
            },3000);//3 segundos
        
    }, 4000);
   
    
}
//boton de formtaer el form
function resetBtn(e){
e.preventDefault();
formulario.reset();


}
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-Funciones
//verificamos la longitud de cada campo
function ValidarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

//Validamos la @ en el campo de correo del formulario
function validarEmail(campo) {
  if (campo.value.indexOf("@") !== -1) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
