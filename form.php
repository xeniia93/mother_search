<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Тут можно добавить код для отправки email или сохранения данных в базу данных
    $to = "i@kefremova.ru";
    $subject = "Обратная связь с сайта";
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email";

    if (mail($to, $subject, $message)) {
        echo json_encode(["status" => "success", "message" => "Спасибо за ваше сообщение!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Не удалось отправить сообщение. Попробуйте позже."]);
    }
}
?>
