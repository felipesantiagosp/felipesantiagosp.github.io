let listaForms = document.querySelectorAll(".input");
let cadastrar = document.querySelector("#entrar");
let loginRealizado = document.querySelector("#modal");





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
                <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Login realizado com Sucesso
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>               
              </div>
            </div>
          </div>
        </div>`

        listaForms[0].value = '';
        listaForms[1].value = '';
       
    }
})


