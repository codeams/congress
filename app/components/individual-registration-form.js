
Vue.component( 'individual-registration-form', {


  data: function() {

    return {

      degree: '',
      role: '',
      firstName: '',
      lastName: '',
      institution: '',
      faculty: '',
      email: '',
      institutionsList: [],

      telephone: {
        number: '',
        extension: ''
      },

      flags: {
        disableFaculty: ''
      }

    }

  },


  created: function() {

    this
      .$http
        .get( 'assets/lists/institutions-list.json' )
          .then(

            response => {

              this.institutionsList = response.data;

            }, response => {

              console.error( 'Error while loading the institutions list.' );

            }

          );

  },


  computed: {

    nameAsItWillBePrinted: function() {

      isAnyFieldNotEmpty = this.degree || this.firstName || this.lastName;

      if ( isAnyFieldNotEmpty ) {

        return this.degree + ' ' + this.firstName + ' ' + this.lastName;

      } else {

        return '';

      }

    }

  },


  methods: {

    validateInstitution: function() {

      if ( this.institution ) {

        this.flags.disableFaculty = false;

      } else {

        this.faculty = '';
        this.flags.disableFaculty = true;

      }

    },

    capitalize: function ( value ) {

      var words = value.split( ' ' );

      words.forEach( function( word, wordIndex ) {

        var firstLetter = word.charAt( 0 );
        var otherLetters = word.slice( 1 );

        firstLetter = firstLetter.toUpperCase();
        otherLetters = otherLetters.toLowerCase();

        word = firstLetter + otherLetters;

        words[ wordIndex ] = word;

      });

      words = words.join( ' ' );

      return words;

    }

  },


  template:

  `
    <div id='individual-registration-form'>


      <div class='row align-center'>

        <div class='small-12 columns'>

          <span class='section-title'>Responsable de grupo</span>

        </div>

      </div>


      <div class='section-content'>

        <div class='registration-form'>

          <div class='row'>

            <div class='select-field-container small-12 medium-6 columns'>

              <label>


                <span>Grado</span>


                <select v-model='degree' :class='degree ? "" : "default-value"'>

                  <option value=''>Obligatorio</option>
                  <option value='Dr.'>Doctor</option>
                  <option value='Mtro.'>Maestro</option>
                  <option value='Lic.'>Licenciado</option>
                  <option value='Ing.'>Ingeniero</option>
                  <option value='Prof.'>Profesor</option>

                </select>


              </label>

            </div>


            <div class='select-field-container small-12 medium-6 columns'>

              <label>

                <span>Tipo de participante</span>


                <select v-model='role' :class='role ? "" : "default-value"'>

                  <option value=''>Obligatorio</option>
                  <option value='student'>Alumno</option>
                  <option value='manager'>Directivo</option>
                  <option value='speaker'>Ponente</option>
                  <option value='academic'>Académico</option>

                </select>


              </label>

            </div>

          </div>


          <div class='row'>

            <div class='text-field-container small-12 medium-6 columns'>

              <label>

                <span>Nombre(s)</span>


                <input
                  type = 'text'
                  :value = ' firstName '
                  @input = ' firstName = capitalize( $event.target.value ) '
                  placeholder = ' Obligatorio '
                >


              </label>

            </div>


            <div class='text-field-container small-12 medium-6 columns'>

              <label>


                <span>Apellidos</span>


                <input
                  type = 'text'
                  :value = ' lastName '
                  @input = ' lastName = capitalize( $event.target.value ) '
                  placeholder='Obligatorio'
                >


              </label>

            </div>

          </div>


          <div class='row'>

            <div class='text-field-container small-12 columns'>

              <label>


                <span>Así se imprimirá tu nombre</span>


                <input
                  type = 'text'
                  :value = ' nameAsItWillBePrinted '
                  disabled='disabled'
                  placeholder = 'Completado automáticamente'
                >


              </label>

            </div>

          </div>


          <div class='row'>

            <div class='text-field-container small-12 medium-7 columns'>

              <label>


                <span>Universidad / Institución</span>


                <select
                  v-model='institution'
                  @change='validateInstitution'
                  :class='institution ? "" : "default-value"'
                >

                  <option value = ''>Obligatorio</option>
                  <option v-for = ' currentInstitution in institutionsList '>
                      {{ currentInstitution.name }}
                  </option>

                </select>


              </label>

            </div>


            <div class='text-field-container small-12 medium-5 columns'>

              <label>


                <span>Facultad</span>


                <input
                  type = 'text'
                  v-model.trim = ' faculty '
                  :disabled = ' flags.disableFaculty '
                  placeholder = 'Opcional'
                >


              </label>

            </div>

          </div>


          <div class='row'>

            <div class='text-field-container small-12 medium-5 columns'>

              <label>


                <span>Teléfono</span>


                <input
                  type = 'number'
                  v-model.trim.number = ' telephone.number '
                  placeholder = 'Obligatorio'
                >


              </label>

            </div>


            <div class='text-field-container small-12 medium-2 columns'>

              <label>


                <span>Extensión</span>


                <input
                  type = 'number'
                  v-model.trim.number = ' telephone.extension '
                  placeholder='Opcional'
                >


              </label>

            </div>


            <div class='text-field-container small-12 medium-5 columns'>

              <label>


                <span>Correo electrónico</span>


                <input
                  type = 'text'
                  v-model.trim = ' email '
                  placeholder='Obligatorio'
                >


              </label>

            </div>

          </div>

        </div>

      </div>

    </div>
  `

})
