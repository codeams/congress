<!doctype html>
<html>
  <head>

    <meta charset='utf-8'>
    <title>Registro al CONISOFT</title>


    <link rel='stylesheet' href='vendor/foundation.min.css'>
    <link rel='stylesheet' href='assets/css/normalize.css'>
    <link rel='stylesheet' href='assets/css/template.css'>
    <link rel='stylesheet' href='assets/css/navigation.css'>

    <link v-if='currentView === "instructions"' rel='stylesheet' href='assets/css/instructions.css'>
    <link v-if='currentView === "prices-selection"' rel='stylesheet' href='assets/css/prices.css'>
    <link v-if='currentView === "registration"' rel='stylesheet' href='assets/css/registration.css'>

  </head>
  <body>

    <div id='congress' class='container'>

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

        <component :is='currentView'></registration>

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

    <script src='app/components/registration/individual-registration-form.js'></script>
    <script src='app/components/registration/group-registration-form.js'></script>
    <script src='app/components/registration/deposit-details-registration-form.js'></script>
    <script src='app/components/registration/terms-acceptance-form.js'></script>
    <script src='app/components/registration/form-buttons.js'></script>

    <script src='app/instructions.js'></script>

    <script src='app/prices-selection.js'></script>

    <script src='app/components/registration.js'></script>
    <script src='app/congress.js'></script>

  </body>
</html>
