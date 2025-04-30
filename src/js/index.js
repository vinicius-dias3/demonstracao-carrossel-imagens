let imagens = [
    {src: './src/images/pexels-karolina-grabowska-5207029.jpg', alt: 'enfermeira gesto coração'},
    {src: './src/images/idosa-tomando-cafe.jpg', alt: 'idosa tomando café'},
    {src: './src/images/homem-idoso-tomando-remedio.jpg', alt: 'homem tomando remédio'},
    {src: './src/images/maos-idosa.jpg', alt: 'mãos idosa'},
    {src: './src/images/pexels-shvets-production-8899548.jpg', alt: 'homem com alteres'}
  ]
  
  let indiceAtual = 0;
    
  const imgElement = document.getElementById('carouselImage');
  const indicatorsContainer = document.getElementById('indicators');
    
  //   // Cria os "botoes" dinamicamente
  imagens.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.dataset.index = index; // para saber qual foi clicado
    indicatorsContainer.appendChild(indicator);
  });
  // imagens.forEach((_, index) => {
  //   const indicator = document.createElement('input');
  //   indicator.type = 'radio'
  //   indicator.name = 'carousel-btn'
  //   indicator.id = `radio${index+1}`; // para saber qual foi clicado
  //   indicator.classList.add('indicator');
  //   indicatorsContainer.appendChild(indicator);
  // });
    
  // Função para atualizar imagem e indicadores
  function atualizarCarousel() {
    imgElement.src = imagens[indiceAtual].src;
    imgElement.alt = imagens[indiceAtual].alt;
    
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === indiceAtual);
    });
  }
    
  // Eventos de clique nos quadrados
  indicatorsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('indicator')) {
      // preventDefault()
      indiceAtual = Number(e.target.dataset.index);
      atualizarCarousel();
    }
  });
  // indicatorsContainer.addEventListener('click', (e) => {
  //   if (e.target.checked) {
  //     // e.preventDefault()
  //     console.log('pegou o input checked:', e.target)
  //     indiceAtual = Number(e.target.dataset.index);
  //     console.log(indiceAtual)
  //     atualizarCarousel();
  //   }
  // });
    
  // Inicializa
  atualizarCarousel();
  
  setInterval(()=>{
    // debugger
    indiceAtual++
    // if(indiceAtual > imagens.length - 1) { 
    if(indiceAtual > 4) { 
        indiceAtual = 0
        atualizarCarousel()
    }
    
    atualizarCarousel()
  }, 2500)
    