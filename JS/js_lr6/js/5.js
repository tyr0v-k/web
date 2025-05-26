function solve() {
      document.querySelector('#searchBtn').addEventListener('click', () => {
         const searchText = document.getElementById('searchField').value.toLowerCase();
         const rows = document.querySelectorAll('.container tbody tr');
         rows.forEach(row => row.classList.remove('select'));
         if (searchText.trim() != ''){
            let matches = 0;
            rows.forEach(row => {
               if (row.textContent.toLowerCase().includes(searchText.toLowerCase())) {
                  matches++;
                  row.classList.add('select');
               }
            });
            document.getElementById('result').textContent = `${matches} matches found`;
         }
      })
}