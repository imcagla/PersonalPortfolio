let skillBars = document.getElementsByClassName("progress");
let navMenu = document.getElementById("navbar");
let skillSet = document.getElementById("skill-set");
let toolBox = document.getElementById("tool-box");
let skillItem = document.getElementsByClassName("skill-item")
let meText = document.getElementById("me-text");
let toolHeader = document.getElementById("tool-box-header");
let fixedMenu = document.getElementById("fixed-menu");
let aboutSection = document.getElementById("about-section");

function skillAnim() {
    for (item in skillBars) {
        skillBars[item].setAttribute("class", "progress mt-1 skills-anim");
    }
}

function showSkills() {
  skillSet.classList.remove("d-none");
  toolBox.classList.remove("tool-box-anim");
  toolBox.classList.add("tool-box-anim2");
  meText.classList.remove("invisible");
  meText.classList.add("me-text-anim");
  toolHeader.classList.remove("invisible");
  toolHeader.classList.add("skill-set-anim");


  for (item in skillItem) {
    skillItem[item].classList.add("skill-set-anim");
  }
}


window.addEventListener('scroll', appear)

function appear() {
  let windowHeight = window.innerHeight;
  let appeartop = aboutSection.getBoundingClientRect().top;
  let appearpoint = 400;
  console.log("windowheight",windowHeight)
  console.log("top",appeartop)
  console.log("point",appearpoint)

  if(appeartop < windowHeight - appearpoint) {
    fixedMenu.classList.add('appear')
  } else {
    fixedMenu.classList.remove('appear')
  }
}

function mobileMenu() {
    const largeMenu = navMenu.innerHTML;
    const noMenu = `<a href="#welcome-section"><i class="far fa-star ms-4 fa-2x text-danger"></i></a>`
    const menuIcon = `<a href="#welcome-section"><i class="far fa-star ms-4 fa-2x text-danger"></i></a>
    <a href="#mobile-menu" class="ms-auto me-4"><i class="fas fa-bars text-light fa-2x"></i></a>`;
    const smallMenu = `<a href="#welcome-section"><i class="far fa-star ms-4 fa-2x text-danger"></i></a>
    <ul class="navbar-nav d-flex justify-content-center">
      <li class="nav-item" id="nav-item-style">
        <a class="nav-link active" aria-current="page" id="nav-text" onclick="skillAnim()" href="#about-section">About Me</a>
      </li>
      <li class="nav-item" id="nav-item-style">
        <a class="nav-link" id="nav-text" href="#work-section">Work</a>
      </li>
      <li class="nav-item" id="nav-item-style">
        <a class="nav-link" id="nav-text" href="#contact">Contact</a>
      </li>
    </ul> `

    mediaQuery.matches && (navMenu.innerHTML = noMenu) ;
    //(window.innerWidth < 575) ? (navMenu.innerHTML = smallMenu) : (navMenu.innerHTML = largeMenu);
}
var mediaQuery = window.matchMedia("(max-width: 575px)");

mobileMenu(mediaQuery);
//window.addEventListener('resize', mobileMenu());


// console.log(mediaQuery);
//  mediaQuery.addEventListener("change", () => {
//      this.mobileMenu();
//  });

mediaQuery.addListener(mobileMenu);

