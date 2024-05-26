const cursorAnime = () => {
  let cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    // gsap.to(cursor, {
    //   x: dets.x,
    //   y: dets.y,
    //   duration: 0.8,
    //   ease: "power4",
    // });
  });

  document.querySelectorAll("nav .nav-link").forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      cursor.style.scale = 4;
    //   gsap.to(cursor, {
    //     scale: 4,
    //     duration: 0.4,
    //   });
    });
  });

  document.querySelectorAll("nav .nav-link").forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
      cursor.style.scale = 1;
    //   gsap.to(cursor, {
    //     scale: 1,
    //     duration: 0.3,
    //   });
    });
  });

}

const magnetEffect = () => {
  let btns = document.querySelectorAll("#navLink");

  btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      let rect = btn.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      let mouseY = e.clientY - rect.top;
      gsap.to(btn, {
        x: (mouseX - rect.width / 2) * 0.5,
        y: (mouseY - rect.height / 2) * 0.5,
        duration: 0.2,
      });
    });

    btn.addEventListener("mouseleave", (e) => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.2,
      });
    });
  });
};

const perspectiveEffect = () => {
  const imageElem = document.querySelector(".page2-content-wrapper .part2 img");

  document
    .querySelector(".page2-content-wrapper .box1")
    .addEventListener("mousemove", (e) => {
      rotateElement(e, imageElem);
    });
  function rotateElement(event, element) {
    let cont = document.querySelector(".page2-content-wrapper .box1");

    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y);

    // find the middle
    const middleX = cont.offsetWidth / 2;
    const middleY = cont.offsetHeight / 2;
    // console.log(middleX, middleY);

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 35;
    const offsetY = ((y - middleY) / middleY) * 15;
    // console.log(offsetX, offsetY);

    // set rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }
};

magnetEffect();
perspectiveEffect();
cursorAnime();
