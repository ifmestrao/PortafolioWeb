<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email donde quieres recibir los mensajes
    $to = "tu_correo@ejemplo.com"; // Reemplaza con tu correo
    
    // Asunto del email
    $subject = "Nuevo mensaje de contacto de $name";
    
    // Construir el cuerpo del mensaje
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";
    
    // Headers del email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Enviar el email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirigir con mensaje de éxito
        header("Location: index.html?status=success#contact");
    } else {
        // Redirigir con mensaje de error
        header("Location: index.html?status=error#contact");
    }
} else {
    // Si alguien intenta acceder directamente al archivo PHP
    header("Location: index.html");
}
?>
