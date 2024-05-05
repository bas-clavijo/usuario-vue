<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
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
              <td colspan="7"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="user, i in this.usuarios" :key="user.id">
              <td v-text="(i+1)"></td>
              <td v-text="user.id"></td>
              <td>
                <img v-if="user.foto" style="width: 150px !important;" :src="user.foto" class="img-thumbnail" alt="">
                <img v-else="user.foto" style="width: 50px !important;" :src="require('@/assets/usuario.png')" class="img-thumbnail" alt="">
              </td>
              <td v-text="user.nombre"></td>
              <td v-text="new Date(user.created_at).toLocaleDateString()"></td>
              <td v-text="user.estado ? 'Activo' : 'Inactivo'"></td> 
              <td>
                <router-link :to="{path:'view/'+user.id}" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{path:'edit/'+user.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger">
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

  export default{
    data(){
      return{
        usuarios:null, 
        cargando:false
      }
    },
    mounted(){
      this.getUsuarios();
    },
    methods:{
      getUsuarios(){
        this.cargando = true;
        axios.get('http://busquedausuario.test/api/v1/usuarios').then(
          res =>{
            this.usuarios = res.data;
            this.cargando = false;
          }
        );
      }
    }
  }
</script>
