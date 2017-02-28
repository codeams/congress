<!doctype html>
<html><head>

  <meta charset='utf-8'>
  <title>Registro al CONISOFT</title>

  <?php include 'segments/stylesheet-links.php'; ?>
  <link rel='stylesheet' href='assets/css/registration.css'>

</head><body id='registration'>

  <div class='container'>

    <?php include 'segments/header.php'; ?>

    <?php include 'segments/navigation.php'; ?>

    <div class='content'>

      <?php include 'sections/individual-registration.php'; ?>

      <?php include 'sections/groupal-registration.php'; ?>

      <?php include 'sections/deposit-details-registration.php'; ?>

      <div class='terms-acceptance'>
        <div class='row align-center'>
          <div class='checkbox-container small-12 text-center columns'>
            <label>
              <input type='checkbox'>
              Garantizo la veracidad de los datos proporcionados.
            </label>
          </div>
          <div class='checkbox-container small-12 text-center columns'>
            <label>
              <input type='checkbox'>
              Estoy de acuerdo con los <a href='#'>términos de uso</a>.
            </label>
          </div>
          <div class='checkbox-container small-12 text-center columns'>
            <label>
              <input type='checkbox'>
              He leído el <a href='#'>aviso de privacidad</a>.
            </label>
          </div>
        </div>
      </div>

      <div class='action-buttons align-center row'>
        <div class='button-container small-12 medium-6 text-right columns'>
          <input type='button' class='button secondary large' value='Cancelar'>
        </div><div class='button-container small-12 medium-6 text-left columns'>
          <input type='button' class='button primary large' value='Guardar'>
        </div>
      </div>

    </div>

  </div>

  <?php include 'segments/footer.php'; ?>

  <?php include 'segments/script-links.php'; ?>

</body></html>
