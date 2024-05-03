<template>
  <!-- Encabezado -->
  <nav class="navbar bg-body-secondary">
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

  <!-- Menú lateral -->
  <!--  <div class="d-flex" id="wrapper">
         Sidebar 
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <router-link to="/home" class="list-group-item list-group-item-action">Menú</router-link>
                <router-link to="/tabla" class="list-group-item list-group-item-action">Tabla</router-link>
                <router-link to="/createUsuario" class="list-group-item list-group-item-action">Formulario</router-link>
            </div>
        </div>
    </div>
-->
  <!-- Menú lateral 2 -->
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="bg-dark col-auto col-md-2 min-vh-100">
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

      <!--contenido-->
      <div class="p-3">
        <h2>Contenido</h2>
      </div>
       
    </div>
  </div>



  <div class="container-fluid">
    <router-view />
  </div>
</template>

<style>
.nav-pills li a:hover{
  background-color: white;
}
</style>
