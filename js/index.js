let imagenes = [
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/divorcio.png",
        "descripcion": "Divorcio"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/pension.webp",
        "descripcion": "Pensión alimenticia"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/custodia.webp",
        "descripcion": "Custodia"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/Patria.webp",
        "descripcion": "Patria potestad"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/convivencia.webp",
        "descripcion": "Convivencia y guarda de menores"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/rectificacion.webp",
        "descripcion": "Rectificación y nulidad de todo tipo de actas civiles"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/cobranza.jfif",
        "descripcion": "Cobranza de documentos mercantiles"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/hipotecas.webp",
        "descripcion": "Hipotecas"

    },
    {
        "url": "https://Trexpapu.github.io/JoseLuisLopez.github.io/photos/demandasMercantiles.webp",
        "descripcion": "Demandas mercantiles"

    },
    
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let texto = document.getElementById('descripcion')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="Foto" loading="lazy"></img>`
    texto.innerHTML = `
    
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="Foto" loading="lazy"></img>`
    texto.innerHTML = `
    
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

// Función para enviar el correo electrónico
function sendEmail() {
    var form = document.getElementById('opinionForm');

    emailjs.sendForm("service_728uera", "template_yeu0ryc", form)
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            alert("Mensaje enviado.");
            // Puedes agregar aquí cualquier lógica adicional después de enviar el correo
        }, function(error) {
            console.error('Failed...', error);
            alert("Error, no se pudo enviar el mensaje");
            // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje al usuario
        });

    return false;
}

// Agregar un event listener para el envío del formulario
document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío de formulario predeterminado
    sendEmail(); // Llamar a la función para enviar el correo electrónico
});



function ShowNavBar() {
    var nav = document.getElementById("navbar");
    if(nav.classList.contains("notShowNavBar")){
        nav.classList.remove("notShowNavBar");
        nav.classList.add("showNavBar");
    }else{
        nav.classList.remove("showNavBar");
        nav.classList.add("notShowNavBar");
    }
    
}

onload = function(){
    var nav = document.getElementById("navbar");
    nav.classList.add("notShowNavBar");
}

let menu = document.getElementById("menu");
menu.addEventListener('click', function(){
    ShowNavBar()
});