<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Тут можно добавить код для отправки email или сохранения данных в базу данных

    // Пример отправки письма
    $to = "i@kefremova.ru";
    $subject = "Обратная связь с сайта";
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email";
    mail($to, $subject, $message);

    echo "Спасибо за ваше сообщение!";
}
?>
