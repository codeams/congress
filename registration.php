<!doctype html>
<html>
  <head>

    <meta charset='utf-8'>
    <title>Registro al CONISOFT</title>

    <?php include 'segments/stylesheet-links.php'; ?>

    <link rel='stylesheet' href='assets/css/registration.css'>

  </head>
  <body>


    <div id='congress-registration-forms' class='container'>


      <?php include 'segments/header.php'; ?>


      <?php include 'segments/navigation.php'; ?>


      <div class='content'>

        <individual-registration-form></individual-registration-form>

        <group-registration-form></group-registration-form>

        <deposit-details-registration-form></deposit-details-registration-form>

        <terms-acceptance-form></terms-acceptance-form>

        <form-buttons></form-buttons>

      </div>


    </div>


    <?php include 'segments/footer.php'; ?>


    <?php include 'segments/script-links.php'; ?>

    <script src='app/components/individual-registration-form.js'></script>
    <script src='app/components/group-registration-form.js'></script>
    <script src='app/components/deposit-details-registration-form.js'></script>
    <script src='app/components/terms-acceptance-form.js'></script>
    <script src='app/components/form-buttons.js'></script>
    <script src='app/congress.js'></script>


  </body>
</html>
