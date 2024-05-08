<template>
  <div class="row mt-3">
    <div class="col-lg-10 offset-lg-1 py-5">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar usuario
        </div>
        <div class="card-body">
          <form v-on:submit="guardar" class="row g-2">
            <!-- Columna para los campos de entrada de datos del usuario -->
            <div class="col-md-6">
              <div class="mb-3">
                <input type="text" v-model="nombre" id="nombre" placeholder="Nombre completo" required maxlength="50"
                  class="form-control">
              </div>
              <div class="mb-3">
                <input type="email" v-model="correo" id="correo" placeholder="Correo electrónico" required
                  maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="email" v-model="correoconfirmar" id="correoconfirmar"
                  placeholder="Confirmar Correo electrónico" required maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="text" v-model="cargo" id="cargo" placeholder="Cargo" required maxlength="50"
                  class="form-control">
              </div>
              <div class="mb-3">
                <input type="password" v-model="contraseña" id="contraseña" placeholder="Contraseña" required
                  maxlength="50" class="form-control">
              </div>
              <div class="mb-3">
                <input type="password" v-model="confContraseña" id="confContraseña" placeholder="Confirmar contraseña"
                  required maxlength="50" class="form-control">
              </div>
            </div>

            <!-- Columna para la imagen -->
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="text-center">
                <img v-if="this.foto" height="200" :src="this.foto" id="fotoimg" class="img-thumbnail mb-3" alt="">
                <img v-else height="200" :src="require('@/assets/usuario.png')" class="img-thumbnail mb-3" id="fotoimg"
                  alt="">
                <input type="file" v-on:change="prevFoto" accept="image/png, image/jpeg, image/gif"
                  class="form-control mb-3">
              </div>
            </div>

            <!--Fila para los botones-->
            <div class="row">
              <div class="col-md-6">
                <div class="d-flex justify-content-between mb-4 btn-lg">
                  <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>

                  <router-link :to="{ path: '/tabla' }" class="btn btn-danger">
                    <i class="fa-solid fa-ban"></i> Cancelar
                  </router-link>
                </div>
              </div>
            </div>


          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones'

export default {
  data() {
    return {
      nombre: '',
      correo: '',
      correoconfirmar: '',
      cargo: '',
      contraseña: '',
      confContraseña: '',
      foto: '',
      url: 'http://busquedausuario.test/api/v1/usuarios',
      cargando: false
    }
  },

  methods: {
    guardar() {
      event.preventDefault();
      var miFoto = document.getElementById('fotoimg');
      this.foto = miFoto.src;

      if (this.nombre.trim() === '') {
        mostrarAlerta('Ingrese un Nombre', 'warning', 'nombre');
      } else if (this.correo.trim() === '') {
        mostrarAlerta('Ingrese un Correo', 'warning', 'correo');
      } else if (this.correoconfirmar.trim() === '') {
        mostrarAlerta('Confirme su Correo', 'warning', 'correoconfirmar');
      } else if (this.cargo.trim() === '') {
        mostrarAlerta('Ingrese un Cargo', 'warning', 'cargo');
      } else if (this.contraseña.trim() === '') {
        mostrarAlerta('Ingrese una Contraseña', 'warning', 'contraseña');
      } else if (this.confContraseña.trim() === '') {
        mostrarAlerta('Confirme su Contraseña', 'warning', 'confContraseña');
      } else {
        var parametros = {
          nombre: this.nombre.trim(), correo: this.correo.trim(),
          correoconfirmar: this.correoconfirmar.trim(), cargo: this.cargo.trim(),
          contraseña: this.contraseña.trim(), confContraseña: this.confContraseña.trim(),
          foto: this.foto.trim()
        }
        enviarSolicitud('POST', parametros, this.url, 'Usuario registrado');
      }

    },
    prevFoto(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        var miFoto = document.getElementById('fotoimg');
        miFoto.src = reader.result;
        this.foto = miFoto.src;


      }
    }
  }
}
</script>
