//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Over the past few years, I've immersed myself in Unity, embarking on a game development journey. I've created multiple games, gained experience through university courses and personal projects. Unity enhanced my skills in game design tools and coding. I've developed basic 2D/3D games and more. As time goes, I hope to only improve my skills within the software.";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    " I possess proficiency in multiple programming languages, including Java, Javascript, C#, HTML, CSS, and have a working knowledge of Python and C to some extent. I am confident in my ability to effectively utilize these languages and constantly strive to expand my understanding and discover innovative ways to apply them in my work. I am always eager to learn more and enhance my skills within these programming languages. But as always I am always learning as I still am a student. ";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "As I am learning and creating games, Unreal has been a newer engine I have been using to create these games I am making. If it's a prototype game to a game I want to make with my group, I have a decent understanding of how to use this game engine as its a very useful game engine to me, especially for 3D games.";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "During my studies at university, I have taken multiple courses that display many of the ways I gained my skills. Some of those courses are, Advanced Object-Oriented Programming, Media Signals, Building Interactive Systems, Programming for Digital Media, Net-centric Introduction to Computing, Game Mechanics, Screen-Based Fluid Interfaces, Collaborative Project Development, and Game Design and Prototyping I and II, to name a few. ";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Maya has been a tool in which I have learned and used to do animation and 3D modeling. I have a decent understanding of how to model and the world of animation so I find myself capable of creating many creative things within that field. I am familiar with the software and even some other software like Blender to an extent. ";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "I have a great understanding of many IDEs such as Eclipse, Visual Studio, and IntelliJ. I also have some experience in many software applications that is used for a variety of purposes such as version control in using git mainly. My knowledge in software can be looked at in knowing debugging and systems to an extent. ";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "My knowledge encompasses a vast range of design components in different fields such as level and game design, photoshop, video editing, and creative generative design to name a few. I am also familiar with many design tools such as Canva, Maya, Adobe, Openshot, and Photoshop. My mind is open always and I see the design the same way as anyone can create something special within a field. ";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Microsoft Office is something I know very well, from PowerPoint to Exel, to Docs, I have a great understanding of the system. I tend to always use it for my main sorts of presentations, papers, data importation, and much more. Overall I am still learning many new features they add but I would say I know it well to my knowledge. ";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*Hover the card to Read*`;
  });
}





