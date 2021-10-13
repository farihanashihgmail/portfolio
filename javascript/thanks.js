// local reviews data
const reviews = [
    {
        id: 1,
        name: "codefoxx",
        job: "Image Carousel",
        img: "https://yt3.ggpht.com/vNKDWKMAB_6VyyCjKJaDKFIYfiU9s3S3DLEPZSSf33F_gOvIxy7gzOoVkGiCPWJTSCoAGoJ7=s900-c-k-c0x00ffffff-no-rj",
        text: "Bagaimana cara membuat aplikasi carousel gambar HTML dari awal menggunakan JavaScript? Lihat situs web proyek pemula JavaScript resmi saya: https://jsprospect.com/",
},
    {
        id: 2,
        name: "Kevin Simper",
        job: "Contact Form with Javascript",
        img: "https://avatars.githubusercontent.com/u/1126497?v=4",
        text: "In this video, I show how to make a working contact form and validate the user input so that the form will not submit before it is correct. We then use a service called formspree.io to actually send a real email to yourself."

},
    {
        id: 3,
        name: "Dev Ed",
        job: "Responsive Navigation Bar Tutorial",
        img: "https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj",
        text: "My take on making a responsive navigation bar in 2018 with media queries and a sprinkle of animations and javascript. In this tutorial we are going to learn media queries, keyframe animations, basic javascript toggling, building a burger menu and more!"

},
    {
        id: 4,
        name: "freeCodeCamp.org",
        job: "Vanilla Javascript Course",
        img: "https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg",
        text: "Sharpen your JavaScript skills by building 15 projects using plain JavaScript without frameworks. In this tutorial course, you will be taught step-by-step how to build JavaScript projects."

},
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
} 

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})