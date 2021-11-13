let skillBars = document.getElementsByClassName("progress");

function skillAnim() {
    for (item in skillBars) {
        skillBars[item].setAttribute("class", "progress mt-1 skills-anim");
    }
}