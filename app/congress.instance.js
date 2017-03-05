
congress.instance = new Vue({

  el : '#congress',

  data: {

    registrationType : '',
    collectedData : '',

    degree : '',


    currentView : '',
    pipeline : congress.conf.pipeline,
    params : {}
  },


  created: function() {

    var _this = this;


    var firstView = _this.pipeline[ 0 ];
    firstView.prepareParams();
    _this.currentView = firstView;


    Bus.$on( 'backwards', function() {

      var currentViewIndex = _this.pipeline.indexOf( _this.currentView );
      var previousViewIndex = currentViewIndex - 1;

      var currentView = _this.pipeline[ currentViewIndex ];
      var previousView = _this.pipeline[ previousViewIndex ];

      currentView.movingBackwards();
      previousView.prepareParams();
      _this.currentView = previousView;

    });


    Bus.$on( 'forwards', function( params ) {

      var currentViewIndex = _this.pipeline.indexOf( _this.currentView );
      var nextViewIndex = currentViewIndex + 1;

      var currentView = _this.pipeline[ currentViewIndex ];
      var nextView = _this.pipeline[ nextViewIndex ];

      currentView.movingForwards( params );
      nextView.prepareParams();
      _this.currentView = nextView;

    });


    Bus.$on( "save", function( degree ) {

      _this.degree = degree;

    })

  }

})
