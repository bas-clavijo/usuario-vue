<template>
  <div class="row mt-3">
    <div class="col-lg-10 offset-lg-1">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalle usuario
        </div>
        <div class="card-body">
          <div class="row">
            <!-- Columna para la imagen -->
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <div class="text-center">
                <img v-if="this.foto" height="200" :src="this.foto" class="img-thumbnail mb-3" alt="">
                <img v-else height="200" :src="require('@/assets/usuario.png')" class="img-thumbnail mb-3" alt="">
              </div>
            </div>
            
            <!-- Columna para los campos de entrada de datos del usuario -->
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Nombre:</label>
                <span class="ms-2">{{ nombre }}</span>
              </div>
              <div class="mb-3">
                <label class="form-label">Correo:</label>
                <span class="ms-2">{{ correo }}</span>
              </div>
              <div class="mb-3">
                <label class="form-label">Cargo:</label>
                <span class="ms-2">{{ cargo }}</span>
              </div>
              <div class="mb-3">
                <label class="form-label">Estado:</label>
                <span class="ms-2">{{ estadoTexto }}</span>
              </div>
            </div>

            <!-- Botón para volver -->
            <div class="col-md-100 d-flex justify-content-end align-items-center">
              <router-link :to="{path: '/tabla'}" class="btn btn-info">
                <i class="fa-solid fa-arrow-left"></i> Volver
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      nombre: '',
      correo: '',
      cargo: '',
      estado: false,
      foto: '',
      url: 'http://busquedausuario.test/api/v1/usuarios',
      cargando: false
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getUsuario();
  },

  methods: {
    getUsuario() {
      axios.get(this.url).then(
        res => {
          this.nombre = res.data.data.nombre;
          this.correo = res.data.data.correo;
          this.cargo = res.data.data.cargo;
          this.estado = res.data.data.estado;
          this.foto = res.data.data.foto;
        }
      );
    }
  },
  computed: {
    estadoTexto() {
      return this.estado ? 'Activo' : 'Inactivo';
    }
  }
}
</script>
