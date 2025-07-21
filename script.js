document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    const userLang = navigator.language || navigator.userLanguage;

    let heroText = '<h1>Забери 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ!</h1>';
    heroText += '<p>Важно: Введи промокод перед входом!</p>';
    heroText += '<button onclick="openModal()" class="button" data-promo="BOX400">Открыть Бонус</button>';

    let bonuses = '<div class="buttons-container">';  // Логичный ряд
    if (userLang.startsWith('ru') || userLang.startsWith('kz')) {
        bonuses += '<a href="https://example.com/irwin" class="button" data-promo="IRWIN400">Irwin 400 FS</a>';
        bonuses += '<a href="https://example.com/flagman" class="button" data-promo="FLAG400">Flagman 400 FS</a>';
        bonuses += '<a href="https://example.com/martin" class="button" data-promo="MARTIN400">Martin 400 FS</a>';
        bonuses += '<a href="https://example.com/bonus" class="button" data-promo="BONUS400">Глобальный Бонус</a>';
    } else {
        bonuses += '<a href="https://example.com/global" class="button" data-promo="GLOBAL400">Global 400 FS</a>';
    }
    bonuses += '</div>';

    let testimonials = '<div class="testimonial">"Выиграл 5000!" - Алексей</div>';
    testimonials += '<div class="testimonial">"Лучшие бонусы!" - Anna</div>';

    let footer = '<a href="https://t.me/yourchannel" class="button" data-promo="TGJOIN">Telegram</a>';

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
