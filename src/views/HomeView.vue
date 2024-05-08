<template>
  <div class="col offset mt-5">
    <div class="col-lg-12">
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
            <div class="col-lg-5 text-center">
              <div>
                <img height="50" width="50" :src="require('@/assets/logo.png')" alt="">
              </div>
              <div>
                <h1>¡Bienvenidos a Neering!</h1>
                <h4>Desarrolla esta plataforma a la perfección.</h4>
              </div>

              <div>
                <label for="">Iniciar sesión</label> <label for="">Registrarse</label>
              </div>
              <div class="mb-3">
                <input type="text" id="nombre" placeholder="Usuario" class="form-control">
              </div>
              <div>
                <input type="password" id="contraseña" placeholder="Contraseña" class="form-control">
              </div>
              <!-- Botón para ingresar -->
              <div class="col-md-100 d-flex justify-content-end align-items-center">
                <router-link :to="{ path: '/tabla' }" class="btn btn-info">
                  <i class="fa-solid fa-arrow-left"></i> Ingresar
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
