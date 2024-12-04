const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");
const currentWork = document.getElementById("currentWork");
const previousWork = document.getElementById("previousWork");
const currentPlay = document.getElementById("currentPlay");
const previousPlay = document.getElementById("previousPlay");
const currentStudy = document.getElementById("currentStudy");
const previousStudy = document.getElementById("previousStudy");
const currentExercise = document.getElementById("currentExercise");
const previousExercise = document.getElementById("previousExercise");
const currentSocial = document.getElementById("currentSocial");
const previousSocial = document.getElementById("previousSocial");
const currentCare = document.getElementById("currentCare");
const previousCare = document.getElementById("previousCare");

let jsonData = "";

async function apiCall() {
  const response = await fetch("data/data.json");
  const data = await response.json();
  jsonData = data;
  startFunction(data);
};

  function displayText(dates, times)
{
  currentWork.innerText = `${jsonData[0].timeframes[times].current}hrs`;
  previousWork.innerText = `${dates} - ${jsonData[0].timeframes[times].previous}hrs`;

  currentPlay.innerText = `${jsonData[1].timeframes[times].current}hrs`;
  previousPlay.innerText = `${dates} - ${jsonData[1].timeframes[times].previous}hrs`;

  currentStudy.innerText = `${jsonData[2].timeframes[times].current}hrs`;
  previousStudy.innerText = `${dates} - ${jsonData[2].timeframes[times].previous}hrs`;

  currentExercise.innerText = `${jsonData[3].timeframes[times].current}hrs`;
  previousExercise.innerText = `${dates} - ${jsonData[3].timeframes[times].previous}hrs`;

  currentSocial.innerText = `${jsonData[4].timeframes[times].current}hrs`;
  previousSocial.innerText = `${dates} - ${jsonData[4].timeframes[times].previous}hrs`;

  currentCare.innerText = `${jsonData[5].timeframes[times].current}hrs`;
  previousCare.innerText = `${dates} - ${jsonData[5].timeframes[times].previous}hrs`;
}

function startFunction(populate){
  dailyBtn.className = "timeBtn marginLeft";
  weeklyBtn.className = "timeBtn marginLeft timeSelect";
  monthlyBtn.className = "timeBtn marginLeft";
  displayText("Last Week", "weekly");
}

dailyBtn.addEventListener ("click", () => {
  dailyBtn.className = "timeBtn marginLeft timeSelect";
  weeklyBtn.className = "timeBtn marginLeft";
  monthlyBtn.className = "timeBtn marginLeft";
  displayText("Yesterday", "daily");
});

weeklyBtn.addEventListener ("click", () => {
  dailyBtn.className = "timeBtn marginLeft";
  weeklyBtn.className = "timeBtn marginLeft timeSelect";
  monthlyBtn.className = "timeBtn marginLeft";
  displayText("Last Week", "weekly");
});

monthlyBtn.addEventListener ("click", () => {
  dailyBtn.className = "timeBtn marginLeft";
  weeklyBtn.className = "timeBtn marginLeft";
  monthlyBtn.className = "timeBtn marginLeft timeSelect";
  displayText("Last Month", "monthly");
});

apiCall();