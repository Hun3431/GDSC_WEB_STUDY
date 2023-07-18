const messageContainer = document.getElementById("target-message");
const container = document.getElementById("d-day-container");

const savedDate = localStorage.getItem("saved-date");

//messageContainer.textContent = "D-Day를 입력해주세요.";
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
container.style.display = "none";

const intervalIdArr = [];

const dateFormMaker = () => {
  const inputYear = document.getElementById("year").value;
  const inputMonth = document.getElementById("month").value;
  const inputDate = document.getElementById("day").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const counterMaker = (data) => {
  if (savedDate !== data) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // remaining === 0 : 목표시간 도달
  // if(remaining === 0) console.log("타이머가 종료되었습니다.")

  console.log(remaining);

  if (remaining <= 0) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDay: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };
  const documentObj = {
    days: document.getElementById("days"),
    hour: document.getElementById("hour"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  const timeKeys = Object.keys(remainingObj);

  const format = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let key in documentObj) {
    const remainingTime = format(remainingObj[timeKeys[i++]]);
    documentObj[key].textContent = remainingTime;
  }
};

const starter = (targetDate) => {
  if (!targetDate) {
    targetDate = dateFormMaker();
  }
  setClearInterval();
  //const targetDate = dateFormMaker();

  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker(targetDate);
  const intervalId = setInterval(() => counterMaker(targetDate), 1000);
  intervalIdArr.push(intervalId);
};

const setClearInterval = () => {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = () => {
  container.style.display = "none";
  messageContainer.style.display = "flex";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
  console.log(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
}
