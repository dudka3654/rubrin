document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    const userLang = navigator.language || navigator.userLanguage;  // Простая персонализация по языку браузера

    // Базовый контент (изменяйте здесь структуру: добавляйте/удаляйте кнопки, текст, testimonials)
    let heroText = '<img src="logo.png" alt="400 Spins" class="logo" style="width: 150px; animation: fadeIn 1s;">';  // Логотип
    heroText += '<h1>Забери 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ Прямо Сейчас!</h1>';
    heroText += '<p>Важно: Выполни ВЫН перед входом и получи максимум бонусов!</p>';
    heroText += '<button onclick="openModal()" class="button purple-gradient">Открыть Секретный Бонус-Бокс 🎁</button>';  // Интерактивная кнопка

    // Кнопки бонусов (изменяйте href, текст, классы для градиентов)
    let bonuses = '';
    if (userLang.startsWith('ru') || userLang.startsWith('kz')) {  // Персонализация для RU/KZ
        bonuses += '<a href="https://example.com/irwin" class="button red-gradient">KZ RU IRWIN: 400 FS + Эксклюзив</a>';
        bonuses += '<a href="https://example.com/flagman" class="button blue-gradient">KZ RU FLAGMAN: 400 FS для Новичков</a>';
        bonuses += '<a href="https://example.com/martin" class="button purple-gradient">KZ RU MARTIN: 400 FS + Cashback</a>';
    } else {  // Для других (EN-версия)
        bonuses += '<a href="https://example.com/bonus" class="button red-gradient">Get 400 Free Spins Bonus: KZ UA BY DE FR GB PL CA US NL & More!</a>';
    }

    // Testimonials (добавьте больше для доверия)
    let testimonials = '<div class="testimonial">"Выиграл 5000 с первого спина! Бонусы реальные." - Алексей, RU</div>';
    testimonials += '<div class="testimonial">"Лучшие офферы, быстрый вывод." - Anna, KZ</div>';

    // Footer с TG
    let footer = '<a href="https://t.me/yourchannel" class="button blue-gradient">📣 Telegram: Бонусы, Розыгрыши, Байеры</a>';

    // Собираем всё (A/B-тест: случайный цвет для первой кнопки)
    const randomColor = Math.random() > 0.5 ? 'red-gradient' : 'blue-gradient';  // Простой A/B-тест
    const dynamicContent = heroText + bonuses.replace('red-gradient', randomColor) + testimonials + footer;

    container.innerHTML = dynamicContent;
});

// Функции для модального окна (интерактив)
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
