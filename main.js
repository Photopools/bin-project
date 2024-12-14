let computerNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let chancesArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () =>{
  userInput.value = "";
});

function pickRandomNumber() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1부터 100 사이의 숫자를 입력해주세요.";
    return;
  }

  if ( history.includes(userValue) ) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }

  chances --;
  chancesArea.textContent = `기회는 ${chances} 번 남았습니다.`;

  if (userValue == computerNumber) {
    resultArea.textContent = "축하합니다! 정답입니다!";
    playButton.disabled = true;
  } else if (userValue < computerNumber) {
    resultArea.textContent = "더 큰 수를 입력해보세요!";
  } else if (userValue > computerNumber) {
    resultArea.textContent = "더 작은 수를 입력해보세요!";
  }

  history.push(userValue);

  if (chances === 0) {
    resultArea.textContent = `기회를 모두 소진하였습니다. 정답은 ${computerNumber} 입니다.`;
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNumber();
  resultArea.textContent = "기회는 다섯번 입니다.";
  chancesArea.textContent = "남은 찬스";
}
pickRandomNumber();