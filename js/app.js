// MENU RESPONSIVE

const navSlide = () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click",()=>{
        //nav.style.display = "flex";
        nav.classList.toggle("nav-active"); // Toggle Nav
            // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation = "";
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        // navLinks.addEventListener("click",()=>{
        //   navLinks.forEach((links)=>{
        //     nav.classList.toggle("nav-active"); // Toggle Nav
        //     burger.classList.toggle("toggle");
        //   });
        // });


        // Burger animation
        burger.classList.toggle("toggle");
    });
};


navSlide();



let anchoVentana = window.innerWidth;

if (anchoVentana <= 780){

  let funcionremove = function(){
   
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active"); // Toggle Nav
    
    const burger = document.querySelector(".burger");
    burger.classList.toggle("toggle");
    
  
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      if(link.style.animation){
      link.style.animation = "";
      } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
  });
  
  };


  const aLink1 = document.querySelector(".link1");

aLink1.addEventListener("click", () => {
  funcionremove();
});

const aLink2 = document.querySelector(".link2");

aLink2.addEventListener("click", () => {
  funcionremove();
});

const aLink3 = document.querySelector(".link3");

aLink3.addEventListener("click", () => {
  funcionremove();
});

const aLink4 = document.querySelector(".link4");

aLink4.addEventListener("click", () => {
  funcionremove();
});

const aLink5 = document.querySelector(".link5");

aLink5.addEventListener("click", () => {
  funcionremove();
});

const aLink6 = document.querySelector(".link6");

aLink6.addEventListener("click", () => {
  funcionremove();
});
    
}



//Menu se guarda en responsive al hacer click en link del menú.






// MENU ABAJO

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    let logo = document.querySelector(".logoimg");
    nav.classList.toggle("abajo", window.scrollY > 0);
    logo.classList.toggle("abajologo", window.scrollY > 0);
    let nav2 = document.querySelector(".nav-links");
    nav2.classList.toggle("abajonav", window.scrollY > 0);
});

// PARALLAX BACKGROUND PORTADA Y ELEMENTO

//const parallax = document.getElementById("home");
// const parallaxc = document.getElementById("section__contacto");
    
// window.addEventListener("scroll", function(){
//     //const casella = document.getElementById("casella");
//     let posicion = window.pageYOffset;
//    // casella.style.top = posicion * 0.3 + "px";
//     let offset = window.pageYOffset;
//    // parallax.style.backgroundPositionY = offset * 0.04 + "px";
//     parallaxc.style.backgroundPositionY = offset * -0.02 + "px";
//     //casella.style.translate = offset * 0.04 + "px";
// });

// SCROLL INDICATOR

window.addEventListener("scroll", () => {

    const indicatorBar = document.querySelector(".scrollindicator");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;
    indicatorBar.style.width = scrollValue + "%";
    
});


//CODIGO PARA SCROLL SMOOTH CON MOVIMIENTO

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
      
    event.preventDefault();
       
        var hash = this.hash;
         
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

// BOTON IR ARRIBA 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop; 

    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
        buttonUpp.style.transform = "scale(0)";
    }
};

// SCROLL DE BOTON IR ARRIBA 
buttonUpp = document.getElementById("button-up");

window.onscroll = function (){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {

        buttonUpp.style.transform = "scale(1)";

    } else if(scroll < 100){
        
        buttonUpp.style.transform = "scale(0)";
    }
};

// SLIDER


