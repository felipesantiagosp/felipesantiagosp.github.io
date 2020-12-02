let cadastrar = document.querySelector("#cadastrar");
let listaForms = document.querySelectorAll(".form-control");
let modal = document.querySelector("#modal");
let nome = document.querySelector("#inputNome");
let email = document.querySelector("#inputEmail");
let senha = document.querySelector("#inputSenha");
let senhaRepeat = document.querySelector("#inputSenha2");
console.log(listaForms);


cadastrar.addEventListener("click", (event)=>{
    event.preventDefault()
    let contador = 0;

    for (let tag of  listaForms){
        if (tag.value.length == 0){
            contador += 1
        }
    }
    
    
    if (contador == 0){
        modal.innerHTML = `        
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Cadastro realizado com Sucesso</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Obrigado ${nome.value}, seu cadastro foi realizado!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>               
              </div>
            </div>
          </div>
        </div>`

        inputRua.value = "";
        inputCidade.value = "";
        inputUF.value = "";
        inputCep.value = "";
        inputNome.value = "";
        inputEmail.value = "";
        inputSenha.value = "";
        inputSenha2.value = "";

        
    }
})
