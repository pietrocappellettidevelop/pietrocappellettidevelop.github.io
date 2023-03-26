var lightMode = true;
var root = null;
var rootValues = null;
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

window.addEventListener('load', function () {
    root = document.querySelector(':root');
    rootValues = getComputedStyle(root);
    setColorTheme(window.matchMedia && darkThemeMq.matches);
});

darkThemeMq.addListener(e => {
    setColorTheme(e.matches);
});

function setColorTheme(isDark){
    lightMode = !isDark;
    if (isDark) {
        //dark mode
        root.style.setProperty('--clMainBack', '#121212');
        root.style.setProperty('--clText', '#FFFFFF');
        root.style.setProperty('--clMainColor', '#BB86FC');
        root.style.setProperty('--clHeaderBack', 'rgba(187, 134, 252, 0.3)');
    } else {
        //light mode
        root.style.setProperty('--clMainBack', '#FFFFFF');
        root.style.setProperty('--clText', '#222222');
        root.style.setProperty('--clMainColor', '#BB86FC');
        root.style.setProperty('--clHeaderBack', 'rgba(187, 134, 252, 0.3)');
    }
}