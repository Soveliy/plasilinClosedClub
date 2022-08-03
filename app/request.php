<?php
if ($_POST['email'] && $_POST['fax'] && !$_POST['phone']) {
    $to  = "<partners@plastilin-art.ru>, " ; 
    $to .= "partners@plastilin-art.ru"; 

    $subject = "Заявка от партнёрского клуба"; 

    $message = '<p><b>Новая заявка</b></p></br>';

    if ($_POST['name']) 
        $message .= '<p>Имя: ' . $_POST['name'] . '</p></br>';

    $message .= '<p>E-mail: ' . $_POST['email'] . '</p></br>';
    $message .= '<p>Телефон: ' . $_POST['fax'] . '</p></br>';

    if ($_POST['position']) 
        $message .= '<p>Должность/профиль компании: ' . $_POST['position'] . '</p></br>';

    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: От кого письмо <info@plastilin-art.ru>\r\n"; 
    $headers .= "Reply-To: info@plastilin-art.ru\r\n"; 

    if (mail($to, $subject, $message, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}