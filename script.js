const closeBtn = document.getElementById("close");
const login = document.querySelector(".login");

const userBtn = document.getElementById("user");
const menuBtn = document.getElementById("menu");
const sideMenu = document.getElementById("side-menu");

const collegeBtn = document.getElementById("college");
const examBtn = document.getElementById("exam");
const collegeData = document.querySelectorAll(".college-data");

const data = [
  { colleges: 5728, exams: 81 },
  { colleges: 4528, exams: 130 },
  { colleges: 1425, exams: 27 },
  { colleges: 628, exams: 16 },
  { colleges: 478, exams: 28 },
  { colleges: 4056, exams: 38 },
  { colleges: 134, exams: 0 },
  { colleges: 384, exams: 32 },
  { colleges: 341, exams: 14 },
  { colleges: 64, exams: 21 },
  { colleges: 2022, exams: 35 },
  { colleges: 850, exams: 50 },
  { colleges: 325, exams: 12 },
  { colleges: 1040, exams: 45 },
  { colleges: 4056, exams: 72 },
  { colleges: 3784, exams: 52 },
  { colleges: 1159, exams: 5 },
  { colleges: 840, exams: 10 },
  { colleges: 945, exams: 5 },
];

closeBtn.addEventListener("click", () => {
  login.style.visibility = "hidden";
  login.style.display = "none";
});

userBtn.addEventListener("click", () => {
  login.style.visibility = "visible";
  login.style.display = "flex";
});

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Hide the side bar when clicked outside
document.addEventListener("mouseup", (e) => {
  if (!sideMenu.contains(e.target)) {
    sideMenu.style.display = "none";
  }
});

const setCollegeData = (type) => {
  for (let i = 0; i < collegeData.length; i++) {
    collegeData[i].innerHTML = `${
      data[i][type]
    } ${type[0].toUpperCase()}${type.substring(1)}`;
  }
};

collegeBtn.addEventListener("click", () => {
  if (!collegeBtn.classList.contains("active"))
    collegeBtn.classList.add("active");

  examBtn.classList.remove("active");

  setCollegeData("colleges");
});

examBtn.addEventListener("click", () => {
  examBtn.classList.add("active");
  collegeBtn.classList.remove("active");
  setCollegeData("exams");
});
