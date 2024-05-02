let currentIndex = 0;
let childrenNames = localStorage.getItem("childrenNames");
let namesArray = JSON.parse(childrenNames);

namesArray = namesArray.map(name =>
    name.replace(/\b\w/g, char => char.toUpperCase())
);

function handleToStationClick() {
  const currentContent = data[currentIndex];
  displayContent(currentContent);
  createResponse(currentContent);

  const aboutCharacter = document.querySelector(`.Om.${currentContent.character.name}`);
  aboutCharacter.addEventListener("click", function () {
    renderCharacterInfo(currentContent.character.name);
  });

  const tipsButton = document.querySelector(".Tips");
  tipsButton.addEventListener("click", function () {
    renderTipPopUp(currentContent.id, "tipsFromPreviousCharacter");
  });

  const mapButton = document.querySelector(".Karta");
  mapButton.addEventListener("click", function () {
    renderCurrentLocationView(currentContent);
  });
}

function displayContent(currentContent) {
  document.body.innerHTML = `
      <main class="station-main">
        <div class="station-buttons">
          ${createButtonGroup("fas fa-question", "Tips")}
          ${createButtonGroup("fas fa-map-marker-alt", "Karta")}
          ${createButtonGroup("fas fa-paw", `Om ${currentContent.character.name}`)}
        </div>

        <div class="question-content">
          <p class="question-description">
            ${currentContent.questDescription}
          </p>

          <div class="alternatives-container"></div>
          <div class="response-container"></div>
        </div>
      </main>
    `;
}

function createResponse(currentContent) {
  const alternatives = currentContent.alternatives;
  const questionType = currentContent.questionType;
  const responseContainer = document.querySelector(".response-container");
  const alternativesContainer = document.querySelector(".alternatives-container");

  if (questionType === "challenge") {
    const button = document.createElement("button");
    button.classList = "challenge-done";
    button.innerText = "Klar med utmaning";
    responseContainer.appendChild(button);

    const challengeDoneButton = document.querySelector(".challenge-done");
    if (challengeDoneButton) {
      challengeDoneButton.addEventListener("click", () => {
        renderTipPopUp(currentContent.id, "tipsFromCurrentCharacter");
      });
    }
  } else if (questionType === "text") {
    alternatives.forEach((alternative) => {
      const button = document.createElement("button");
      button.classList = "alternative-button alternative-text";
      button.innerText = alternative.text;
      button.setAttribute("data-id", alternative.id);
      alternativesContainer.appendChild(button);
    });
  } else if (questionType === "image") {
    alternatives.forEach((alternative) => {
      const button = document.createElement("button");
      const img = document.createElement('img');
      button.classList = "alternative-button alternative-image";
      img.src = "../NallePuh/media/" + alternative.imgSrc;
      img.setAttribute("alt", alternative.name);
      img.setAttribute("data-id", alternative.id);
      button.appendChild(img);
      alternativesContainer.appendChild(button);
    });
  }

    document.querySelectorAll(".alternative-button").forEach(button => {
      button.addEventListener("click", (event) => {
        checkAnswer(event, currentContent, "createAlternatives");
      });
    });
}

function checkAnswer(event, currentContent, context) {
  const target = event.target;
  const targetId = parseInt(target.getAttribute("data-id"));

  const alternatives = currentContent.alternatives;

  const correctAlternative = alternatives.find((alternative) => {
    return alternative.correct === "true";
  });

  const isCorrect = targetId === correctAlternative.id;

  if (context === "createAlternatives") {
    if (isCorrect) {
      renderTipPopUp(currentContent.id, "tipsFromCurrentCharacter");
    } else {
      renderTryAgainMessage();
    }
  } else if (context === "renderLastStation") {
    if (isCorrect) {
      renderDownloadDiplomaPage();
    } else {
      renderTryAgainMessage();
    }
  }
}

let warningTimer = null;

function renderTryAgainMessage() {
  if (!warningTimer) {
    const alternativesContainer = document.querySelector(".alternatives-container");
    const warning = document.createElement("div");
    warning.textContent = "Svaret är fel. Försök igen :)";
    warning.classList.add("try-again-warning");

    alternativesContainer.parentNode.insertBefore(warning, alternativesContainer.nextSibling);

    warningTimer = setTimeout(() => {
      warning.remove();
      warningTimer = null;
    }, 2000);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createButtonGroup(iconClass, text) {
  return `
    <div class="button-group">
      <div class="icon-container ${text}">
        <i class="${iconClass}"></i>
      </div>${text}
    </div>
  `;
}

function renderLastStation() {
  const lastQuestion = data.find(item => item.id === 6);
  const questDescription = lastQuestion.questDescription;
  const alternatives = createAlternativesLastStation(lastQuestion);

  let congratulationMessage = "Grattis";
  if (namesArray.length === 1) {
    congratulationMessage += ` ${namesArray[0]}!`;
  } else if (namesArray.length === 2) {
    congratulationMessage += ` ${namesArray[0]} och ${namesArray[1]}!`;
  } else {
    congratulationMessage += ` ${namesArray.slice(0, -1).join(', ')} och ${namesArray.slice(-1)}!`;
  }

  body.innerHTML = `
    <main class="station-main final-main">
      <div class="final-station-container">
        <div class="final-station-text-container">
            <p class="congrats-title">${congratulationMessage}</p>
        </div>
        <div class="question-content">
          <div class="congrats-description">${questDescription}</div>
          <div class="alternatives-container">${alternatives}</div>
        </div>
      </div>
    </main>
  `;

  document.querySelectorAll(".alternative-button").forEach(button => {
    button.addEventListener("click", (event) => {
      checkAnswer(event, lastQuestion, "renderLastStation");
    });
  });
}

function createAlternativesLastStation(currentContent) {
  const alternatives = currentContent.alternatives;
  let alternativesHTML = "";

  alternatives.forEach((alternative) => {
    alternativesHTML += `
      <button class="alternative-button">
        <img src="../NallePuh/media/${alternative.imgSrc}" alt="${alternative.name}" data-id="${alternative.id}">
      </button>
    `;
  });

  return alternativesHTML;
}
