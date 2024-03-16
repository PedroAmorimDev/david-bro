// async function fetchActivity(){
    // CaixaDeInformacao.classList.replace('NaoVisivel', 'Visivel')
    // Header.classList.replace('Visivel', 'NaoVisivel')
    // botão.style.top = '75%'
    // botão.style.transform = 'translate(-50%, -50%)'

    // const url = 'https://www.boredapi.com/api/activity/'
    // fetch(url)
    // .then(res => {if (!res.ok) {
    //    throw new Error('erro ao receber no primeiro then') 
    // } else {
    //     res.json()
    // }})
    // .then(data =>{
    //     console.log(data)


        // if(data.link){
        //     fetchActivity.innerHTML = `<span class="poppins">Atividade: </span>
        //     <a href="${data.link}"><span class="montserrat bold animation">${data.activity}</span>(Aprenda Mais)</a>`
        // }else
        // Atividade.innerHTML = `<span class="poppins">Atividade:</span><span class="montserrat">${data.Atividade}</span>`
        // Tipo.innerHTML = `<span class="poppins">Tipo: </span>
        // <span><span class="montserrat">${data.Tipo}</span>`
        // Participantes.innerHTML = `<span class="poppins">Participantes: </span>
        // <span><span class="montserrat">${data.Participantes}</span>`
        // acessibilidade.innerHTML = `<span class="poppins">Acessibilidade: </span>
        // <span><span class="montserrat">${data.acessibilidade}</span>`
//     })
// }
//botão.addEventListener('click', fetchActivity)




// ESSA AQUI FUNCIONA, SÓ CONTINUAR O QUE TAVA FAZENDO LÁ EM CIMA

const botão = document.querySelector('#botão')
botão.addEventListener('click', () => {
   

    const url = 'https://www.boredapi.com/api/activity/'
    fetch(url)
    .then((response) => {if (!response.ok) {
       throw new Error('erro ao receber no primeiro then') 
    } else {
        return response.json()
    }})
    .then((data) =>{
        console.log(data)
    })
.catch((err) => console.log(err))
    })

//EXEMPLO DE FUNÇÃO PRA RENDERIZAR COISA NA PAGE 
// const renderizarCoisas = (items)=> {
//     const containerquevcqueradd = document.getElementById("container que vc quer add")
//     items.forEach((item) => {
//         const criardivpracolocaroquevcquer = document.createElement('div')
//         criardivpracolocaroquevcquer.innerHTML = `
//         <div class="container que vc quer add">
//             <div>
//                 <p>${item.propriedadedoarrayqueeudeiconsolenofetch(nosegundothen)}</p>
//             </div>
//         </div>`
//         containerquevcqueradd.classList.add('qualquernomedacoisa')
//         container.appendChild(containerquevcqueradd)
//     });
// }
