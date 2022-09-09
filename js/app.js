console.log('conectado...');
const lista = document.getElementById('lista')
const InfoPokemon = document.getElementById('InfoPokemon').content
const fragment = document.createDocumentFragment()

//Elementos del filtro
const btnfiltro = document.getElementById('btnfiltrar')
const input = document.getElementById('filtroPokemones')

let pokemon = []

document.addEventListener('DOMContentLoaded', () => {
    fetchPokemones()
})

btnfiltro.addEventListener('click', () => {
    if(input.value > 0 && input.value){
        console.log('click en el filtro',input.value)
    }
})

const fetchPokemones = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then( async res => {
            let data = await res.json()
            pokemones = await data.results
            pintarPokemones()
        })
        .catch( error => {
            console.log('error', error)  
        })
}

const pintarPokemones = () => {
  
    pokemones.forEach((item, index) => {
        InfoPokemon.querySelectorAll('p')[0].textContent = item.name
        InfoPokemon.querySelectorAll('p')[1].textContent = item.url
        InfoPokemon.querySelector('button').dataset.id = index + 1

        const clone = InfoPokemon.cloneNode(true)
        fragment.appendChild(clone)
    })
    lista.appendChild(fragment)
}