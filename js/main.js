
let allTools = [];
async function loadTools(){
  const res = await fetch('js/tools.json');
  allTools = await res.json();
  render(allTools);
}
function render(items){
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = '';
  items.forEach(t=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="icon">${t.icon}</div>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <div class="chips"><span class="chip">${t.category}</span></div>
      <a class="open" href="tools/${t.slug}.html">Open Tool</a>
    `;
    grid.appendChild(el);
  });
  document.getElementById('count').textContent = items.length;
}
function applyFilters(cat='All'){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.cat===cat));
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const filtered = allTools.filter(t=>{
    const hay = `${t.name} ${t.desc} ${t.category} ${t.slug}`.toLowerCase();
    return (cat==='All' || t.category===cat) && hay.includes(q);
  });
  render(filtered);
}
document.addEventListener('DOMContentLoaded', loadTools);
