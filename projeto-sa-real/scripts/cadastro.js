const form = document.getElementById('musicForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const artista = document.getElementById('artista').value;
  const arquivo = document.getElementById('arquivo').files[0];
  const imagem = document.getElementById('imagem').files[0];

  if (arquivo && imagem) {
    const musicData = {
      title: nome,
      artist: artista,
      src: URL.createObjectURL(arquivo), 
      image: URL.createObjectURL(imagem) 
    };

    const existingMusic = JSON.parse(localStorage.getItem('musics')) || [];

    existingMusic.push(musicData);

    localStorage.setItem('musics', JSON.stringify(existingMusic));

    window.location.href = './inicial.html';
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});