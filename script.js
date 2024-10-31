let i = 300;
let z = 160;
// console.log(`i equal to ${i}, z equal to ${z}`);

let ItemPosition1 = 18;
let ItemPosition2 = 28;
// console.log(`ItemPosition1 equal to ${ItemPosition1}, ItemPosition2 equal to ${ItemPosition2}`);

let o1 = 100;
let o2 = 100;
// console.log(`o1 = ${o1}, o2 = ${o2}`);

let boxShadowIncreasing = true;
let positionIncreasing = true;
let opacityIncreasing = true;


function switchTheme() {
    let dayTheme = document.getElementById("day");
    let nightTheme = document.getElementById("night");

    if(nightTheme.style.opacity == "0"){
        nightTheme.style.opacity = "1";
        dayTheme.style.opacity = "0";
    } else{
        nightTheme.style.opacity = "0";
        dayTheme.style.opacity = "1";
    }
    
    console.log(dayTheme);
    console.log(nightTheme);
}


const positionIController = setInterval(function () {
    let item1 = document.getElementById("grd-1");
    let item2 = document.getElementById("grd-2");

    item1.style.right = `${ItemPosition1}%`;
    item1.style.bottom = `${ItemPosition2}%`;

    item2.style.left = `${ItemPosition1}%`;
    item2.style.top = `${ItemPosition2}%`;

    if (positionIncreasing) {
        ItemPosition1 += 3;
        ItemPosition2 += 2;
    } else {
        ItemPosition1 -= 3;
        ItemPosition2 -= 2;
    }

    if (ItemPosition1 >= 100) {
        positionIncreasing = false;
        // console.log("Switching to decrease position");
        // console.log(`ItemPosition1 equal to ${ItemPosition1}, ItemPosition2 equal to ${ItemPosition2}`);
    }

    if (ItemPosition1 <= 18) {
        positionIncreasing = true;
        // console.log("Switching to increase position");
        // console.log(`ItemPosition1 equal to ${ItemPosition1}, ItemPosition2 equal to ${ItemPosition2}`);
    }
}, 100);

const boxShadowController = setInterval(function () {

    let item1 = document.getElementById("grd-1");
    let item2 = document.getElementById("grd-2");

    item1.style.boxShadow = `0px 0px ${i}px ${z}px #1F3B26`;
    item2.style.boxShadow = `0px 0px ${i}px ${z}px #519195`;

    if (boxShadowIncreasing) {
        i += 10;
        z += 5;

    } else {
        i -= 10;
        z -= 5;
    }

    if (i >= 600) {
        boxShadowIncreasing = false;
        // console.log("Switching to decrease boxshadow");
        // console.log(`i equal to ${i}, z equal to ${z}`);
    }

    if (i <= 300) {
        boxShadowIncreasing = true;
        // console.log("Switching to increase box shadow");
        // console.log(`i equal to ${i}, z equal to ${z}`);
    }
}, 100);

const boxOpacityController = setInterval(function () {
    let item1 = document.getElementById("grd-1");
    let item2 = document.getElementById("grd-2");

    item1.style.opacity = `${o1}%`;
    item2.style.opacity = `${o2}%`;

    if (opacityIncreasing) {
        o1 -= 10;
        o2 -= 10;
    } else {
        o1 += 10;
        o2 += 10;
    }

    if (o1 <= 10) {
        opacityIncreasing = false;
        // console.log("Switching to increase opacity");
        // console.log(`o1 = ${o1}, o2 = ${o2}`);
    }

    if (o1 >= 100) {
        opacityIncreasing = true;
        // console.log("Switching to decrease opacity");
        // console.log(`o1 = ${o1}, o2 = ${o2}`);
    }
}, 100);

function uisetting() {
    var Themes = document.getElementById("themes");
    var gr = document.getElementById("ui-setting");
    if (Themes.style.visibility == "visible") {
        gr.style.transform = "rotate(180deg)";
        Themes.style.visibility = "hidden";
        Themes.style.opacity = "0";

    } else {
        gr.style.transform = "rotate(-180deg)";
        Themes.style.visibility = "visible";
        Themes.style.opacity = "1";
    }
}