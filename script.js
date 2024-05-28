const data = [
  {
    path: "./images/c1.jpg",
    content: `I obtained certifications in Web
    App Development Workshop and
    Zoho Creator Examination from
    zitacad on 14,06,2023`,
  },
  {
    path: "./images/c2.jpg",
    content: `I received an appreciation
        certificate from Dhatchan
        Academy for a coding event
        held on April 30, 2023`,
  },
  {
    path: "./images/c3.jpg",
    content: `I successfully completed the SQL
    Query Language certification
    from the Simplilearn platform
    on October 22, 2023.`,
  },

  {
    path: "./images/c4.jpg",
    content: `I completed frontend
        certification course on oct 2023`,
  },
  {
    path: "./images/c5.jpg",
    content: `I completed a Python language
    certification course on April 28,
    2022.`,
  },
];

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const card = document.querySelector(".card-content");

const image = document.querySelector(".img");
const content = document.querySelector(".content-info");

let currentIndex = 0;
const AUTO_CHANGE_TIME = 10000;
let time = null;
const changeImage = () => {
  card.classList.add("fade");
  if (time) {
    clearInterval(time);
  }
  time = setTimeout(() => {
    card.classList.remove("fade");
  }, 1000);
  if (currentIndex > data.length - 1) {
    currentIndex = 0;
  }

  image.src = data[currentIndex].path;
  content.innerHTML = data[currentIndex].content;
};

document.addEventListener("DOMContentLoaded", () => {
  changeImage();
});
const handleLeftClick = () => {
  if (currentIndex == 0) {
    currentIndex = data.length;
  }
  currentIndex--;
  changeImage();
};
const handleRightClick = () => {
  currentIndex++;
  changeImage();
};

rightBtn.addEventListener("click", handleRightClick);
leftBtn.addEventListener("click", handleLeftClick);

//auto change
const handleAutoChange = () => {
  currentIndex++;
  changeImage();
};
// setInterval(handleAutoChange, AUTO_CHANGE_TIME);