(function($) {
    "use strict";
    $.fn.sliderResponsive = function(settings) {
      
      var set = $.extend( 
        {
          slidePause: 5000,
          fadeSpeed: 800,
          autoPlay: "on",
          showArrows: "off", 
          hideDots: "off", 
          hoverZoom: "on",
          titleBarTop: "off"
        },
        settings
      ); 
      
      var $slider = $(this);
      var size = $slider.find("> div").length; //number of slides
      var position = 0; // current position of carousal
      var sliderIntervalID; // used to clear autoplay
        
      // Add a Dot for each slide
      $slider.append("<ul></ul>");
      $slider.find("> div").each(function(){
        $slider.find("> ul").append('<li></li>');
      });
        
      // Put .show on the first Slide
      $slider.find("div:first-of-type").addClass("show");
        
      // Put .showLi on the first dot
      $slider.find("li:first-of-type").addClass("showli")
  
       //fadeout all items except .show
      $slider.find("> div").not(".show").fadeOut();
      
      // If Autoplay is set to 'on' than start it
      if (set.autoPlay === "on") {
          startSlider(); 
      } 
      
      // If showarrows is set to 'on' then don't hide them
      if (set.showArrows === "on") {
          $slider.addClass('showArrows'); 
      }
      
      // If hideDots is set to 'on' then hide them
      if (set.hideDots === "on") {
          $slider.addClass('hideDots'); 
      }
      
      // If hoverZoom is set to 'off' then stop it
      if (set.hoverZoom === "off") {
          $slider.addClass('hoverZoomOff'); 
      }
      
      // If titleBarTop is set to 'on' then move it up
      if (set.titleBarTop === "on") {
          $slider.addClass('titleBarTop'); 
      }
  
      // function to start auto play
      function startSlider() {
        sliderIntervalID = setInterval(function() {
          nextSlide();
        }, set.slidePause);
      }
      
      // on mouseover stop the autoplay
      $slider.mouseover(function() {
        if (set.autoPlay === "on") {
          clearInterval(sliderIntervalID);
        }
      });
        
      // on mouseout starts the autoplay
      $slider.mouseout(function() {
        if (set.autoPlay === "on") {
          startSlider();
        }
      });
  
      //on right arrow click
      $slider.find("> .right").click(nextSlide)
  
      //on left arrow click
      $slider.find("> .left").click(prevSlide);
        
      // Go to next slide
      function nextSlide() {
        position = $slider.find(".show").index() + 1;
        if (position > size - 1) position = 0;
        changeCarousel(position);
      }
      
      // Go to previous slide
      function prevSlide() {
        position = $slider.find(".show").index() - 1;
        if (position < 0) position = size - 1;
        changeCarousel(position);
      }
  
      //when user clicks slider button
      $slider.find(" > ul > li").click(function() {
        position = $(this).index();
        changeCarousel($(this).index());
      });
  
      //this changes the image and button selection
      function changeCarousel() {
        $slider.find(".show").removeClass("show").fadeOut();
        $slider
          .find("> div")
          .eq(position)
          .fadeIn(set.fadeSpeed)
          .addClass("show");
        // The Dots
        $slider.find("> ul").find(".showli").removeClass("showli");
        $slider.find("> ul > li").eq(position).addClass("showli");
      }
  
      return $slider;
    };
})(jQuery);
  
     
  //////////////////////////////////////////////
  // Activate each slider - change options
  //////////////////////////////////////////////
$(document).ready(function() {
    
    $("#slider1").sliderResponsive({
    // Using default everything
      // slidePause: 5000,
      // fadeSpeed: 800,
      // autoPlay: "on",
      // showArrows: "off", 
      // hideDots: "off", 
      // hoverZoom: "on", 
      // titleBarTop: "off"
    });
    
   
}); 


// FORMULARIO

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, textarea');

const expresiones = {
	usuario: /^[a-zA-ZÀ-ÿ\s-Z0-9]{1,40}$/,  
	nombre: /^[a-zA-ZÀ-ÿ\s-Z0-9]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^([0-9]){1,20}$/, // Solo números
	mensaje: /^[a-zA-ZÀ-ÿ\s-Z0-9]{1,700}$/, //PRUEBA MENSAJE
}

const campos = {
	usuario: false,
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrectoo');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correctoo');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(campos.usuario && campos.nombre && campos.correo && campos.telefono && campos.mensaje){
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
    formulario.submit();
    formulario.reset();

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
		
	}
});

// GALERIA JAVASCRIPT

const lightbox = document.querySelector(".gallery-lightbox");
const galleryBox = Array.from(lightbox.querySelectorAll(".gallery-lightbox__box"));
const lightboxPopup = document.querySelector(".gallery-lightbox__popup");
const optionsHeader = lightboxPopup.querySelector(".gallery-lightbox__popup--options");
const optionsLinks = Array.from(optionsHeader.querySelectorAll(".option-link"));
const fullscreenOption = optionsHeader.querySelector(".fullscreen");
const downloadOption = optionsHeader.querySelector(".download");
const zoomOutOption = optionsHeader.querySelector(".zoom-out");
const zoomInOption = optionsHeader.querySelector(".zoom-in");
const closeOption = optionsHeader.querySelector(".close");
let zoomLevel = 1;
let zoomInc = 0.05;
const fullViewContainer = lightboxPopup.querySelector(".gallery-lightbox__popup--content");
const fullView = lightboxPopup.querySelector(".fullview");
const fullViewCaption = lightboxPopup.querySelector("p");
const leftArrow = lightboxPopup.querySelector(".arrow--left");
const rightArrow = lightboxPopup.querySelector(".arrow--right");
let active = lightbox.querySelector(".gallery-lightbox__box.active");
let nextGallery, prevGallery, galleryDirection, index;

