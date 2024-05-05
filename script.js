let cursor = document.getElementById("cursor")

document.addEventListener("mousemove", (dets) =>{
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

document.querySelectorAll("nav .nav-link").forEach((elem) => {
    elem.addEventListener("mouseover", () =>{
        cursor.style.scale = 4;
    })
});

document.querySelectorAll("nav .nav-link").forEach((elem) => {
    elem.addEventListener("mouseleave", () =>{
        cursor.style.scale = 1;
    })
});