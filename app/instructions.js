
Vue.component( 'instructions', {


  data: function() {
    return {

    }
  },


  methods: {
    changeView: function() {
      Bus.$emit( "forwards" )
    }
  },


  template:

  `
    <div id='instructions'>

      <div class='row'>

        <div class='small-12 columns'>

          <span class='section-title'>Requisitos previos al registro</span>

        </div>

      </div>


      <div class='section-content'>

        <div class='text row'>

          <div class='small-12 columns'>

            <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>2. Morbi viverra posuere orci, sit amet pellentesque orci pellentesque at. Aenean massa quam, tristique et feugiat non, facilisis vitae sem. Proin vulputate feugiat velit, et convallis eros. Proin vulputate rhoncus ligula id tincidunt. Maecenas ornare venenatis mi finibus gravida. Fusce in nunc rhoncus, rutrum enim nec, bibendum sem.</p>
            <p>3. Maecenas vehicula porttitor arcu a finibus. Mauris nibh tellus, facilisis nec justo eget, malesuada tempus quam. Donec vel hendrerit felis, at sodales dui. Suspendisse ut mauris at ipsum bibendum tempor at vel erat. Mauris gravida tincidunt lorem ac dapibus. Vestibulum sit amet nisl mauris.</p>
            <p>4. Integer egestas, nisi bibendum eleifend blandit, metus mauris feugiat sem, id maximus dui leo sed libero. Donec at tellus ut orci imperdiet bibendum vel mattis leo. Suspendisse potenti. Vivamus viverra egestas arcu ut pellentesque. Donec molestie velit non ullamcorper iaculis. Cras interdum leo vitae sapien pretium laoreet.</p>
            <p>5. Pellentesque ornare dolor vel massa euismod rhoncus. Suspendisse bibendum, magna non mollis porta, lorem purus sollicitudin nunc, vitae dictum velit dolor scelerisque lorem. Praesent posuere libero id nisl malesuada suscipit. Nam molestie turpis at luctus facilisis. Nullam luctus lacinia sem et viverra. Praesent eget vestibulum ex, at euismod nibh.</p>

          </div>

        </div>

      </div>

      <div class='action-buttons row'>

        <div class='small-12 text-center columns'>

          <input
            type='button'
            @click='changeView'
            class='button large primary'
            value='Iniciar proceso de registro'
          >

        </div>

      </div>

    </div>
  `


})
