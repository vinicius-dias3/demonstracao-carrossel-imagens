# Demonstração Carrossel de Imagens

Este projeto é um modelo simples e funcional de **carrossel de imagens automático**. Ele foi desenvolvido com **HTML, CSS e JavaScript puro**, com o objetivo de ser um exemplo para mostrar a potenciais clientes como um carrossel pode ser implementado em seus sites.


## 💡Funcionalidades

- Exibição automática de imagens em sequência com intervalo de tempo.
- Botões indicadores dinâmicos - pagination (criando inputs do tipo radio via JavaScript).
- Usuário pode clicar em um indicador para trocar de imagem manualmente.
- Imagens e texto alternativo (alt) são configurados dinamicamente.


## ⚙ Detalhes

### Imagens

As imagens, são armazenadas em uma array de objetos, cada um, com `src` e `alt`:


```javascript
let images = [
  { src: './src/images/idosa.jpg', alt: 'idosa sorrindo' },
  ...
];
```

### Botões - Pagination

Inputs tipo `radio` são criados dinamicamente de acordo com a quantidade de imagens. Cada input:

- Tem valor e índice associados.

- Permite que o usuário clique para navegar manualmente.

- Recebe a propriedade checked de acordo com a imagem atual.

```javascript
imagens.forEach((_, index) => {
  const indicator = document.createElement('input');
  indicator.type = 'radio';
  ...
});
```

### 📌 Observações 


As imagens usadas são apenas ilustrativas.

O projeto pode ser facilmente adaptado para incluir botões de navegação (próximo/anterior) ou legendas adicionais.

O tempo entre as imagens é fixo em 3 segundos, mas pode ser personalizado no código.