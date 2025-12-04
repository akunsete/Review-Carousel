const next = document.getElementById("Next");
const back = document.getElementById("Back");
const nameUser = document.querySelector(".Name");
const jobUser = document.querySelector(".Job");
const imageUser = document.getElementById("Photos");
const descriptionUser = document.getElementById("Information");
const dataUser = [
    {
        name: "CatMemeindonesia",
        job: "Front-end",
        desc: "CatMemeindonesia adalah developer front-end yang bertujuan untuk membuat web dengan lebih dinamis dan juga praktis dengan melatih dirinya dengan berbabagai project.",
        photo: "Hoshino.jpg"
    },
    {
        name: "Arvino Mahendra",
        job: "Full-stack Developer",
        desc: "Renaldi menguasai front-end dan back-end, dan sering membuat project web dengan performa cepat. Ia fokus pada clean code dan sistem yang tahan lama.",
        photo: "Lilith.jpg"
    },
    {
        name: "Keiva Althania",
        job: "Junior Programmer",
        desc: "Asher adalah programmer pemula yang selalu ingin belajar hal baru. Ia sering membuat mini-project untuk melatih logika pemrogramannya dan memperdalam JavaScript.",
        photo: "Pity.png"
    },
];

let indexChange = 0;

function showReview(Index) {
    const item = dataUser[Index];
    imageUser.src = item.photo
    nameUser.textContent = item.name;
    jobUser.textContent = item.job;
    descriptionUser.textContent = item.desc;
};

showReview(indexChange);

next.addEventListener("click", function() {
    indexChange += 1;
    if(indexChange > dataUser.length - 1) {
        indexChange = 0;
    }
    showReview(indexChange)
})

back.addEventListener("click", function() {
    indexChange -= 1;
    if(indexChange < 0) {
        indexChange = dataUser.length - 1;
    }
    showReview(indexChange)
})