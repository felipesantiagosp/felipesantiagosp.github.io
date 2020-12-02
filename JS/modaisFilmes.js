let acao1 = document.querySelector('img#acao1')
let acao2 = document.querySelector('acao2')
let acao3 = document.querySelector('acao3')
let acao4 = document.querySelector('acao4')
let acao5 = document.querySelector('acao5')
let acao6 = document.querySelector('acao6')

let titulo = document.querySelector('#titulo')
let img = document.querySelector('#filme-img')

acao1.addEventListener('Click' , function(){ //event

    let valorInputFilme = inputText.
    console.log(valorInputFilme)
    pedido.onreadystatechange = function( dados )
    {value
        
        if ( this.status == 200 && this.readyState == 4 )
            {
                titulo.innerHTML = 'Titulo do filme'//json.Title;          

                let texto = this.responseText
                let json = JSON.parse(texto)
                // let ano = json.Year;
                // let diretor = json.Director;
                // let atores = json.Actors;
                // let descricao = json.Plot;

                img = '<img src="../imagens/Posters/action1.jpg"> '//json.Poster
                // let critica = json.Ratings[2].Value
 
               //posterFilmes.innerHTML = `<img class="poster" src="${img}" alt="poster do filme">`
                
            }

        }
    
    pedido.open("GET", `http://www.omdbapi.com/?t='${valorInputFilme}'&apikey=99f318b3`)
    pedido.send();    
})
