let pedido = new XMLHttpRequest();
let inputText = document.querySelector(".cx-texto");
let inputBotao = document.querySelector(".input-bt");
let posterFilmes = document.querySelector(".movies");

console.log(posterFilmes)







inputBotao.addEventListener("click", function(event){
    let valorInputFilme = inputText.value
    console.log(valorInputFilme)
    pedido.onreadystatechange = function( dados )
    {
        if ( this.status == 200 && this.readyState == 4 )
            {
                
                    let texto = this.responseText
                    let json = JSON.parse(texto)
                    let titulo = json.Title;          
                    let ano = json.Year;
                    let diretor = json.Director;
                    let atores = json.Actors;
                    let descricao = json.Plot;
                    let img = json.Poster
                    let critica = json.Ratings[2].Value
                    
                 posterFilmes.innerHTML = `<img  data-toggle="modal" data-target="#exampleModal" class="poster" src="${img}" alt="poster do filme">`

                 posterClass = document.querySelector(".poster")
                 console.log(document.querySelector(".imagem-filme"))

                 document.querySelector(".imagem-filme").innerHTML = `<img src="${img}" width="200px">`
                 document.querySelector(".titulo-filme").innerHTML = `<h1>${titulo}</h1>`
                 document.querySelector(".info-filme").innerHTML = `<p>${ano}, ${diretor}, ${atores}, ${critica} </p>`
                 document.querySelector(".descricao-filme").innerHTML = `<p>${descricao}</p>`
                 document.querySelector(".modal-title").innerText = titulo




 
            }
    }
    
  
    pedido.open("GET", `http://www.omdbapi.com/?t='${valorInputFilme}'&apikey=99f318b3`)
    pedido.send();
    
    
}
)
