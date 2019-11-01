
//documentação da api do github https://developer.github.com.v3/
//requisição na api pela url https://api.github.com/users/reprograma
//fazer get na rota /users com seu user ex:get em 'https://api.github.com/users/reprograma

const url = 'http://api.giphy.com/v1/gifs/search?q=layeorder&api_key=dc6zaTOxFJmzC&limit=1&offset=0'

'https://api.github.com/users/telcrika'

fetch(url)  //fetch é um tipo de promise
    .then(response => response.json())
    .then(json => criarImagem(json.data))
    //.catch(erro => console.error(erro))

    
    function criarImagem(src) {
        // document.body.innerHTML = `
        // <img src=${lista[0].images.original.url} >
        // `
        document.body.innerHTML = `
            <img src=${src} >
        `
    
}

//-------------------------------------------------------------------------------------------------
async function buscarApi(url) {
    try{
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json()
            criarImagem(json.data)
        } else {
            //document.body.innerHTML = `<h1 style="color:red">${response.status}: ${response.statusText}</h1>` //caso use esta linha, incluir o try catch
            const err = `${response.status} : ${response.statusText}`
            //console.error ('não foi possivel retornar a api') //caso use esta linha não usar try catch
            criaErro(err); //outra forma de uso
        }
    }catch (error) {
        criaErro('errou!!! errou!!! errou!!!')
    }
    
    
} 

criaErro = (erro) => {
    document.body.innerHTML = `<h1>tyle="color:red">${response.status}: ${erro}</h1>`
}

buscarApi(url)
//.catch(err => console.error(err))






//lembrar de descomentar alguns itens para utilizar outras formas de usar código