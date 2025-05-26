function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;

    towns.forEach(town => {
        if (searchText !== '' && searchText.toLowerCase().includes(town.textContent.toLowerCase())) {
            matches++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    });
    document.getElementById('result').textContent = `${matches} matches found`;
}
