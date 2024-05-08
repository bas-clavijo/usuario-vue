<template>
  <div class="col offset py-4">
    <div class="col-lg-10 offset-lg-1 py-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <!-- Columna para la imagen -->
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <div class="text-center">
                <img v-if="this.foto" height="200" :src="this.foto" class="img-thumbnail mb-3" alt="">
                <img v-else height="200" :src="require('@/assets/login.png')" class="img-thumbnail mb-3" alt="">
              </div>
            </div>

            <!-- Columna para los campos de entrada de datos del usuario -->
            <div class="col-lg-5 offset-lg-2 py-5">
              <div class="text-center mb-4">
                <img height="50" width="50" :src="require('@/assets/logo.png')" alt="">
              </div>
              <div class="mb-4">
                <h1 class="text-center">¡Bienvenidos a Neering!</h1>
                <h5 class="text-center">Desarrolla esta plataforma a la perfección.</h5>
              </div>
              <div class="mb-3">
                <input type="text" id="nombre" placeholder="Usuario" class="form-control">
              </div>
              <div class="mb-3">
                <input type="password" id="contraseña" placeholder="Contraseña" class="form-control">
              </div>
              <!-- Botón para ingresar -->
              <div class="d-grid gap-2">
                <router-link :to="{ path: '/tabla' }" class="btn btn-success">
                  <i class="fa-solid"></i> Ingresar
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
