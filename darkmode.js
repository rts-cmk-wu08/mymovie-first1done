const checkbox = document.querySelector('#checkbox')
let setActiveStyleSheet = function(title) {

    let css = `link[rel="alternate stylesheet"]`;
    let styleSheets = document.querySelectorAll(css);
    styleSheets.forEach(sheet => sheet.disabled = true);
    let selector = `link[title="${title}"]`;
    let activeSheet = document.querySelector(selector);
    activeSheet.disabled = false;
    console.log(styleSheets)
    localStorage.setItem("theme", title);
}

let savedSheet = localStorage.getItem("theme");

if (savedSheet) {
    setActiveStyleSheet(savedSheet);
    if (savedSheet === "dark") {
        checkbox.checked = true;
    }
}




checkbox.addEventListener('click', (event) => {
    console.log(event.target.checked)
    if (event.target.checked) {
        setActiveStyleSheet('dark');


    } else {
        setActiveStyleSheet('light');


    }


})