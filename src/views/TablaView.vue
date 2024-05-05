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
    }
  }
</script>
