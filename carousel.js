//recommendation Data

const carouselData = [
  {
    stars: 5,
    title: "Amazing Work!",
    text: `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Vitae nulla 
diam in ac dictum a urna viverra morbi. 
Morbi donec amet....`,
    userImage: "Images/profile/Profile3.jpg",
    name: "Tiana Philips",
    role: "Photographer" 
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Vitae nulla 
diam in ac dictum a urna viverra morbi. 
Morbi donec amet....`,
    userImage: "Images/profile/Profile4.jpg",
    name: "James Gouse",
    role: "Graphic Designer"
  },
  {
    stars: 5,
    title: "Amazing Work!",
    text: `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Vitae nulla 
diam in ac dictum a urna viverra morbi. 
Morbi donec amet....`,
    userImage: "Images/profile/Profile5.jpg",
    name: "Tiana Philips",
    role: "Photographer"
  },
  {
    stars: 5,
    title: "Great Quality!",
    text: `Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Vitae nulla 
diam in ac dictum a urna viverra morbi. 
Morbi donec amet....`,
    userImage: "Images/profile/Profile1.jpg",
    name: "James Gouse",
    role: "Graphic Designer"
  },
  {
    stars: 5,
    title: "Amazing Work!",
    text: `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Vitae nulla 
diam in ac dictum a urna viverra morbi. 
Morbi donec amet....`,
    userImage: "Images/profile/Profile2.jpg",
    name: "Tiana Philips",
    role: "Photographer" 
  }
];

// creating carousel dynamically using JS

const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("carouselDots");

carouselData.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");

  // Stars
  const starsDiv = document.createElement("div");
  starsDiv.classList.add("stars");
  for(let i = 0; i < item.stars; i++){
    const star = document.createElement("div");
    star.classList.add("star");
    starsDiv.appendChild(star);
  }
  div.appendChild(starsDiv);

  // carousel card
  div.innerHTML += `
    <div class="review-title"><h4>${item.title}</h4></div>
    <div class="review-text"><p>${item.text}</p></div>
    <div class="user-info">
      <img src="${item.userImage}" alt="User Image">
      <div class="details">
        <div class="name"><h4>${item.name}</h4></div>
        <div class="role"><p>${item.role}</p></div>
      </div>
    </div>
  `;

  track.appendChild(div);
});

const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

// creating dots
for(let i = 0; i < totalItems; i++){
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => moveCarousel(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
const itemWidth = items[0].offsetWidth + 25;

let currentIndex = 2;
let moving = false;

track.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));

function moveCarousel(index){
  if(moving) return;
  moving = true;
  currentIndex = index;

  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(${-itemWidth * index}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index % totalItems);
  });

  track.addEventListener("transitionend", () => {
    moving = false;

    if(currentIndex >= totalItems){
      track.style.transition = "none";
      currentIndex = 0;
      track.style.transform = `translateX(0px)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    }
  }, { once: true });
}
