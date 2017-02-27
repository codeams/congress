<?php

  $section = [
    'id' => 'groupal-registration',
    'name' => 'Registro de grupo',
    'title' => 'Registro de miembros del grupo'
  ];

?><!doctype html>
<html><head>

  <meta charset='utf-8'>
  <title>Registro al CONISOFT: <?php echo $section['name']; ?></title>

  <?php include 'html-segments/stylesheet-links.php'; ?>
  <link rel='stylesheet' href='assets/css/registration.css'>

</head><body id='groupal-registration'>

  <div class='container'>

    <?php include 'html-segments/header.php'; ?>

    <?php include 'html-segments/navigation.php'; ?>

    <div class='content'>

      <span class='section-title'><?php echo $section['title']; ?></span>

      <div class='section-content'>
        <div class='registration-form align-center row'>
          <div class='small-12 medium-9 columns'>
            <input type='text' placeholder='Nombre completo' value='Erick Alejandro Montañez Sodá'>
          </div>
          <div class='small-12 medium-9 columns'>
            <input type='text' placeholder='Nombre completo' value='Isis Naomi Ramirez Moleres'>
          </div>
          <div class='small-12 medium-9 columns'>
            <input type='text' placeholder='Nombre completo' value='Daniel Alberto Rejón Pardenilla'>
          </div>
          <div class='small-12 medium-9 columns'>
            <input type='text' placeholder='Nombre completo' value='Cecilia Trejo Sosa'>
          </div>
          <div class='small-12 medium-9 columns'>
            <input type='text' placeholder='Nombre completo' value=''>
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
