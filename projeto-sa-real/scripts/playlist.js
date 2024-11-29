document.addEventListener('DOMContentLoaded', () => {
    const addPlaylistBtn = document.getElementById('add-playlist');
    const modal = document.getElementById('playlist-modal');
    const savePlaylistBtn = document.getElementById('save-playlist');
    const closeModalBtn = document.getElementById('close-modal');
    const playlistList = document.getElementById('playlist-list');
    const playlistNameInput = document.getElementById('playlist-name');

    function loadPlaylists() {
        const playlists = JSON.parse(localStorage.getItem('playlists')) || [];
        playlistList.innerHTML = '';

        playlists.forEach((playlist, index) => {
            const li = document.createElement('li');
            li.textContent = playlist.name;
            li.dataset.index = index;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.style.marginLeft = '10px';
            deleteBtn.onclick = () => deletePlaylist(index);

            li.appendChild(deleteBtn);
            playlistList.appendChild(li);
        });
    }

    function savePlaylist() {
        const name = playlistNameInput.value.trim();

        if (!name) {
            alert('O nome da playlist não pode estar vazio!');
            return;
        }

        const playlists = JSON.parse(localStorage.getItem('playlists')) || [];
        playlists.push({ name });
        localStorage.setItem('playlists', JSON.stringify(playlists));

        playlistNameInput.value = '';
        modal.classList.add('hidden');
        loadPlaylists();
    }

    function deletePlaylist(index) {
        const playlists = JSON.parse(localStorage.getItem('playlists')) || [];
        playlists.splice(index, 1);
        localStorage.setItem('playlists', JSON.stringify(playlists));
        loadPlaylists();
    }

    addPlaylistBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    savePlaylistBtn.addEventListener('click', savePlaylist);

    loadPlaylists();
});
document.getElementById('back-home').addEventListener('click', () => {
    window.location.href = 'inicial.html'; 
});