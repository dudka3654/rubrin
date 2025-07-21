document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');

    const dynamicContent = `
        <div class="badge"></div>
        <h1>🎰 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ 🎰<br>МОЖНО ЗАБРАТЬ В ЛЮБОМ ПРОЕКТЕ НИЖЕ</h1>
        <div class="warning">⚠️ Важно: перед заходом на сайт выключить VPN ⚠️</div>
        <div class="buttons-container">
            <a href="https://example.com/irwin" class="btn" target="_blank">🇰🇿 🇷🇺 IRWIN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/flagman" class="btn" target="_blank">🇰🇿 🇷🇺 FLAGMAN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/martin" class="btn" target="_blank">🇰🇿 🇷🇺 MARTIN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/bonus" class="btn" target="_blank">🎁 GET A 400 FREE SPINS BONUS 🌍</a>
            <a href="https://t.me/yourchannel" class="btn telegram-btn" target="_blank">📢 Telegram: бонусы, розыгрыши, ваучеры</a>
        </div>
        <div class="marquee">
            <div class="marquee-content">🎁 Бонус до 500 FS! Только сегодня! Условия: депозит от 1000 RUB, x30 ⚠️</div>
        </div>
        <footer>© 2025 Все права защищены | Только 18+</footer>
    `;

    container.innerHTML = dynamicContent;
});
