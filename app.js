let skillBars = document.getElementsByClassName("progress");
let navMenu = document.getElementById("navbar");

function skillAnim() {
    for (item in skillBars) {
        skillBars[item].setAttribute("class", "progress mt-1 skills-anim");
    }
}

function mobileMenu() {
    const largeMenu = navMenu.innerHTML;
    const menuIcon = `<a href="#welcome-section"><i class="far fa-star ms-4 fa-2x text-danger"></i></a>
    <a href="#" class="ms-auto me-2"><i class="fas fa-bars text-light fa-2x"></i></a>`;

    //mediaQuery.matches && (navMenu.innerHTML = menuIcon) ;
    (window.innerWidth < 575) ? (navMenu.innerHTML = menuIcon) : (navMenu.innerHTML = largeMenu);
}
//var mediaQuery = window.matchMedia("(max-width: 575px)");

//mobileMenu(mediaQuery);
window.addEventListener('resize', mobileMenu());


// console.log(mediaQuery);
//  mediaQuery.addEventListener("change", () => {
//      this.mobileMenu();
//  });

// // mediaQuery.addListener(mobileMenu);

