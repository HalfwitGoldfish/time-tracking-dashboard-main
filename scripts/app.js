const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

dailyBtn.addEventListener ("click", () => {
    dailyBtn.className = "timeBtn paddingLeft timeSelect";
    weeklyBtn.className = "timeBtn paddingLeft";
    monthlyBtn.className = "timeBtn paddingLeft";
});

weeklyBtn.addEventListener ("click", () => {
    dailyBtn.className = "timeBtn paddingLeft";
    weeklyBtn.className = "timeBtn paddingLeft timeSelect";
    monthlyBtn.className = "timeBtn paddingLeft";
});

monthlyBtn.addEventListener ("click", () => {
    dailyBtn.className = "timeBtn paddingLeft";
    weeklyBtn.className = "timeBtn paddingLeft";
    monthlyBtn.className = "timeBtn paddingLeft timeSelect";
});

function apiCall() {
    fetch(
      "data/data.json"
    )
      // initializing our fetch from our endpoint
  
      .then((response) => {
        return response.json();
      })
  
      .then((data) => {
        console.log(data);
      });
}

apiCall();
