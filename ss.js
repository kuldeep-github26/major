// document.getElementById('crop-search').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let rows = document.querySelectorAll('#price-table tbody tr');
  
//     rows.forEach(row => {
//       let crop = row.querySelector('td').textContent.toLowerCase();
//       if (crop.includes(filter)) {
//         row.style.display = '';
//       } else {
//         row.style.display = 'none';
//       }
//     });
//   });
  
document.getElementById('crop-search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#price-table tbody tr');
  
    rows.forEach(row => {
      let crop = row.querySelector('td').textContent.toLowerCase();
      if (crop.includes(filter)) {
        row.style.display = '';  // Show the row if it matches the search term
      } else {
        row.style.display = 'none';  // Hide the row if it doesn't match
      }
    });
  });
  