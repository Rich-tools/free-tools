
let allTools=[];async function loadTools(){const res=await fetch('js/tools.json');allTools=await res.json();render(allTools);}
function render(items){const grid=document.getElementById('toolsGrid');grid.innerHTML='';items.forEach(t=>{const el=document.createElement('article');el.className='card';el.innerHTML=`<div class="tool-icon"><i class="${t.icon}"></i></div><h3>${t.name}</h3><p>${t.desc}</p><div class="meta"><span>${t.cat}</span></div><a class="open" href="tools/${t.slug}.html">Open Tool</a>`;grid.appendChild(el);});document.getElementById('count').textContent=items.length;}
function filterCategory(cat='All'){document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.cat===cat));const q=document.getElementById('searchInput').value.trim().toLowerCase();const filtered=allTools.filter(t=>{const hay=(t.name+' '+t.desc+' '+t.cat+' '+t.slug).toLowerCase();return (cat==='All'||t.cat===cat)&&hay.includes(q);});render(filtered);}
function runSearch(){filterCategory(document.querySelector('.chip.active')?.dataset.cat||'All');}
function openFirst(){const q=document.getElementById('searchInput').value.trim().toLowerCase();if(!q)return;const match=allTools.find(t=>(t.name+' '+t.slug+' '+t.desc).toLowerCase().includes(q));if(match)window.location.href='tools/'+match.slug+'.html';}
function toggleTheme(){document.body.classList.toggle('dark-demo');}
document.addEventListener('DOMContentLoaded',loadTools);
