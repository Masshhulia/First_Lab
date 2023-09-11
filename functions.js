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