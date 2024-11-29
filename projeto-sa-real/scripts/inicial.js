function loadMusics() {
    const musicList = JSON.parse(localStorage.getItem('musics')) || [];
    const musicContainer = document.getElementById('musicList');
    musicContainer.innerHTML = ''; 
  
    if (musicList.length === 0) {
      const noMusicMessage = document.createElement('p');
      noMusicMessage.textContent = 'Nenhuma música cadastrada.';
      musicContainer.appendChild(noMusicMessage);
      return;
    }
  
    musicList.forEach((music, index) => {
      const musicCard = document.createElement('div');
      musicCard.classList.add('music-card');
  
      const musicImg = document.createElement('img');
      musicImg.src = music.image;
      musicImg.alt = music.title;
  
      const musicInfo = document.createElement('p');
      musicInfo.textContent = `${music.title} - ${music.artist}`;
  
      const playButton = document.createElement('button');
      playButton.textContent = 'Tocar';
      playButton.onclick = function() {
        playMusic(music.src); 
      };
  
      musicCard.appendChild(musicImg);
      musicCard.appendChild(musicInfo);
      musicCard.appendChild(playButton);
  
      musicContainer.appendChild(musicCard);
    });
  }
  
  function playMusic(musicSrc) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = musicSrc; 
    audioPlayer.play();  
  }
  
  window.onload = function() {
    loadMusics(); 
  };
  document.addEventListener("DOMContentLoaded", function() {
    function loadUserProfile() {
        try {

            const profileData = JSON.parse(localStorage.getItem('profileData'));
  
            if (profileData && profileData.name && profileData.image) {
                const userImage = document.getElementById('userImageHeader');
                const userName = document.getElementById('userName');
                const userInfo = document.getElementById('userInfo');
  
                userImage.src = profileData.image; 
                userName.textContent = profileData.name;
                userInfo.style.display = 'flex'; 
            }
        } catch (error) {
            console.error("Erro ao carregar os dados do usuário:", error);
        }
    }
  
    loadUserProfile();
  });