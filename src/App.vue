<template>
  <!-- Encabezado -->
  <nav class="navbar bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand">TEST NEERING</a>
    
    <div class="d-flex align-items-center">
      <!-- Icono de persona -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>
      <!-- Nombre del usuario -->
      <a class="navbar-brand">Nombre usuario</a> 
    </div>
  </div>
</nav>

 <!-- Menú lateral -->
 <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <router-link to="/home" class="list-group-item list-group-item-action">Menú</router-link>
                <router-link to="/tabla" class="list-group-item list-group-item-action">Tabla</router-link>
                <router-link to="/createUsuario" class="list-group-item list-group-item-action">Formulario</router-link>
            </div>
        </div>
    </div>


<div class="container-fluid">
  <router-view/>
</div>
</template>


