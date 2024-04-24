<?php

require 'phpmailer/PHPMailerAutoload.php';
$nombre = $_POST['nombre'];
$lugar = $_POST['usuario'];
$email = $_POST['correo'];
$tel = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//print_r($_REQUEST);
//print_r($nombre);
//print_r($_POST);
//print_r($nombre);
//die();

// Validar que ninguna variable esté vacía
if (empty($nombre) || empty($lugar) || empty($email) || empty($tel) || empty($mensaje)) {
    // Mostrar mensaje de error y detener el proceso
    echo 'Por favor completa todos los campos del formulario.';
    exit(); // Detener la ejecución del script
}


$mail = new PHPMailer;
// $mail->SMTPDebug = 3;                       // Activar o desactivar el modo debug
$mail->isSMTP();                              // Indicar al mailer que use SMTP
$mail->Host = 'dtc030.ferozo.com';           // Acá va el host SMTP dtc030.ferozo.com
$mail->SMTPAuth = true;                       // Activar la autenticación SMTP
$mail->Username = 'info@email.com';    // La cuenta de correos que vas a utilizar. Tiene que estar creada previamente en el cPanel
$mail->Password = 'Password';             // La clave de de esa cuenta de correos
$mail->SMTPSecure = 'ssl';                    // Activar el cifrado TLS, "ssl" también es aceptado
$mail->Port = 465;
$mail->CharSet = "utf-8";
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);   // El puerto de conexión SMTP


//$mail->From = $email; // Email desde donde envío el correo.
//$mail->FromName = $nombre;
$mail->setFrom($email, $nombre);            // El correo desde cual sale el correo y el "nombre" 
$mail->addAddress('info@juanpabloduette.com.ar', 'Mailer');  // Añadir el recipiente
// $mail->addReplyTo('info@juanpabloduette.com.ar', 'Informacion');            // Indicar una cuenta para responder (opcional)
// $mail->addCC('cc@ejemplo.com');                                  // Indicar una cuenta de copia (opcional)
// $mail->addBCC('bcc@ejemplo.com');                                // Indicar una cuenta de copia adicional (ocional)

$mail->isHTML(true);                                             // Indicar que esté activo HTML
$mail->Subject = 'Contacto desde sitio web';
$mail->Body    = '<u><b>Nombre</u>:</b> ' . $nombre . ' <br> <br>
                  <u><b>Email</u>:</b> ' . $email . ' <br> <br>
                  <u><b>Teléfono</u>: </b> ' . $tel . ' <br> <br>
                  <u><b>Ubicación de Obra</u>: </b> ' . $lugar . ' <br> <br>
                  <u><b>Mensaje</u>: </b> ' . $mensaje . '';
$mail->AltBody = 'Contacto desde sitio web';

if (!$mail->send()) {
    echo 'El mensaje no pudo ser enviado.';
    echo 'Error del Mailer: ' . $mail->ErrorInfo;
    header("Location: error.html");
} else {
    echo 'El mensaje se envio correctamente, te contestaremos a la brevedad.';
    header("Location: gracias.html");
    // echo "<meta http-equiv='refresh' content='0;index.html' />";
    // echo '<script>
    //         setTimeout(function(){ 
    //         window.location="index.html"
    //         }, 3000);
    //       </script>';
}
