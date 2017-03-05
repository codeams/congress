
var congress = {};

congress.conf = {

  pipeline: [

    {
      viewName : "instructions",

      prepareParams : function() { },
      movingForwards : function() { },
      movingBackwards : function() { }
    },

    {
      viewName : "prices-selection",

      prepareParams : function() { },
      movingForwards : function( params ) {
        this.registrationType = params[ "registrationType" ];
      },
      movingBackwards : function() { }
    },

    {
      viewName : "registration",

      prepareParams : function() {
        this.params = { "toPrint" : "Works." }
      },
      movingForwards : function( params ) {
        this.collectedData = params[ "collectedData" ];
      },
      movingBackwards : function() { }
    }

  ]

};
