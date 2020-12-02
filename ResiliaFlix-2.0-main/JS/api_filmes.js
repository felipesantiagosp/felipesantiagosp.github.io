
class Model {
    constructor() 
    {
        console.log('Model chamada')
        
        

        this.input = fname.value; //this.date = chama.value;
        this.titulo = '';
        this.image = '';
        this.released_date = '';
        this.plot = '';
        this.rating = '';
        this.genre = '';
        this.error = '';
    }

    buscaImagem() // foi chamada pelo controlador
    {
        console.log('procurando...') 

        let request = new XMLHttpRequest();

        request.open( 'GET', 'http://www.omdbapi.com/?t='+ this.input + '&apikey=99f318b3', false);

        request.addEventListener('load', () =>
        {
            if ( request.status == 200 )
            {
               let dados = this.processar( request.responseText ); //chama o processamento e recebe os dados da API tratados

               this.atualiza( dados ); //recebe os dados em formato de objeto e pede para atualizar o site
               
               //criar uma nova requisicao passando os dados.repo_url
            }
        })

        request.send();
    }

    processar( String ) // adapta os dados para que eu possa usar no codigo
    {
        console.log( 'Model está pensando' );

        let response = JSON.parse ( String );
        console.log(response);

        return response; // joga os dados em forma de objeto para a let dados

    }

    atualiza ( dados ) //os dados tratados sao enviados para as variaveis de visualizacao da pagina
    {
        console.log('Model atualizando as variveis do view');

        this.error = dados.Error
        console.log(this.error);
        

        this.titulo = dados.Title;
        this.image = dados.Poster;
        this.plot = dados.Plot; // repo url vai retornar um objeto
        this.released_date = dados.Released;
        this.rating = dados.imdbRating;
        this.genre = dados.Genre;
    }

    getError()
    {
        return this.error;
    }

    getTitulo()
    {
        return this.titulo;
    }

    getPlot()
    {
        return this.plot;
    }

    getImage()
    {
        return this.image;
    }

    getReleasedDate()
    {
        return this.released_date;
    }

    getRating()
    {
        return this.rating;
    }

    getGenre()
    {
        return this.genre;
    }
}

class View
{
    constructor() { console.log('View ativada')}

    alteraView ( model )
    {
        console.log('View recebendo tudo e alterando tudo')

        if(model.getError() != undefined){
            let sinistro = document.createElement('div'); //cria uma div sinistra para receber as variaveis atualizadas do API
            sinistro.setAttribute("id","conteudo");

            sinistro.innerHTML = 
            `
            <h1 class="texto_form" >Filme não encontrado</h1>
            <img class="triste_png" src = "../imagens/triste.png"  alt="" width="100px">
            
            ` //crio para cada vez que aperta o botao elementos na div que recebem os dados da API

            document.body.appendChild( sinistro ); //ultima parte, adiciono a div sinistra no body da pagina mostrando para o usuario
            
        } else {

            let sinistro = document.createElement('div'); //cria uma div sinistra para receber as variaveis atualizadas do API
            sinistro.setAttribute("id","conteudo");
    
            sinistro.innerHTML = 
            `
                <p>${model.getTitulo()}</p>
                <img src = ${model.getImage()}>
                <p >${model.getPlot()}</p>
                <p >${model.getReleasedDate()}</p>
                <p >${model.getRating()}</p>
                <p >${model.getGenre()}</p>
            ` //crio para cada vez que aperta o botao elementos na div que recebem os dados da API
    
            document.body.appendChild( sinistro ); //ultima parte, adiciono a div sinistra no body da pagina mostrando para o usuario
        }
    
    }
}



class Controller
{
    constructor(){ console.log( 'Controller aguardando...')} //vai falar isso assim que a let controlador for criada.

    pedeImagem() //executou a clicar no botao enviar
    {


        console.log('Controller enviando o pedido...')

        let pagina = new Model(); //cria um classe model
        pagina.buscaImagem(); //chama a funcao do API

        let view = new View(); // cria uma classe view
        view.alteraView( pagina ); //chama a funcao view
    }
}

//ativa o controlador
let controlador = new Controller();
//envia ao ser clicado

let btn_enviar = document.getElementById("enviar"); //trago o botao para o JS
btn_enviar.addEventListener('click', controlador.pedeImagem); // add um escutador ao botao para chamar os metodos