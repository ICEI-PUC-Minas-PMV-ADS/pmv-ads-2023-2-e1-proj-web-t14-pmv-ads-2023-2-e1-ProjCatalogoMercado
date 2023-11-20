function logar(){
            
    var email = document.getElementById('E-mail').value;
    var senha = document.getElementById('Senha').value;

    if(email== "admin" && senha == "1234"){
        alert('sucesso');
    
      }

      else{
            alert('usuario ou senha incorretos');

    } 

}
