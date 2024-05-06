import Swal from "sweetalert2";
import axios from "axios";

export function mostrarAlerta(titulo,icono,foco=''){
    if(foco!=''){
        document.getElementById(foco).focus();
    }

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}

export function confirmar(Url,id,titulo,mensaje){

    var url = Url+id;
    const swalWithBoostrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-succes me-3', cancelButton:'btn btn-danger'},
    });

    swalWithBoostrapButton.fire({
        title:titulo,
        text:mensaje,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si,eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then((res)=>{
            if(res.isConfirmed){
                enviarSolicitud('DELETE',{id:id},url,'Eliminado con exito');
            }else{
                mostrarAlerta('Operacion cancelada', 'info');
            }
        });

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}

export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(res){
        var estado = res.status;  
        if(estado == 200){
            mostrarAlerta(mensaje, 'success');
            window.setTimeout(function(){
                window.location.href='/tabla'
            },1000);
        }else{
            mostrarAlerta('No se ha podido recuperar la respuesta', 'error');
        }
    }).catch(function(error){
        mostrarAlerta('Error del servidor', 'error');
    });
}