function toggleTheme() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") === "style_dark.css") {
        theme.setAttribute("href", "style_light.css");
    } else {
        theme.setAttribute("href", "style_dark.css");
    }
}