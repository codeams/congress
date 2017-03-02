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




var groupalRegistration = new Vue({

  el: '.groupal-registration',

  data: {
    groupMembers: [
      { name: '' }
    ]
  },

  computed: {

  },

  watch: {
    groupMembers: function( newGroupMember ) {

      var index = this.groupMembers.length - 1;

      Vue.nextTick(function() {
        document.getElementById( 'groupMember' + index ).focus();
      });

    }
  },

  methods: {
    addNewGroupMember: function() {
      this.groupMembers.push( { name: '' } );
    },
    deleteroni: function( target ) {
      if ( this.groupMembers.length < 2 ) return;
      if ( ! target.value )
        this.groupMembers.splice( target.id.split( 'groupMember' )[1], 1 );
    }
  }

})

var depositDetailsRegistration = new Vue({

  el: '.deposit-details-registration',

  data: {
    branch: '',
    city: '',
    referenceNumber: '',
    ammount: '',
    date: {
      year: '',
      month: '',
      day: ''
    },
    time: {
      hour: '',
      minute: ''
    }
  },

  computed: {

  },

  methods: {

  }

})