//Function to start lightbox
const startLightbox = () => {
    //GET full size image
    const fullSize = active.dataset.fullsize
    // Caption
    const caption = active.dataset.caption
    // index
    index = Number(active.dataset.index)
    //Place image inside the full view container
    fullView.innerHTML = `<img src="${fullSize}">`
    fullViewCaption.textContent = caption
    // Options and zoom
    downloadOption.href = fullSize
    zoomInOption.setAttribute("data-zoom-level",zoomLevel)
    zoomOutOption.setAttribute("data-zoom-level",zoomLevel)

    //Reset Zoom
    fullView.style.transform = "";

    // Reset FullScreen
    // fullView.style.width = "";
    // fullView.style.height = "";
    // fullViewContainer.classList.remove("fullscreen");
 
};

startLightbox();
// Gallery Box

galleryBox.forEach((gallery) => {
    gallery.addEventListener("click", (e) => {
        e.preventDefault();

        if(!gallery.classList.contains("active")){
            active.classList.remove("active")
        }
    
        gallery.classList.add("active")
        nextGallery = lightbox.querySelector(".gallery-lightbox__box.active")
        active = lightbox.querySelector(".gallery-lightbox__box.active")
    
        lightboxPopup.classList.add("active")
        zoomLevel = 1
        startLightbox();
    });
});

rightArrow.addEventListener("click", () => changeGallery("right"));
leftArrow.addEventListener("click", () => changeGallery("left"));


function changeGallery (direction){
    (direction === "right") ? index++ : index--;
    if (direction === "right" && index >= galleryBox.length)
    index = 0;
    if (direction === "left" && index < 0) index = galleryBox.length - 1;
    galleryDirection = galleryBox[index];
    active.classList.remove("active");
    galleryDirection.classList.add("active");
    active = lightbox.querySelector(".gallery-lightbox__box.active");
    zoomLevel = 1
    startLightbox();
};

function changeGalleryRight(){
    index++
    if(index >= galleryBox.length) index = 0;
    nextGallery = galleryBox[index];
    active.classList.remove("active");
    nextGallery.classList.add("active")
    active = lightbox.querySelector(".gallery-lightbox__box.active");
    startLightbox();
};

function changeGalleryLeft() {
    index--
    if(index < 0) index = galleryBox.length - 1;
    prevGallery = galleryBox[index];
    active.classList.remove("active");
    prevGallery.classList.add("active");
    // New Active Gallery
    active = lightbox.querySelector(".gallery-lightbox__box.active");
    startLightbox();
};

// Options

optionsLinks.forEach((link) => {
    link.addEventListener("click", (e) => e.preventDefault());

});

// Zooming and out effect

zoomInOption.addEventListener("click", function(){
    zoomLevel += zoomInc

    if(zoomLevel >= 1.4){
        zoomLevel = zoomLevel - 0.01
        this.classList.add("disabled")
        return;
    }
   
    this.setAttribute("data-zoom-level", zoomLevel);
    // update zoom out
    zoomOutOption.setAttribute("data-zoom-level", zoomLevel);
    zoomOutOption.classList.remove("disabled");

    fullView.style.transform = `scale(${zoomLevel})`
});

zoomOutOption.addEventListener("click", function(){
    zoomLevel -= zoomInc

    if(zoomLevel < 0.6){
        zoomLevel = zoomLevel + 0.01
        this.classList.add("disabled")
        return;
    }
   
    this.setAttribute("data-zoom-level", zoomLevel);
    // update zoom in
    zoomInOption.setAttribute("data-zoom-level", zoomLevel);
    zoomInOption.classList.remove("disabled");

    fullView.style.transform = `scale(${zoomLevel})`
});

// Fullscreen
fullscreenOption.addEventListener("click", () =>{

    const optionsHeaderHeight = optionsHeader.clientHeight
    
    fullViewContainer.classList.toggle("fullscreen");
    if(fullViewContainer.classList.contains("fullscreen")){

        fullView.style.width = "100vw"
        fullView.style.height = `calc(100vh - ${optionsHeaderHeight}px)`
        zoomLevel = 1
        fullView.style.transform = `scale($zoomlevel})`
    } else {
        fullView.style.width = ""
        fullView.style.height = ""
    }
});

closeOption.addEventListener("click", () =>{
  lightboxPopup.classList.remove("active")
});

// Closing Gallery

lightboxPopup.addEventListener("mouseup", (e) => {
    const target = e.target
    if(!target.classList.contains("gallery-lightbox__popup")) return;
    lightboxPopup.classList.remove("active")
});


// ACORDION

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

// CARD PRODUCTOS

document.querySelectorAll('.flip-card-click .flip-card-inner').forEach(function(item) {  
  item.addEventListener('keypress', function(evt) {
     if (evt.keyCode == 13 || evt.keyCode == 32) {
       item.click(); 
      } 
    });
});

document.querySelectorAll('.flip-card-click').forEach(function(item) { 
  item.addEventListener('click', function () {
     this.classList.toggle('flipped'); 
  });
});


