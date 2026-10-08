const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const lessonCode = document.getElementById("lesson-code");
const progressHint = document.getElementById("progress-hint");
const stepLabel = document.getElementById("step-label");
const progressFill = document.getElementById("progress-fill");
const themeButton = document.querySelector("#themeButton");

const clickDemo = document.getElementById("click-demo");
const clickMessage = document.getElementById("click-message");
const clickCount = document.getElementById("click-count");
const changeTextButton = document.getElementById("change-text");
const toggleClassButton = document.getElementById("toggle-class");
const resetButton = document.getElementById("reset-preview");
const domPreview = document.getElementById("dom-preview");

const previewMessages = [
  "Hello from the DOM.",
  "textContent just replaced this sentence.",
  "Same element. New text."
];

let clicks = 0;
let previewIndex = 0;

function showTab(selectedTab) {
  const panelId = selectedTab.getAttribute("data-panel");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  selectedTab.classList.add("active");

  panels.forEach((panel) => {
    panel.classList.remove("active");
  });

  const selectedPanel = document.getElementById(panelId);
  selectedPanel.classList.add("active");

  progressFill.classList.remove("is-step-1");
  progressFill.classList.remove("is-step-2");
  progressFill.classList.remove("is-step-3");
  progressFill.classList.remove("is-step-4");

  if (panelId === "panel-1") {
    lessonCode.textContent = "LESSON 01";
    progressHint.textContent = "Getting Started";
    stepLabel.textContent = "1 / 4";
    progressFill.classList.add("is-step-1");
  }

  if (panelId === "panel-2") {
    lessonCode.textContent = "LESSON 02";
    progressHint.textContent = "Selecting Elements";
    stepLabel.textContent = "2 / 4";
    progressFill.classList.add("is-step-2");
  }

  if (panelId === "panel-3") {
    lessonCode.textContent = "LESSON 03";
    progressHint.textContent = "Click Events";
    stepLabel.textContent = "3 / 4";
    progressFill.classList.add("is-step-3");
  }

  if (panelId === "panel-4") {
    lessonCode.textContent = "LESSON 04";
    progressHint.textContent = "Updating the DOM";
    stepLabel.textContent = "4 / 4";
    progressFill.classList.add("is-step-4");
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showTab(tab);
  });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

clickDemo.addEventListener("click", () => {
  clicks = clicks + 1;
  clickCount.textContent = clicks;
  clickMessage.textContent = "Event received ✓";
  clickMessage.classList.add("is-received");
});

changeTextButton.addEventListener("click", () => {
  previewIndex = previewIndex + 1;

  if (previewIndex > 2) {
    previewIndex = 0;
  }

  domPreview.textContent = previewMessages[previewIndex];
});

toggleClassButton.addEventListener("click", () => {
  domPreview.classList.toggle("is-highlighted");
});

resetButton.addEventListener("click", () => {
  previewIndex = 0;
  domPreview.textContent = previewMessages[0];
  domPreview.classList.remove("is-highlighted");
});
