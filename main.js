/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
};


//Validação de formulário.

function validar(formulario) {
  if (formulario.nome.value == '') {
    alert("O campo NOME é obrigatório.");
    return false;
  }
  if (formulario.email.value == '') {
    alert("O campo EMAIL é obrigatório.");
    return false;
  }
  if (formulario.email.value.indexOf(('@' && '.'), 0) == -1) {
    alert("EMAIL invalido.");
    return false;
  }
  if (formulario.telefone.value == '') {
    alert("O campo TELEFONE é obrigatório.");
    return false;
  }


  if (formulario.cpf.value == '') {
    alert("O campo cpf é obrigatório.");
    return false;
  }
};
