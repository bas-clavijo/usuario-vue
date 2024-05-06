<template>
  <div class="row mt-3">
    <div class="col-lg-10 offset-lg-1">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar usuario
        </div>
        <div class="card-body">
          <form class="row g-2">
            <!-- Columna para los campos de entrada de datos del usuario -->
            <div class="col-md-6">
              <div class="mb-3">
                <input type="text" v-model="nombre" id="nombre" placeholder="Nombre completo" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="emal" v-model="correo" id="correo" placeholder="Correo electrónico" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="email" v-model="correoconfirmar" id="correoconfirmar" placeholder="Confirmar Correo electrónico" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="text" v-model="cargo" id="cargo" placeholder="Cargo" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="password" v-model="contraseña" id="contraseña" placeholder="Contraseña" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="password" v-model="confContraseña" id="confContraseña" placeholder="Confirmar contraseña" required maxlength="50" class="form-control">
              </div>
            </div>
            
            <!-- Columna para la imagen -->
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="d-grid gap-2 col-6 mx-auto">
                <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                <img v-else height="100" :src="require('@/assets/usuario.png')" class="img-thumbnail" id="fotoimg" alt="">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

 
<script>
  import {confirmar,} from '../funciones'

  export default{
    data(){
      return{
        nombre:'',
        correo:'',
        correoconfirmar:'',
        cargo:'',
        contraseña:'',
        confContraseña:'',
        cargando:false
      }
    },

    methods:{
      guardar(){
        this.cargando = true;
        
      }
    }
  }
</script>
