<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
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
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="8"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="user, i in this.usuarios" :key="user.id">
              <td v-text="(i+1)"></td>
              <td v-text="user.id"></td>
              <td v-text="foto"></td>
              <td v-text="user.nombre"></td>
              <td v-text="user.created_at"></td>
              <td v-text="user.estado"></td>
              <td>

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
