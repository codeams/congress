<!doctype html>
<html>
  <head>

    <meta charset='utf-8'>
    <title>Registro al CONISOFT</title>


    <link rel='stylesheet' href='vendor/foundation.min.css'>
    <link rel='stylesheet' href='assets/css/normalize.css'>
    <link rel='stylesheet' href='assets/css/template.css'>
    <link rel='stylesheet' href='assets/css/navigation.css'>

    <link rel='stylesheet' href='assets/css/registration.css'>

  </head>
  <body>

    <div id='congress-registration-forms' class='container'>

      <div class='header'>

        <div class='row align-justify'>

          <div class='small-6 medium-4 columns-collapsed'>

            <div class='logo uady-logo'></div>

          </div>

          <div class='small-6 medium-4 columns-collapsed'>

            <div class='logo congress-logo'></div>

          </div>

        </div>

      </div>


      <section-navigation></section-navigation>


      <div class='content'>

        <individual-registration-form></individual-registration-form>

        <group-registration-form></group-registration-form>

        <deposit-details-registration-form></deposit-details-registration-form>

        <terms-acceptance-form></terms-acceptance-form>

        <form-buttons></form-buttons>

      </div>


    </div>


    <div class='footer'>

      <a href='#'>Aviso de privacidad</a>

      <a href='#'>Términos de uso</a>

      <a href='#'>Derechos de autor</a>

    </div>


    <script src='vendor/vue.js'></script>
    <script src='vendor/vue-resource.js'></script>

    <script src='app/components/section-navigation.js'></script>
    <script src='app/components/individual-registration-form.js'></script>
    <script src='app/components/group-registration-form.js'></script>
    <script src='app/components/deposit-details-registration-form.js'></script>
    <script src='app/components/terms-acceptance-form.js'></script>
    <script src='app/components/form-buttons.js'></script>
    <script src='app/congress.js'></script>

  </body>
</html>
