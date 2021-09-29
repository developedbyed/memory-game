document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  cardGenerator();
  board();
});

const cardGenerator = () => {
  //We generate the object 🧑🏻‍💻
  let cardData = [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
  ];

  //We need to shuffle the cards 🃏
  cardData.sort(() => Math.random() - 0.5);

  //We generate the cards ♣️
  cardData.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;

    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      console.log(e);
      //Run our flip animation
      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
    });
  });

  //
};

const board = () => {
  console.log("i will fight you");
};

//Toggle Cards
// document.addEventListener("click", (event) => {
//   console.log(event);
//   if(event.target === '')
// });
