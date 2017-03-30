
var congress = {};

congress.conf = {

  pipeline: [

    {
      viewName : "instructions",
      prepare : function() {
        congress.instance.params = {}
      }
    },

    {
      viewName : "prices-grid",
      prepare : function() {
        congress.instance.params = {}
      }
    },

    {
      viewName : "registration-form",
      prepare : function() {
        congress.instance.params = {
          groupMembers: congress.instance.groupMembers
        }
      }
    }

  ]

};
