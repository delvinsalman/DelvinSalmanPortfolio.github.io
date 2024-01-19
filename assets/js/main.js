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
    "𝗢𝘃𝗲𝗿 𝘁𝗵𝗲 𝗽𝗮𝘀𝘁 𝗳𝗲𝘄 𝘆𝗲𝗮𝗿𝘀, 𝗜'𝘃𝗲 𝗶𝗺𝗺𝗲𝗿𝘀𝗲𝗱 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗻 𝗨𝗻𝗶𝘁𝘆, 𝗲𝗺𝗯𝗮𝗿𝗸𝗶𝗻𝗴 𝗼𝗻 𝗮 𝗴𝗮𝗺𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗷𝗼𝘂𝗿𝗻𝗲𝘆. 𝗜'𝘃𝗲 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗴𝗮𝗺𝗲𝘀, 𝗴𝗮𝗶𝗻𝗲𝗱 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗰𝗼𝘂𝗿𝘀𝗲𝘀 𝗮𝗻𝗱 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀. 𝗨𝗻𝗶𝘁𝘆 𝗲𝗻𝗵𝗮𝗻𝗰𝗲𝗱 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝗶𝗻 𝗴𝗮𝗺𝗲 𝗱𝗲𝘀𝗶𝗴𝗻 𝘁𝗼𝗼𝗹𝘀 𝗮𝗻𝗱 𝗰𝗼𝗱𝗶𝗻𝗴. 𝗜'𝘃𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝗮𝘀𝗶𝗰 𝟮𝗗/𝟯𝗗 𝗴𝗮𝗺𝗲𝘀 𝗮𝗻𝗱 𝗺𝗼𝗿𝗲. 𝗔𝘀 𝘁𝗶𝗺𝗲 𝗴𝗼𝗲𝘀, 𝗜 𝗵𝗼𝗽𝗲 𝘁𝗼 𝗼𝗻𝗹𝘆 𝗶𝗺𝗽𝗿𝗼𝘃𝗲 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝘄𝗶𝘁𝗵𝗶𝗻 𝘁𝗵𝗲 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲.";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    " 𝗜 𝗽𝗼𝘀𝘀𝗲𝘀𝘀 𝗽𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆 𝗶𝗻 𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗽𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲𝘀, 𝗶𝗻𝗰𝗹𝘂𝗱𝗶𝗻𝗴 𝗝𝗮𝘃𝗮, 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁, 𝗖#, 𝗛𝗧𝗠𝗟, 𝗖𝗦𝗦, 𝗮𝗻𝗱 𝗵𝗮𝘃𝗲 𝗮 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗸𝗻𝗼𝘄𝗹𝗲𝗱𝗴𝗲 𝗼𝗳 𝗣𝘆𝘁𝗵𝗼𝗻 𝗮𝗻𝗱 𝗖 𝘁𝗼 𝘀𝗼𝗺𝗲 𝗲𝘅𝘁𝗲𝗻𝘁. 𝗜 𝗮𝗺 𝗰𝗼𝗻𝗳𝗶𝗱𝗲𝗻𝘁 𝗶𝗻 𝗺𝘆 𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝘁𝗼 𝗲𝗳𝗳𝗲𝗰𝘁𝗶𝘃𝗲𝗹𝘆 𝘂𝘁𝗶𝗹𝗶𝘇𝗲 𝘁𝗵𝗲𝘀𝗲 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲𝘀 𝗮𝗻𝗱 𝗰𝗼𝗻𝘀𝘁𝗮𝗻𝘁𝗹𝘆 𝘀𝘁𝗿𝗶𝘃𝗲 𝘁𝗼 𝗲𝘅𝗽𝗮𝗻𝗱 𝗺𝘆 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗮𝗻𝗱 𝗱𝗶𝘀𝗰𝗼𝘃𝗲𝗿 𝗶𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝘃𝗲 𝘄𝗮𝘆𝘀 𝘁𝗼 𝗮𝗽𝗽𝗹𝘆 𝘁𝗵𝗲𝗺 𝗶𝗻 𝗺𝘆 𝘄𝗼𝗿𝗸. 𝗜 𝗮𝗺 𝗮𝗹𝘄𝗮𝘆𝘀 𝗲𝗮𝗴𝗲𝗿 𝘁𝗼 𝗹𝗲𝗮𝗿𝗻 𝗺𝗼𝗿𝗲 𝗮𝗻𝗱 𝗲𝗻𝗵𝗮𝗻𝗰𝗲 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝘄𝗶𝘁𝗵𝗶𝗻 𝘁𝗵𝗲𝘀𝗲 𝗽𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲𝘀. 𝗕𝘂𝘁 𝗮𝘀 𝗮𝗹𝘄𝗮𝘆𝘀 𝗜 𝗮𝗺 𝗮𝗹𝘄𝗮𝘆𝘀 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝘀 𝗜 𝘀𝘁𝗶𝗹𝗹 𝗮𝗺 𝗮 𝘀𝘁𝘂𝗱𝗲𝗻𝘁. ";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "𝗔𝘀 𝗜 𝗮𝗺 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝗻𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝗴𝗮𝗺𝗲𝘀, 𝗨𝗻𝗿𝗲𝗮𝗹 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮 𝗻𝗲𝘄𝗲𝗿 𝗲𝗻𝗴𝗶𝗻𝗲 𝗜 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝘂𝘀𝗶𝗻𝗴 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 𝘁𝗵𝗲𝘀𝗲 𝗴𝗮𝗺𝗲𝘀 𝗜 𝗮𝗺 𝗺𝗮𝗸𝗶𝗻𝗴. 𝗜𝗳 𝗶𝘁'𝘀 𝗮 𝗽𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗲 𝗴𝗮𝗺𝗲 𝘁𝗼 𝗮 𝗴𝗮𝗺𝗲 𝗜 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗺𝗮𝗸𝗲 𝘄𝗶𝘁𝗵 𝗺𝘆 𝗴𝗿𝗼𝘂𝗽, 𝗜 𝗵𝗮𝘃𝗲 𝗮 𝗱𝗲𝗰𝗲𝗻𝘁 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 𝗵𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗴𝗮𝗺𝗲 𝗲𝗻𝗴𝗶𝗻𝗲 𝗮𝘀 𝗶𝘁𝘀 𝗮 𝘃𝗲𝗿𝘆 𝘂𝘀𝗲𝗳𝘂𝗹 𝗴𝗮𝗺𝗲 𝗲𝗻𝗴𝗶𝗻𝗲 𝘁𝗼 𝗺𝗲, 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗹𝘆 𝗳𝗼𝗿 𝟯𝗗 𝗴𝗮𝗺𝗲𝘀.";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "𝗗𝘂𝗿𝗶𝗻𝗴 𝗺𝘆 𝘀𝘁𝘂𝗱𝗶𝗲𝘀 𝗮𝘁 𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆, 𝗜 𝗵𝗮𝘃𝗲 𝘁𝗮𝗸𝗲𝗻 𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲 𝗰𝗼𝘂𝗿𝘀𝗲𝘀 𝘁𝗵𝗮𝘁 𝗱𝗶𝘀𝗽𝗹𝗮𝘆 𝗺𝗮𝗻𝘆 𝗼𝗳 𝘁𝗵𝗲 𝘄𝗮𝘆𝘀 𝗜 𝗴𝗮𝗶𝗻𝗲𝗱 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀. 𝗦𝗼𝗺𝗲 𝗼𝗳 𝘁𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗿𝘀𝗲𝘀 𝗮𝗿𝗲, 𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗢𝗯𝗷𝗲𝗰𝘁-𝗢𝗿𝗶𝗲𝗻𝘁𝗲𝗱 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴, 𝗠𝗲𝗱𝗶𝗮 𝗦𝗶𝗴𝗻𝗮𝗹𝘀, 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗜𝗻𝘁𝗲𝗿𝗮𝗰𝘁𝗶𝘃𝗲 𝗦𝘆𝘀𝘁𝗲𝗺𝘀, 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗳𝗼𝗿 𝗗𝗶𝗴𝗶𝘁𝗮𝗹 𝗠𝗲𝗱𝗶𝗮, 𝗡𝗲𝘁-𝗰𝗲𝗻𝘁𝗿𝗶𝗰 𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝘁𝗼 𝗖𝗼𝗺𝗽𝘂𝘁𝗶𝗻𝗴, 𝗚𝗮𝗺𝗲 𝗠𝗲𝗰𝗵𝗮𝗻𝗶𝗰𝘀, 𝗦𝗰𝗿𝗲𝗲𝗻-𝗕𝗮𝘀𝗲𝗱 𝗙𝗹𝘂𝗶𝗱 𝗜𝗻𝘁𝗲𝗿𝗳𝗮𝗰𝗲𝘀, 𝗖𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗶𝘃𝗲 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁, 𝗮𝗻𝗱 𝗚𝗮𝗺𝗲 𝗗𝗲𝘀𝗶𝗴𝗻 𝗮𝗻𝗱 𝗣𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗶𝗻𝗴 𝗜 𝗮𝗻𝗱 𝗜𝗜, 𝘁𝗼 𝗻𝗮𝗺𝗲 𝗮 𝗳𝗲𝘄.";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "𝗠𝗮𝘆𝗮 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮 𝘁𝗼𝗼𝗹 𝗶𝗻 𝘄𝗵𝗶𝗰𝗵 𝗜 𝗵𝗮𝘃𝗲 𝗹𝗲𝗮𝗿𝗻𝗲𝗱 𝗮𝗻𝗱 𝘂𝘀𝗲𝗱 𝘁𝗼 𝗱𝗼 𝗮𝗻𝗶𝗺𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝟯𝗗 𝗺𝗼𝗱𝗲𝗹𝗶𝗻𝗴. 𝗜 𝗵𝗮𝘃𝗲 𝗮 𝗱𝗲𝗰𝗲𝗻𝘁 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 𝗵𝗼𝘄 𝘁𝗼 𝗺𝗼𝗱𝗲𝗹 𝗮𝗻𝗱 𝘁𝗵𝗲 𝘄𝗼𝗿𝗹𝗱 𝗼𝗳 𝗮𝗻𝗶𝗺𝗮𝘁𝗶𝗼𝗻 𝘀𝗼 𝗜 𝗳𝗶𝗻𝗱 𝗺𝘆𝘀𝗲𝗹𝗳 𝗰𝗮𝗽𝗮𝗯𝗹𝗲 𝗼𝗳 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝗺𝗮𝗻𝘆 𝗰𝗿𝗲𝗮𝘁𝗶𝘃𝗲 𝘁𝗵𝗶𝗻𝗴𝘀 𝘄𝗶𝘁𝗵𝗶𝗻 𝘁𝗵𝗮𝘁 𝗳𝗶𝗲𝗹𝗱. 𝗜 𝗮𝗺 𝗳𝗮𝗺𝗶𝗹𝗶𝗮𝗿 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗮𝗻𝗱 𝗲𝘃𝗲𝗻 𝘀𝗼𝗺𝗲 𝗼𝘁𝗵𝗲𝗿 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗹𝗶𝗸𝗲 𝗕𝗹𝗲𝗻𝗱𝗲𝗿 𝘁𝗼 𝗮𝗻 𝗲𝘅𝘁𝗲𝗻𝘁.";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "𝗜 𝗵𝗮𝘃𝗲 𝗮 𝗴𝗿𝗲𝗮𝘁 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 𝗺𝗮𝗻𝘆 𝗜𝗗𝗘𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝗘𝗰𝗹𝗶𝗽𝘀𝗲, 𝗩𝗶𝘀𝘂𝗮𝗹 𝗦𝘁𝘂𝗱𝗶𝗼, 𝗮𝗻𝗱 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗝. 𝗜 𝗮𝗹𝘀𝗼 𝗵𝗮𝘃𝗲 𝘀𝗼𝗺𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 𝗶𝗻 𝗺𝗮𝗻𝘆 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗵𝗮𝘁 𝗶𝘀 𝘂𝘀𝗲𝗱 𝗳𝗼𝗿 𝗮 𝘃𝗮𝗿𝗶𝗲𝘁𝘆 𝗼𝗳 𝗽𝘂𝗿𝗽𝗼𝘀𝗲𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 𝗶𝗻 𝘂𝘀𝗶𝗻𝗴 𝗴𝗶𝘁 𝗺𝗮𝗶𝗻𝗹𝘆. 𝗠𝘆 𝗸𝗻𝗼𝘄𝗹𝗲𝗱𝗴𝗲 𝗶𝗻 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗰𝗮𝗻 𝗯𝗲 𝗹𝗼𝗼𝗸𝗲𝗱 𝗮𝘁 𝗶𝗻 𝗸𝗻𝗼𝘄𝗶𝗻𝗴 𝗱𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴 𝗮𝗻𝗱 𝘀𝘆𝘀𝘁𝗲𝗺𝘀 𝘁𝗼 𝗮𝗻 𝗲𝘅𝘁𝗲𝗻𝘁.";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "𝗠𝘆 𝗸𝗻𝗼𝘄𝗹𝗲𝗱𝗴𝗲 𝗲𝗻𝗰𝗼𝗺𝗽𝗮𝘀𝘀𝗲𝘀 𝗮 𝘃𝗮𝘀𝘁 𝗿𝗮𝗻𝗴𝗲 𝗼𝗳 𝗱𝗲𝘀𝗶𝗴𝗻 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 𝗶𝗻 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗳𝗶𝗲𝗹𝗱𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝗹𝗲𝘃𝗲𝗹 𝗮𝗻𝗱 𝗴𝗮𝗺𝗲 𝗱𝗲𝘀𝗶𝗴𝗻, 𝗽𝗵𝗼𝘁𝗼𝘀𝗵𝗼𝗽, 𝘃𝗶𝗱𝗲𝗼 𝗲𝗱𝗶𝘁𝗶𝗻𝗴, 𝗮𝗻𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝘃𝗲 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝘃𝗲 𝗱𝗲𝘀𝗶𝗴𝗻 𝘁𝗼 𝗻𝗮𝗺𝗲 𝗮 𝗳𝗲𝘄. 𝗜 𝗮𝗺 𝗮𝗹𝘀𝗼 𝗳𝗮𝗺𝗶𝗹𝗶𝗮𝗿 𝘄𝗶𝘁𝗵 𝗺𝗮𝗻𝘆 𝗱𝗲𝘀𝗶𝗴𝗻 𝘁𝗼𝗼𝗹𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝗖𝗮𝗻𝘃𝗮, 𝗠𝗮𝘆𝗮, 𝗔𝗱𝗼𝗯𝗲, 𝗢𝗽𝗲𝗻𝘀𝗵𝗼𝘁, 𝗮𝗻𝗱 𝗣𝗵𝗼𝘁𝗼𝘀𝗵𝗼𝗽. 𝗠𝘆 𝗺𝗶𝗻𝗱 𝗶𝘀 𝗼𝗽𝗲𝗻 𝗮𝗹𝘄𝗮𝘆𝘀 𝗮𝗻𝗱 𝗜 𝘀𝗲𝗲 𝘁𝗵𝗲 𝗱𝗲𝘀𝗶𝗴𝗻 𝘁𝗵𝗲 𝘀𝗮𝗺𝗲 𝘄𝗮𝘆 𝗮𝘀 𝗮𝗻𝘆𝗼𝗻𝗲 𝗰𝗮𝗻 𝗰𝗿𝗲𝗮𝘁𝗲 𝘀𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝘄𝗶𝘁𝗵𝗶𝗻 𝗮 𝗳𝗶𝗲𝗹𝗱. ";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "𝗠𝗶𝗰𝗿𝗼𝘀𝗼𝗳𝘁 𝗢𝗳𝗳𝗶𝗰𝗲 𝗶𝘀 𝘀𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗜 𝗸𝗻𝗼𝘄 𝘃𝗲𝗿𝘆 𝘄𝗲𝗹𝗹, 𝗳𝗿𝗼𝗺 𝗣𝗼𝘄𝗲𝗿𝗣𝗼𝗶𝗻𝘁 𝘁𝗼 𝗘𝘅𝗲𝗹, 𝘁𝗼 𝗗𝗼𝗰𝘀, 𝗜 𝗵𝗮𝘃𝗲 𝗮 𝗴𝗿𝗲𝗮𝘁 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗼𝗳 𝘁𝗵𝗲 𝘀𝘆𝘀𝘁𝗲𝗺. 𝗜 𝘁𝗲𝗻𝗱 𝘁𝗼 𝗮𝗹𝘄𝗮𝘆𝘀 𝘂𝘀𝗲 𝗶𝘁 𝗳𝗼𝗿 𝗺𝘆 𝗺𝗮𝗶𝗻 𝘀𝗼𝗿𝘁𝘀 𝗼𝗳 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻𝘀, 𝗽𝗮𝗽𝗲𝗿𝘀, 𝗱𝗮𝘁𝗮 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝘁𝗶𝗼𝗻, 𝗮𝗻𝗱 𝗺𝘂𝗰𝗵 𝗺𝗼𝗿𝗲. 𝗢𝘃𝗲𝗿𝗮𝗹𝗹 𝗜 𝗮𝗺 𝘀𝘁𝗶𝗹𝗹 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗺𝗮𝗻𝘆 𝗻𝗲𝘄 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀 𝘁𝗵𝗲𝘆 𝗮𝗱𝗱 𝗯𝘂𝘁 𝗜 𝘄𝗼𝘂𝗹𝗱 𝘀𝗮𝘆 𝗜 𝗸𝗻𝗼𝘄 𝗶𝘁 𝘄𝗲𝗹𝗹 𝘁𝗼 𝗺𝘆 𝗸𝗻𝗼𝘄𝗹𝗲𝗱𝗴𝗲. ";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*𝗛𝗼𝘃𝗲𝗿 𝘁𝗵𝗲 𝗰𝗮𝗿𝗱 𝘁𝗼 𝗥𝗲𝗮𝗱*`;
  });
}





