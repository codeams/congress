<?php

  $section = [
    'id' => 'individual-registration',
    'name' => 'Registro individual',
    'title' => 'Registro individual'
  ];

?><!doctype html>
<html><head>

  <meta charset='utf-8'>
  <title>Registro al CONISOFT: <?php echo $section['name']; ?></title>

  <?php include 'html-segments/stylesheet-links.php'; ?>
  <link rel='stylesheet' href='assets/css/registration.css'>

</head><body id='individual-registration'>

  <div class='container'>

    <?php include 'html-segments/header.php'; ?>

    <?php include 'html-segments/navigation.php'; ?>

    <div class='content'>

      <span class='section-title'><?php echo $section['title']; ?></span>

      <div class='section-content'>
        <div class='registration-form'>
          <div class='first row'>
            <div class='small-12 medium-6 columns'>
              <label>Título</label>
              <input type='text' placeholder='' value='' />
            </div>
            <div class='small-12 medium-6 columns'>
              <label>Tipo de participante</label>
              <input type='text' placeholder='' value='' />
            </div>
          </div>
          <div class='second row'>
            <div class='small-12 medium-6 columns'>
              <label>Nombre(s)</label>
              <input type='text' placeholder='' value='' />
            </div>
            <div class='small-12 medium-6 columns'>
              <label>Apellidos</label>
              <input type='text' placeholder='' value='' />
            </div>
          </div>
          <div class='third row'>
            <div class='small-12 medium-3 columns'>
              <label>Lada</label>
              <input type='text' placeholder='' value='' />
            </div>
            <div class='small-12 medium-6 columns'>
              <label>Teléfono</label>
              <input type='text' placeholder='' value='' />
            </div>
            <div class='small-12 medium-3 columns'>
              <label>Extensión</label>
              <input type='text' placeholder='' value='' />
            </div>
          </div>
          <div class='fourth align-center row'>
            <div class='small-12 medium-6 columns'>
              <label>Correo electrónico</label>
              <input type='text' placeholder='' value='' />
            </div>
          </div>
        </div>
      </div>

      <div class='action-buttons align-center row'>
        <div class='small-6 text-right columns'><div class='button secondary large'>Regresar</div>
      </div><div class='small-6 text-left columns'><div class='button primary large'>Continuar</div></div>
      </div>

    </div>

  </div>

  <?php include 'html-segments/footer.php'; ?>

  <?php include 'html-segments/script-links.php'; ?>

</body></html>
