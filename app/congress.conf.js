
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
      viewName : "prices-grid",
      prepare : function() {
        this.params = {}
      }
    },

    {
      viewName : "registration-form",
      prepare : function() {
        this.params = {}
      }
    }

  ]

};
