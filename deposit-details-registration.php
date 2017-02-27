<?php

  $section = [
    'id' => 'deposit-details-registration',
    'name' => 'Datos de depósito',
    'title' => 'Detalles del depósito realizado'
  ];

?><!doctype html>
<html><head>

  <meta charset='utf-8'>
  <title>Registro al CONISOFT: <?php echo $section['name']; ?></title>

  <?php include 'segments/stylesheet-links.php'; ?>
  <link rel='stylesheet' href='assets/css/registration.css'>

</head><body id='deposit-details-registration'>

  <div class='container'>

    <?php include 'segments/header.php'; ?>

    <?php include 'segments/navigation.php'; ?>

    <div class='content'>

      <span class='section-title'><?php echo $section['title']; ?></span>

      <div class='section-content'>
        <div class='registration-form'>
          <div class='first row align-center'>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>Sucursal</label>
              <input type='text' placeholder='Opcional' value=''>
            </div>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>Ciudad</label>
              <input type='text' placeholder='Opcional' value=''>
            </div>
          </div>
          <div class='second row align-center'>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>No. de referencia</label>
              <input type='text' placeholder='Obligatorio' value=''>
            </div>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>Monto</label>
              <input type='text' placeholder='Obligatorio' value=''>
            </div>
          </div>
          <div class='third row align-center'>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>Fecha</label>
              <input type='text' placeholder='Obligatorio' value=''>
            </div>
            <div class='text-field-container small-12 medium-6 columns'>
              <label>Hora</label>
              <input type='text' placeholder='Obligatorio' value=''>
            </div>
          </div>
          <div class='fourth row align-center'>
            <div class='checkbox-container small-12 text-center columns'>
              <label>
                <input type='checkbox'>
                Los datos son correctos y garantizo su veracidad.
              </label>
            </div>
            <div class='checkbox-container small-12 text-center columns'>
              <label>
                <input type='checkbox'>
                He leído y estoy de acuerdo con el <a href='#'>aviso de privacidad</a>.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class='action-buttons align-center row'>
        <div class='button-container small-6 text-right columns'>
          <input type='button' class='button secondary large' value='Regresar'>
        </div><div class='button-container small-6 text-left columns'>
          <input type='button' class='button primary large' value='Continuar'>
        </div>
      </div>

    </div>

  </div>

  <?php include 'segments/footer.php'; ?>

  <?php include 'segments/script-links.php'; ?>

</body></html>
