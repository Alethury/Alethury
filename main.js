function validar() {
   var nome=formuser.nome.value;
   var email=formuser.email.value;
   var cpf=formuser.cpf.value;
   var telefone=formuser.telefone.value;
   
   if(nome=="" || nome.length<=3){
     alert("preencha o campo name");
     formuser.name.focus();
     return false;
   }
   if(email=="" || email.indexOf('@')== -1){
     alert("preencha o campo email");
     formuser.email.focus();
     return false;
   }
   if(cpf==""){
     alert("preencha o  campo cpf");
     formuser.cpf.focus();
     return false;
   }
  /* if(celular=="" || telefone.length<=13){
     alert('');
     return false;
   }*/
   function mascaraTelefone(evt){
     var tel=document.getElementById("telefone");
     var tam=tel.value.length;
     var tecla=evt.keyCode;
     
     if (tecla !=8){
       switch(tam){
         case 1:
           tel.value="(" + tel.value;
           break;
         case 3:
           tel.value=tel.value + ")";
           break;
         case 8:
           tel.value=tel.value + "-";
           break;
    function somenteNumeros(evt){
      var tecla=evt.keyCode;
      if(tecla >= 48 && tecla <= 57){
        return true;
      }
      else{
        return false
      }
    }
       }
     }
   }
}
