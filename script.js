document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    const userLang = navigator.language || navigator.userLanguage;

    // Баннер с промокодом (текст поверх изображения)
    let heroText = '<div style="position: relative;">';
    heroText += '<img src="banner.png" alt="Баннер" class="banner">';
    heroText += '<div class="promo-code" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Промокод: SPINS400</div>';
    heroText += '</div>';
    heroText += '<h1>Забери 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ!</h1>';
    heroText += '<p>Важно: Введи промокод перед входом!</p>';
    heroText += '<button onclick="openModal()" class="button-img" style="background-image: url(\'bonus-box-btn.png\');"></button>';

    // 4 кнопки с фото
    let bonuses = '';
    if (userLang.startsWith('ru') || userLang.startsWith('kz')) {
        bonuses += '<a href="https://example.com/irwin"><img src="irwin-btn.png" alt="Irwin" class="button-img"></a>';
        bonuses += '<a href="https://example.com/flagman"><img src="flagman-btn.png" alt="Flagman" class="button-img"></a>';
        bonuses += '<a href="https://example.com/martin"><img src="martin-btn.png" alt="Martin" class="button-img"></a>';
        bonuses += '<a href="https://example.com/bonus"><img src="bonus-btn.png" alt="Bonus" class="button-img"></a>';  // 4-я кнопка
    } else {
        bonuses += '<a href="https://example.com/global"><img src="bonus-btn.png" alt="Global" class="button-img"></a>';
    }

    let testimonials = '<div class="testimonial">"Выиграл 5000!" - Алексей</div>';
    testimonials += '<div class="testimonial">"Лучшие бонусы!" - Anna</div>';

    let footer = '<a href="https://t.me/yourchannel"><img src="telegram-btn.png" alt="Telegram" class="button-img"></a>';

    const dynamicContent = heroText + bonuses + testimonials + footer;

    container.innerHTML = dynamicContent;
});

function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
