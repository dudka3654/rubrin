document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');

    const dynamicContent = `
        <div class="badge"></div>
        <h1>🎰 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ 🎰<br>МОЖНО ЗАБРАТЬ В ЛЮБОМ ПРОЕКТЕ НИЖЕ</h1>
        <div class="warning">⚠️ Важно: перед заходом на сайт выключить VPN ⚠️</div>
        <a href="https://example.com/irwin" class="btn">🇰🇿 🇷🇺 IRWIN 400 FS 🇰🇿 🇷🇺</a>
        <a href="https://example.com/flagman" class="btn">🇰🇿 🇷🇺 FLAGMAN 400 FS 🇰🇿 🇷🇺</a>
        <a href="https://example.com/martin" class="btn">🇰🇿 🇷🇺 MARTIN 400 FS 🇰🇿 🇷🇺</a>
        <a href="https://example.com/bonus" class="btn">🎁 GET A 400 FREE SPINS BONUS 🌍</a>
        <a href="https://t.me/yourchannel" class="btn telegram-btn">📢 Telegram: бонусы, розыгрыши, ваучеры</a>
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
