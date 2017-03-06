
var congress = {};

congress.conf = {

  pipeline: [

    {
      viewName : "instructions",
      prepare : function() {
        this.params = {}
      }
    },

    {
      viewName : "prices-selection",
      prepare : function() {
        this.params = {}
      }
    },

    {
      viewName : "registration",
      prepare : function() {
        this.params = {}
      }
    }

  ]

};
