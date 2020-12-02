let pedido = new XMLHttpRequest();
let inputCep = document.querySelector("#inputCEP")
let inputCidade = document.querySelector("#inputCity")
let inputUF = document.querySelector("#inputUF")
let inputRua = document.querySelector("#inputAddress")







inputCep.addEventListener("blur", function(event){
    let cep = inputCep.value

    pedido.onreadystatechange = function( dados )
    {
        if ( this.status == 200 && this.readyState == 4 )
            {
                
                    let texto = this.responseText
                    let json = JSON.parse(texto)
                    let rua = json.logradouro
                    let cidade = json.localidade
                    let uf = json.uf

                    inputRua.value = rua;
                    inputCidade.value = cidade;
                    inputUF.value = uf;
              
            } else if (cep != 0 && cep.length != 8) {
                    inputRua.value = "";
                    inputCidade.value = "";
                    inputUF.value = "";
                    alert("CEP NÃO EXISTE")
                    inputCep.value = ""
            }
    }
    
  
    pedido.open("GET", `https://viacep.com.br/ws/${cep}/json/`)
    pedido.send();
    
    
}
)
