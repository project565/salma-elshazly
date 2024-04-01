const menuIcon = document.querySelector(".menu-icon");
const boxShadow = document.querySelector(".box-shadow");
const closeBtn = document.querySelector(".close-btn");
const slider = document.querySelector(".slider");
menuIcon.addEventListener("click", () => {
  boxShadow.style.display = "block";
  slider.style.left = "0";
});
closeBtn.addEventListener("click", () => {
  boxShadow.style.display = "none";
  slider.style.left = "-200%  ";
});
// SHANGE COLORS
const lis = document.querySelectorAll(".color-ul li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color)
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// MOODES
const darkBtn = document.querySelector(".dark-btn");
const lightBtn = document.querySelector(".light-btn");
const darkDev = document.querySelector(".dark-theme");
const lightDev = document.querySelector(".light-theme");
darkBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--white-color", "#0b0e0d");
  document.documentElement.style.setProperty("--black-color", "#fdfcf8");
});
lightBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--white-color", "#fdfcf8");
  document.documentElement.style.setProperty("--black-color", "#0b0e0d");
});
// OPENING SECTION
const openBtn = document.querySelector(".opening-btn");
const uesr = document.getElementById("uesr");
const username = document.querySelector(".username");
const error = document.querySelector(".error");
const openingDev = document.querySelector(".opening-dev");
openBtn.addEventListener("click", () => {
  if (uesr.value === "") {
    error.style.display = "block";
  } else {
    openingDev.classList.add("active");
  }
  username.innerHTML = uesr.value;
});
// BUTTONS
const btns = document.querySelectorAll(".buttons button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// BUTTONS CONTROL
const allBtn = document.querySelector(".all-btn");
const logoBtn = document.querySelector(".logo-btn");
const bannerBtn = document.querySelector(".banner-btn");
const cards = document.querySelectorAll(".gallery .card");

allBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.style.display = "block";
  });
});

logoBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.classList.contains("logo")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

bannerBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.classList.contains("banner")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ABOUT SECTION  
let spans = document.querySelectorAll(".prog span");
window.onscroll = function() {
  console.log(window.scrollY)
  if (window.scrollY >= 1223) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = "0";
    });
  }
  if (window.scrollY >= 1458) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }else {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}