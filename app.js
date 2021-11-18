let skillBars = document.getElementsByClassName("progress");
let navMenu = document.getElementById("navbar");
let skillSet = document.getElementById("skill-set");
let toolBox = document.getElementById("tool-box");
let skillItem = document.getElementsByClassName("skill-item")
let meText = document.getElementById("me-text");

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

  for (item in skillItem) {
    skillItem[item].classList.add("skill-set-anim");
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

