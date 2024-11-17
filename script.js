document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    // Получаем данные формы
    const formData = new FormData(this);

    // Отправляем данные на сервер
    fetch('form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            showModal(data.message); // Показываем модальное окно с сообщением
        } else {
            alert(data.message); // Показываем сообщение об ошибке
        }
    })
    .catch(error => {
        alert("Произошла ошибка: " + error.message);
    });
});

function showModal(message) {
    const modal = document.getElementById('modal');
    modal.querySelector('p').textContent = message; // Устанавливаем текст в модальное окно
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
