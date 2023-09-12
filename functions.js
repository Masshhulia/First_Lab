fetch('translate.json')
  .then(response => response.json())
  .then(translations => {
    // Функция применения переводов
    function applyTranslations(language) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[language][key];
        if (translation) {
          element.textContent = translation;
        }
      });
    }
 // Применение переводов при загрузке страницы (по умолчанию на английский)
 document.addEventListener('DOMContentLoaded', function () {
    applyTranslations('en');
  });

  // Обработчики событий для кнопок переключения языка
  document.getElementById('switch-to-english').addEventListener('click', function () {
    applyTranslations('en'); // Устанавливаем язык на английский
  });

  document.getElementById('switch-to-russian').addEventListener('click', function () {
    applyTranslations('ru'); // Устанавливаем язык на русский
  });
})
.catch(error => console.error('Ошибка при загрузке JSON файла:', error));

const buttons = document.querySelectorAll('button');

// Создаем функцию для удаления класса "active" у всех кнопок
function removeActiveClass() {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
}

// Создаем функцию для обработки клика на кнопке
function handleButtonClick(event) {
  // Удаляем класс "active" у всех кнопок
  removeActiveClass();
  
  // Добавляем класс "active" на кнопку, на которой произошел клик
  event.target.classList.add('active');
}

// Добавляем обработчик клика на каждую кнопку
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');

let isPlaying = false;

playPauseButton.addEventListener('click', togglePlay);

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updateButton();
}

function updateButton() {
  if (isPlaying) {
    playPauseButton.classList.add('pause');
    playPauseButton.textContent = '';
  } else {
    playPauseButton.classList.remove('pause');
    playPauseButton.textContent = '';
  }
}

audio.addEventListener('ended', () => {
  isPlaying = false;
  updateButton();
});

document.addEventListener('DOMContentLoaded', function () {
  const portfolioBtn = document.querySelector('.btn');
  const portfolioImages = document.querySelectorAll('.big_img');

  let currentIndex = 0;

  portfolioBtn.addEventListener('click', () => {
    // Изменяем src текущего изображения
    portfolioImages[currentIndex].src = `css/pictures/${currentIndex + 2}.png`;

    // Увеличиваем индекс или сбрасываем его на 0, если достигнут конец списка
    currentIndex = (currentIndex + 1) % portfolioImages.length;
  });
});


