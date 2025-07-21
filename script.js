document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');

    const dynamicContent = `
        <div class="badge"></div>
        <h1>🎰 400 БЕСПЛАТНЫХ ВРАЩЕНИЙ 🎰<br>МОЖНО ЗАБРАТЬ В ЛЮБОМ ПРОЕКТЕ НИЖЕ</h1>
        <div class="warning">⚠️ Важно: перед заходом на сайт выключить VPN ⚠️</div>
        <div class="buttons-container">
            <a href="https://example.com/irwin" class="btn urgency" target="_blank" data-info="Мин. депозит 1000 RUB, x30">🇰🇿 🇷🇺 IRWIN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/flagman" class="btn urgency" target="_blank" data-info="Мин. депозит 500 RUB, x25">🇰🇿 🇷🇺 FLAGMAN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/martin" class="btn urgency" target="_blank" data-info="Мин. депозит 800 RUB, x35">🇰🇿 🇷🇺 MARTIN 400 FS 🇰🇿 🇷🇺</a>
            <a href="https://example.com/bonus" class="btn" target="_blank" data-info="Глобальный бонус, x20">🎁 GET A 400 FREE SPINS BONUS 🌍</a>
            <a href="https://t.me/yourchannel" class="btn telegram-btn" target="_blank" data-info="Присоединяйтесь за ваучеры">📢 Telegram: бонусы, розыгрыши, ваучеры</a>
        </div>
        <div class="marquee">
            <div class="marquee-content">🎁 Бонус до 500 FS! Только сегодня! Условия: депозит от 1000 RUB, x30 ⚠️</div>
        </div>
        <footer>© 2025 Все права защищены | Только 18+</footer>
    `;

    container.innerHTML = dynamicContent;

    // A/B-тест: случайный цвет для первых трёх кнопок
    const buttons = document.querySelectorAll('.btn.urgency');
    buttons.forEach(btn => {
        const randomColor = Math.random() > 0.5 ? 'red' : 'blue';
        btn.classList.add(randomColor);
    });

    // Таймер для urgency (пример для первой кнопки)
    let timer = 600; // 10 минут в секундах
    const interval = setInterval(() => {
        timer--;
        if (timer <= 0) clearInterval(interval);
        buttons[0].innerHTML = `🇰🇿 🇷🇺 IRWIN 400 FS 🇰🇿 🇷🇺 (Осталось ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60})`;
    }, 1000);
});
