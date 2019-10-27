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

let projectDescriptions = {
  "bootcampPizzaImg.png": "Први пројекат",

  "facebookImg.png": "Плејсхолдер 1",
  "instagramImg.png": "Плејсхолдер 3",
  "twitterImg.png": "Плејсхолдер 2",
  "youtubeImg.png": "Плејсхолдер 4"
};

const img = document.querySelectorAll(".projectsList img");
const projectPreview = document.querySelector(".previewProject img");
const projectDesc = document.querySelector(".projectDescription p");
console.log(projectPreview);
[...img].forEach(image => {
  image.onmouseover = () => {
    let url = image.src.substring(image.src.lastIndexOf("/") + 1);
    console.log(url);
    projectPreview.src = "assets/images/" + url;
    projectDesc.innerHTML = projectDescriptions[url];
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
