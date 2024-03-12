// ANALYZER DATA START CODE

// Load Data From Files
let surveyData = await loadTextFile("data/survey-results.txt");
let ageData = await loadTextFile("data/age-data.txt");
let numberData = await loadTextFile("data/number-data.txt");

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yes = 0;
  let maybe = 0;
  let no = 0;

  for (let i = 0; i < surveyData.length + 1; i++) {
    if (surveyData[i] === "Yes") {
      yes++;
    } else if (surveyData[i] === "Maybe") {
      maybe++;
    } else {
      no++;
    }
  }
  outputEl.innerHTML = `<div># of yes: ${yes}</div><div># of maybe: ${maybe}</div><div># of no: ${no}</div> `;
  console.log(yes, maybe, no);
}

function traverseAgeData() {
  let minors = 0;
  let prime = 0;
  let experienced = 0;
  let wise = 0;
  // Traverse the ageData array to:
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      minors++;
    } else if (ageData[i] <= 35) {
      prime++;
    } else if (ageData[i] <= 65) {
      experienced++;
    } else {
      wise++;
    }
  }

  outputEl.innerHTML = `<div>Minors(0 to 18): ${minors}</div><div> New Adult(18 to 35): ${prime}</div><div>Experienced adult(36 to 65): ${experienced}</div><div>Old Wise Adult(65+): ${wise}</div> `;
  console.log(prime, minors, experienced, wise);
}

function traverseNumberData() {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] / 2 === Math.floor(numberData[i] / 2)) {
      even++;
    } else {
      odd++;
    }

    outputEl.innerHTML = `odd: ${odd}, even : ${even}`;
    console.log(numberData);
  }
}
