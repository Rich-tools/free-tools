
let allTools = [];
async function loadTools(){
  const res = await fetch('js/tools.json');
  allTools = await res.json();
  renderTools(allTools);
}
function renderTools(items){
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = '';
  items.forEach(t=>{
    const icon = t.category[0];
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="icon">${icon}</div>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <div class="chips"><span class="chip">${t.category}</span><span class="chip">${t.slug}</span></div>
      <a class="open-btn" href="tools/${t.slug}.html">Open Tool</a>`;
    grid.appendChild(card);
  });
  document.getElementById('toolCount').textContent = items.length;
}
function filterTools(category='All'){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  document.querySelectorAll('.tab').forEach(el=>el.classList.remove('active'));
  const active = [...document.querySelectorAll('.tab')].find(el=>el.dataset.cat===category);
  if(active) active.classList.add('active');
  const filtered = allTools.filter(t=>{
    const hay = `${t.name} ${t.category} ${t.desc} ${t.slug}`.toLowerCase();
    return (category==='All' || t.category===category) && hay.includes(q);
  });
  renderTools(filtered);
}
document.addEventListener('DOMContentLoaded', loadTools);
