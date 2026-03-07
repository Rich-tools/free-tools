document.addEventListener('DOMContentLoaded', function(){
  const search = document.getElementById('toolSearch');
  if(search){
    search.addEventListener('input', function(){
      const q = search.value.toLowerCase().trim();
      document.querySelectorAll('.tool-card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});
