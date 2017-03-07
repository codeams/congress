
Vue.component( 'deposit-registration-form', {

  data: function() {

    return {
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
    }

  },


  template:

  `
    <div id='deposit-registration-form'>

      <div class='row align-center'>

        <div class='small-12 columns'>

          <span class='section-title'>Deposito realizado</span>

        </div>

      </div>


      <div class='section-content'>

        <div class='registration-form deposit-details-registration'>

          <div class='first row align-center'>

            <div class='text-field-container small-12 medium-6 columns'>

              <label>


                <span>Sucursal</span>


                <input
                  type = 'text'
                  v-model = ' branch '
                  placeholder = 'Requerido'
                >


              </label>

            </div>


            <div class='text-field-container small-12 medium-6 columns'>

              <label>


                <span>Ciudad</span>


                <input
                  type = 'text'
                  v-model = ' city '
                  placeholder = 'Requerido'
                >


              </label>

            </div>

          </div>


          <div class='second row align-center'>

            <div class='text-field-container small-12 medium-6 columns'>

              <label>


                <span>No. de referencia</span>


                <input
                  type = 'text'
                  v-model = ' referenceNumber '
                  placeholder = 'Obligatorio'
                >


              </label>

            </div>


            <div class='text-field-container small-12 medium-6 columns'>

              <label>


                <span>Monto</span>


                <input
                  type = 'text'
                  v-model = ' ammount '
                  placeholder = 'Obligatorio'
                >


              </label>

            </div>

          </div>


          <div class='third row align-center'>

            <div class='select-field-container small-4 medium-3 columns'>

              <label>


                <span>Año</span>


                <select v-model='date.year'>

                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>

                </select>


              </label>

            </div>


            <div class='select-field-container small-5 medium-3 columns'>

              <label>


                <span>Mes</span>


                <select v-model = ' date.month '>

                  <option value='1'>Enero</option>
                  <option value='2'>Febrero</option>
                  <option value='3'>Marzo</option>
                  <option value='4'>Abril</option>
                  <option value='5'>Mayo</option>
                  <option value='6'>Junio</option>
                  <option value='7'>Julio</option>
                  <option value='8'>Agosto</option>
                  <option value='9'>Septiembre</option>
                  <option value='10'>Octubre</option>
                  <option value='11'>Noviembre</option>
                  <option value='12'>Diciembre</option>

                </select>


              </label>

            </div>


            <div class='select-field-container small-3 medium-2 columns'>

              <label>


                <span>Día</span>


                <select v-model='date.day'>

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>

                </select>

              </label>

            </div>


            <div class='text-field-container small-6 medium-2 columns'>

              <label>


                <span>Hora</span>


                <select v-model='time.hour'>

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>

                </select>

              </label>

            </div>


            <div class='text-field-container small-6 medium-2 columns'>

              <label>


                <span>Minuto</span>


                <select v-model='time.minute'>

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                  <option>51</option>
                  <option>52</option>
                  <option>53</option>
                  <option>54</option>
                  <option>55</option>
                  <option>56</option>
                  <option>57</option>
                  <option>58</option>
                  <option>59</option>
                  <option>60</option>

                </select>


              </label>

            </div>

          </div>

        </div>

      </div>

    </div>
  `

})
