



var nome = document.getElementById('nome');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var telefone = document.getElementById('telefone');

email.addEventListener('focus',()=>{
        email.borderColor="#4A5F6A"
});
s
email.addEventListener('blur',()=>{
    email.borderColor="#ccc"
});

senha.addEventListener('focus',()=>{
    senha.borderColor="#4A5F6A"
});

senha.addEventListener('blur',()=>{
senha.borderColor="#ccc"
});

telefone.addEventListener('focus',()=>{
    telefone.borderColor="#4A5F6A"
});

telefone.addEventListener('blur',()=>{
    telefone.borderColor="#ccc"
});

nome.addEventListener('focus',()=>{
    nome.borderColor="#4A5F6A"
});

nome.addEventListener('blur',()=>{
    nome.borderColor="#ccc"
}); 

            document.writeln(nome)
       
            document.writeln(email)
      
            document.writeln(telefone)
            
function reset(LIMPAR){
}

function enviar(){
    
}