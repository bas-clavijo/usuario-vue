<template>
  <!-- Encabezado -->
  <nav class="navbar bg-body-secondary fixed-top">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.png" width="34">
        <a class="navbar-brand ms-2">TEST NEERING</a>
      </div>
    </div>
  </nav>
  
  <!-- Menú lateral -->
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
  background-color: rgb(173, 171, 171);
}
</style>
