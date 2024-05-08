<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <!--Cabecera-->
      <div class="py-3">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Listado de usuarios</a>
            <div class="d-flex">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Opciones de búsqueda
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Estado Activo</a></li>
                  <li><a class="dropdown-item" href="#">Estado Inactivo</a></li>
                </ul>
              </div>

              <div class="col-md-5 d-flex justify-content-end align-items-center">
                <router-link :to="{ path: '/createUsuario' }" class="btn btn-success">
                  <i class="fa-solid fa-plus"></i> Agregar
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!--Tabla-->
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>FOTO</th>
              <th>NOMBRE</th>
              <th>Fecha de creacion</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="7">
                <h3>Cargando...</h3>
              </td>
            </tr>
            <tr v-else v-for="user, i in this.usuarios" :key="user.id">
              <td v-text="(i + 1)"></td>
              <td v-text="user.id"></td>
              <td>
                <img v-if="user.foto" style="width: 150px !important;" :src="user.foto" class="img-thumbnail" alt="">
                <img v-else="user.foto" style="width: 50px !important;" :src="require('@/assets/usuario.png')"
                  class="img-thumbnail" alt="">
              </td>
              <td v-text="user.nombre"></td>
              <td v-text="new Date(user.created_at).toLocaleDateString()"></td>
              <td v-text="user.estado ? 'Activo' : 'Inactivo'"></td>
              <td>
                <router-link :to="{ path: 'viewUsuario/' + user.id }" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'editUsuario/' + user.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" v-on:click="$event => eliminarUsuarios(user.id, user.nombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { confirmar, } from '../funciones'

export default {
  data() {
    return {
      usuarios: null,
      cargando: false
    }
  },
  mounted() {
    this.getUsuarios();
  },
  methods: {
    getUsuarios() {
      this.cargando = true;
      axios.get('http://busquedausuario.test/api/v1/usuarios').then(
        res => {
          this.usuarios = res.data;
          this.cargando = false;
        }
      );
    },
    eliminarUsuarios(id, nombre) {
      confirmar('http://busquedausuario.test/api/v1/usuarios/', id, 'Eliminar Usuario', '¿Esta seguro de querer eliminar a' + ' ' + nombre + '?');
      this.cargando = false;
    }
  }
}
</script>

