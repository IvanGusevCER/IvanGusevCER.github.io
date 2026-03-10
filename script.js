// 1. Параллакс для фото (Hero)
const hero = document.getElementById('hero');
const img = document.getElementById('parallax-img');

hero.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    img.style.transform = `translate(${x}px, ${y}px)`;
});

// 2. Магнитный эффект для кнопок
const magButtons = document.querySelectorAll('.btn-mag');

magButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = `translate(0, 0)`;
    });
});

// 3. Управление Overlay (Открытие работ)
const overlay = document.getElementById('project-overlay');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.btn-mag').forEach(button => {
    button.addEventListener('click', () => {
        // Здесь можно добавить логику подгрузки контента в зависимости от data-project
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Запрет скролла основной страницы
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});