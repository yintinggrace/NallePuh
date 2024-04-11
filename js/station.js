let currentIndex = 0;

function displayContent(index) {
    const currentContent = data[index];

    document.body.innerHTML = `
      <main class="station-main">
        <div class="station-buttons">
          ${createButtonGroup('fas fa-question', 'Tips')}
          ${createButtonGroup('fas fa-map-marker-alt', 'Karta')}
          ${createButtonGroup('fas fa-paw', `Om ${currentContent.character.name}`)}
        </div>
      </main>
    `;
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
