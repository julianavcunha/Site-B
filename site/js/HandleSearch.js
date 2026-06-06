const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


function handleSearch(searchTerm) {
    if (typeof searchTerm === 'string' && searchTerm.trim() !== '') {
        return searchTerm;
    }
    return null;
}

searchButton.addEventListener('click', () => {handleSearch(searchInput.value)});

export { handleSearch };