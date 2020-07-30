// Este es el punto de entrada de tu aplicacion

/* import {
    myFunction
} from './lib/index.js';
myFunction(); */

const start = document.querySelector('#start_btn');
const login = document.querySelector('#login-btn');

function secondPage() {
  document.querySelector('#root').innerHTML = ` 
  <div>
  <header>
      <img class="header-image" src="img/img-cel.png" alt="">
      <div class = "container-second-page">
        <div class = "container_left">
          <img class="header-image-desktop" src="img/img-desk.png" alt="">
          <h1 class = "logo-second-page" >Art Space</h1>
          <input type="search" id="input_search">
        </div>
        <div class = "icons-General">
          <img src="img/articulo_icono.png" alt="">
          <img src="img/calendario_icono.png" alt="">
          <img src="img/usuario_icono.png" alt="">
        </div> 
      </div>
  </header>
  </div> `;
}

start.addEventListener('click', secondPage);
login.addEventListener('click', loginPage);

function loginPage() {
  document.querySelector('#root').innerHTML = ` 
  <div >
    <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

    <div class="input_section">
      <div>
        <img src="img/usuario_icono.png" class="icono" alt="Icono usuario">
        <input class="input" type="text" placeholder="Nombre" id="input_name"> <br>
      </div>
      <div>
        <img src="img/direccion_icono.png" class="icono" alt="Icono dirección">
        <input class="input" type="text" placeholder="Dirección" id="input_address"> <br>
      </div>
      <div>
        <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
        <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
      </div>
      <div>
        <img class="icono" src="img/contraseña_icono.png" alt="">
        <input class="input" type="password" placeholder="Contraseña" id="input_password" class="input_password"><br>
      </div>
      <div>
        <img src="img/confirmar_icono.png" class="icono" alt="Icono confirmar"></img>
        <input class="input" type="password" placeholder="Confirmar contraseña" id="password_confirm" class="input_password">
      </div>
    </div>

    <div>
      <button class="btn" id="login-btn">Registrar</button> <br>
      <button class="btn" id="login-btn">Inicio</button>
    </div>
    <footer> &copy;2020 by Fabiane Geraldine & Lady</footer>

    <script type="module" src="main.js"></script>
  </div>`;
}