let currentIndex = 0;

function handleToStationClick() {
  const currentContent = data[currentIndex];
  displayContent(currentContent);
  createAlternatives(currentContent);

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
    renderCurrentLocationView();
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
        </div>
      </main>
    `;
}

function createAlternatives(currentContent) {
  const alternatives = currentContent.alternatives;
  const alternativeType = currentContent.alternativeType;
  const alternativesContainer = document.querySelector(".alternatives-container");

  shuffleArray(alternatives);

  if (alternativeType === "text") {
    alternatives.forEach((alternative) => {
      const button = document.createElement("button");
      button.classList = "alternative-button alternative-text";
      button.innerText = alternative.text;
      button.setAttribute("data-id", alternative.id);
      alternativesContainer.appendChild(button);
    });
  } else if (alternativeType === "image") {
    alternatives.forEach((alternative) => {
      const button = document.createElement("button");
      const img = document.createElement('img');
      button.classList = "alternative-button alternative-image";
      img.src = "../media/" + alternative.imgSrc;
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
  const lastQuestion = data.find(item => item.id === 5);
  const questDescription = lastQuestion.questDescription;
  const alternatives = createAlternativesLastStation(lastQuestion);

  body.innerHTML = `
    <main class="station-main final-main">
      <div class="final-station-container">
        <div class="final-station-text-container">
            <p class="congrats-title">Grattis!</p>
        </div>
        <div class="question-content">
          <div class="congrats-description">${questDescription}</div>
          <div class=" alternatives-container">${alternatives}</div>
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
        <img src="../media/${alternative.imgSrc}" alt="${alternative.name}" data-id="${alternative.id}">
      </button>
    `;
  });

  return alternativesHTML;
}

function renderDownloadDiplomaPage() {
  body.innerHTML = `
    <div>DownloadDiplomaPage</div>
  `;
}
