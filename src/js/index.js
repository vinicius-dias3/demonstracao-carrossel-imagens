let images = [
{src: './src/images/pexels-karolina-grabowska-5207029.jpg', alt: 'enfermeira gesto coração'},
{src: './src/images/idosa-tomando-cafe.jpg', alt: 'idosa tomando café'},
{src: './src/images/homem-idoso-tomando-remedio.jpg', alt: 'homem tomando remédio'},
{src: './src/images/maos-idosa.jpg', alt: 'mãos idosa'},
{src: './src/images/pexels-shvets-production-8899548.jpg', alt: 'homem com alteres'}
]

let currentIndex = 0;

const imgElement = document.getElementById('carouselImage');
const indicatorsContainer = document.getElementById('indicators');

// Cria os "radios" dinamicamente
images.forEach((_, index) => {
  const indicator = document.createElement('input');
  indicator.type = 'radio'
  indicator.name = 'carousel-btn'
  // para saber qual foi clicado \/
  indicator.value = index
  //   indicator.dataset.index = index 
  
  indicator.classList.add('indicator');
  indicatorsContainer.appendChild(indicator);
});

// Função para atualizar imagem e indicadores
function carouselRefresh() {
    imgElement.src = images[currentIndex].src;
    imgElement.alt = images[currentIndex].alt;

    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.checked = (index === currentIndex)
    });
}

// Evento para alterar os radios, deixando checked
indicatorsContainer.addEventListener('change', (e) => {
    if(e.target.matches('input[type=radio]')){
        e.target.checked = true
        currentIndex = Number(e.target.value)
        carouselRefresh()
    }
});

setInterval(()=>{
currentIndex++
if(currentIndex > images.length - 1) { 
    currentIndex = 0
    carouselRefresh()
}


carouselRefresh()
}, 3000)