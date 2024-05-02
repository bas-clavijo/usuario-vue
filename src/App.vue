<template>
  <!-- Encabezado -->
  <nav class="navbar bg-body-secondary">
  <div class="container-fluid">
    <a class="navbar-brand">TEST NEERING</a>
    <form class="d-flex" role="search">
      <a class="navbar-brand">Nombre usuario</a>
    </form>
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


