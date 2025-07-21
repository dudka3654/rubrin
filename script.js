document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');

    const dynamicContent = `
        <div class="badge"></div>
        <h1>🎰 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ 🎰<br>МОЖНО ЗАБРАТЬ В ЛЮБОМ ПРОЕКТЕ НИЖЕ</h1>
        <div class="warning">⚠️ Важно: перед заходом на сайт выключить VPN ⚠️</div>
        <a href="https://example.com/irwin-bonus-link" class="btn">🇰🇿 🇷🇺 IRWIN 400 FS 🇰🇿 🇷🇺</a>  // Замени на реальную ссылку для Irwin
        <a href="https://example.com/flagman-bonus-link" class="btn">🇰🇿 🇷🇺 FLAGMAN 400 FS 🇰🇿 🇷🇺</a>  // Замени на реальную ссылку для Flagman
        <a href="https://example.com/martin-bonus-link" class="btn">🇰🇿 🇷🇺 MARTIN 400 FS 🇰🇿 🇷🇺</a>  // Замени на реальную ссылку для Martin
        <a href="https://example.com/global-bonus-link" class="btn">🎁 GET A 400 FREE SPINS BONUS 🌍</a>  // Замени на реальную глобальную бонус-ссылку
        <a href="https://t.me/your-telegram-channel" class="btn telegram-btn">📢 Telegram: бонусы, розыгрыши, ваучеры</a>  // Замени на ссылку на твой Telegram-канал
        <footer>© 2025 Promo Site. All rights reserved.</footer>
    `;

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
