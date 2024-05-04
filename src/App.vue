<template>
  <!-- Encabezado -->
  <nav class="navbar bg-body-secondary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand">TEST NEERING</a>

      <div class="d-flex align-items-center">
        <!-- Icono de persona -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle"
          viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
        <!-- Nombre del usuario -->
        <a class="navbar-brand">Nombre usuario</a>
      </div>
    </div>
  </nav>
  
  <!-- Menú lateral 2 -->
  <div class="bg-dark col-12 col-md-2 min-vh-100 position-fixed">
    <div class="bg-dark p-2">
      <a class="d-flex text-decoration-none mt-1 align-items-center text-white">
        <span class="fs-4 d-none d-sm-inline">Menu</span>
      </a>
      <ul class="nav nav-pills flex-column mt-4">
        <li class="nav-item py-2 py-sm-0">
          <router-link to="/home" class="nav-link text-white">
            <i class="fs-5 fa fa-house"></i><span class="fs-4 ms-3 d-none d-sm-inline">Inicio</span>
          </router-link>
        </li>
        <li class="nav-item py-2 py-sm-0">
          <router-link to="/tabla" class="nav-link text-white">
            <i class="fs-5 fa fa-table-list"></i><span class="fs-4 ms-3 d-none d-sm-inline">Tabla</span>
          </router-link>
        </li>
        <li class="nav-item py-2 py-sm-0">
          <router-link to="/createUsuario" class="nav-link text-white">
            <i class="fs-5 fa fa-file-alt"></i><span class="fs-4 ms-3 d-none d-sm-inline">Formulario</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- Contenido principal -->
  <div class="col offset-md-2 mt-5">
    <router-view />
  </div>

  <!--POSICION FIJA
  <div class="col offset-md-2 mt-5 position-fixed">
    <router-view />
  </div>
  -->
</template>

<style>
.nav-pills li a:hover{
  background-color: white;
}
</style>
