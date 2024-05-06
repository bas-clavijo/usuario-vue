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
        confirmButtonText:''
    });

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}