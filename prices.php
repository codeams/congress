<?php

  $section = [
    'id' => 'choose-registration-type',
    'name' => 'Selección de tipo de registro',
    'title' => 'Selecciona un tipo de registro'
  ];

?><!doctype html>
<html><head>

  <meta charset='utf-8'>
  <title>Registro al CONISOFT: <?php echo $section['name']; ?></title>

  <?php include 'html-segments/stylesheet-links.php'; ?>
  <link rel='stylesheet' href='assets/css/prices.css'>

</head><body id='prices'>

  <div class='container'>

    <?php include 'html-segments/header.php'; ?>

    <?php include 'html-segments/navigation.php'; ?>

    <div class='content'>

      <span class='section-title'><?php echo $section['title']; ?></span>

      <div class='section-content'>
        <div class='registration-types small-up-1 medium-up-2 large-up-3 row'>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 0</span>
              <span class='type-name'>Alumno de UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 350</span>
              <span class='type-name'>Alumno ajeno a UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 7900</span>
              <span class='type-name'>Ponente del congreso</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 0 p/p</span>
              <span class='type-name'>Grupo de alumnos de UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 260 p/p</span>
              <span class='type-name'>Grupo de alumnos ajenos a UADY</span>
            </div>
          </div>
          <div class='column'>
            <div class='registration-type'>
              <span class='type-price'>$ 4650</span>
              <span class='type-name'>Académico de universidad</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <?php include 'html-segments/footer.php'; ?>

  <?php include 'html-segments/script-links.php'; ?>

</body></html>
