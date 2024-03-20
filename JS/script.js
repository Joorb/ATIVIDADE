document.getElementById("entrar").addEventListener("click", function() {
    
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
  
    
    if (usuario == 'cidade@gmail.com' && senha == '1234') {
        
        window.close = 'index.html';
        window.open = 'perfis.html'; 
    } else {
        
        alert('Usuário ou senha inválidos');
    }
});
function validar() {
    /* declarando as variáveis*/
    let usuario = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
  
    /*fazendo  if e else para validar os campos */
    if (usuario == 'cidade@gmail.com' && senha == '1234'){
      //chama a tela do index
      window.open('perfis.html');
      //fecha a tela login
      window.close('index.html');
    } else {
      alert('Usuário ou senha inválidos');
    }
}