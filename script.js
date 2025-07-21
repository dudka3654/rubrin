document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');

    // Динамический контент — здесь вся структура сайта (заголовок, кнопки и т.д.)
    const dynamicContent = `
        <img src="logo.png" alt="400 Spins" class="logo">  <!-- Замените на путь к вашему логотипу, загрузите файл logo.png в репозиторий -->
        <h1>400 БЕСПЛАТНЫХ ВРАЩЕНИЙ МОЖНО ЗАБРАТЬ В ЛЮБОМ ПРОЕКТЕ НИЖЕ !!</h1>
        <p>ВАЖНО ПЕРЕД ЗАХОДОМ НА САЙТ ВЫПОЛНИТЕ ВЫН !</p>
        
        <a href="https://example.com/irwin" class="button red-gradient">KZ RU IRWIN 400 FS KZ RU</a>
        <a href="https://example.com/flagman" class="button blue-gradient">KZ RU FLAGMAN 400 FS KZ RU</a>
        <a href="https://example.com/martin" class="button purple-gradient">KZ RU MARTIN 400 FS KZ RU</a>
        
        <a href="https://example.com/bonus" class="button red-gradient">GET A 400 FREE SPINS BONUS KZ UA BY DE FR GB PL CA US NL as well as other countries</a>
        
        <a href="https://t.me/yourchannel" class="button blue-gradient">📣 Telegram: Бонусы, розыгрыши, байеры</a>
    `;

    // Вставляем контент в контейнер
    container.innerHTML = dynamicContent;
});
