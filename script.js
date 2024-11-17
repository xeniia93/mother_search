function showModal(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Показываем модальное окно
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
