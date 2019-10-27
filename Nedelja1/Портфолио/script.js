const link = document.querySelectorAll("nav li");
[...link].forEach(navigate);

function navigate(link, idx) {
  link.addEventListener("click", () => {
    switch (idx % 4) {
      case 0:
        document.querySelector("body").style.top = "0";
        break;
      case 1:
        document.querySelector("body").style.top = "-200%";
        break;
      case 2:
        document.querySelector("body").style.top = "-400%";
        break;
      case 3:
        document.querySelector("body").style.top = "-700%";
        break;
    }
  });
}

body = document.querySelector("body");
body.style.transition = "top, 2s";
body.style.top = "0";
let count = 0;

body.onwheel = event => {
  let pos = Number.parseInt(body.style.top);
  console.log(event.deltaY);
  count++;
  if (count > 20) {
    switch (pos) {
      case 0:
        if (event.deltaY > 0) {
          body.style.top = pos - 200 + "%";
        }
        break;
      case -200:
        if (event.deltaY > 0) {
          body.style.top = pos - 200 + "%";
        } else {
          body.style.top = pos + 200 + "%";
        }
        break;
      case -400:
        if (event.deltaY > 0) {
          body.style.top = pos - 300 + "%";
        } else {
          body.style.top = pos + 200 + "%";
        }
        break;
      case -700:
        if (event.deltaY < 0) {
          body.style.top = pos + 300 + "%";
        }
        break;
      default:
        body.style.top = 0 + "%";
    }
    count = 0;
  }
};

const img = document.querySelectorAll(".projects img");
const sectionProjects = document.querySelector(".projects");
[...img].forEach(image => {
  image.onmouseover = () => {
    let url = image.src.substring(image.src.lastIndexOf("/") + 1);
    sectionProjects.style.backgroundImage = "url(" + url + ")";
    sectionProjects.style.backgroundSize = "100vw 100vh";
    sectionProjects.style.backgroundColor = "rgba(100, 100, 100, 0.825)";
  };
});
[...img].forEach(image => {
  image.onmouseleave = () => {
    sectionProjects.style.backgroundImage = "";
  };
});

const headerTime = document.getElementsByClassName("headerTime");

function time() {
  document.getElementsByClassName(
    "headerTime"
  )[0].innerHTML = new Date().toLocaleTimeString();
  setTimeout(() => {
    time();
  }, 500);
}
time();

function downloadCV() {
  alert("Једног дана ће овде бити CV");
}
