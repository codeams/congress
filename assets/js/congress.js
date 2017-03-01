var individualRegistration = new Vue({

  el: '.individual-registration',

  data: {
    degree: '',
    role: '',
    firstName: '',
    lastName: '',
    institution: '',
    faculty: '',
    telephone: {
      areaCode: '',
      number: '',
      extension: ''
    },
    email: '',

    flags: {
      disableFaculty: ''
    },

    institutionsList: []

  },

  created: function() {
    this.$http
      .get( 'assets/lists/institutions-list.json' )
        .then( response => {
          this.institutionsList = response.data;
        });
  },

  computed: {
    nameAsItWillBePrinted: function() {
      if (
        this.degree ||
        this.firstName ||
        this.lastName
      ) return this.degree + ' ' + this.firstName + ' ' + this.lastName;
      else return '';
    }
  },

  methods: {
    validateInstitution: function() {
      if ( this.institution ) this.flags.disableFaculty = false;
      else {
        this.faculty = '';
        this.flags.disableFaculty = true;
      }
    },
    capitalizeValue: function ( value ) {

      var words = value.split( ' ' );

      words.forEach(function( word, wordIndex ) {
        word =
          word.charAt( 0 ).toUpperCase() +
          word.slice( 1 ).toLowerCase();

        words[ wordIndex ] = word;
      });

      words = words.join( ' ' );
      return words;
    }
  }

})
