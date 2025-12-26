const board = document.getElementById("board");
const tg = window.Telegram.WebApp;

let selected = null;

const pieces = [
"♜","♞","♝","♛","♚","♝","♞","♜",
"♟","♟","♟","♟","♟","♟","♟","♟",
"","","","","","","","",
"","","","","","","","",
"","","","","","","","",
"","","","","","","","",
"♙","♙","♙","♙","♙","♙","♙","♙",
"♖","♘","♗","♕","♔","♗","♘","♖"
];

function draw() {
  board.innerHTML = "";
  for (let i = 0; i < 64; i++) {
    const c = document.createElement("div");
    c.className = "cell " + ((Math.floor(i/8)+i)%2 ? "black":"white");
    c.innerText = pieces[i];
    c.onclick = () => click(i);
    board.appendChild(c);
  }
}

function click(i) {
  if (selected === null) {
    selected = i;
  } else {
    const from = pos(selected);
    const to = pos(i);
    tg.sendData(from + to);
    selected = null;
  }
}

function pos(i) {
  return "abcdefgh"[i%8] + (8 - Math.floor(i/8));
}

draw();
