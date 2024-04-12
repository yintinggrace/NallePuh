let currentIndex = 0;

const toStation = document.getElementById('to-station');
toStation.addEventListener('click', function() {
  const currentContent = data[currentIndex];
  displayContent(currentContent);
  createAlternatives(currentContent);
});

function displayContent(currentContent) {
    document.body.innerHTML = `
      <main class="station-main">
        <div class="station-buttons">
          ${createButtonGroup('fas fa-question', 'Tips')}
          ${createButtonGroup('fas fa-map-marker-alt', 'Karta')}
          ${createButtonGroup('fas fa-paw', `Om ${currentContent.character.name}`)}
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
      const button = document.createElement('button');
      button.classList = "alternative-button alternative-text";
      button.innerText = alternative.text;
      alternativesContainer.appendChild(button);
    });
  } else if (alternativeType === "image") {
    alternatives.forEach((alternative) => {
      const button = document.createElement('button');
      const img = document.createElement('img');
      button.classList = "alternative-button alternative-image";
      img.src = "../media/" + alternative.imgSrc;
      button.appendChild(img);
      alternativesContainer.appendChild(button);
    });
  }

  return alternativesDiv.innerHTML;
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
      <div class="icon-container">
        <i class="${iconClass}"></i>
      </div>${text}
    </div>
  `;
}
