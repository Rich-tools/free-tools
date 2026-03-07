
async function loadTools(){
let res=await fetch('js/tools-data.json');
let tools=await res.json();
let box=document.getElementById('tools');
tools.forEach(t=>{
let div=document.createElement('div');
div.className='card';
div.innerHTML=`<h3>${t.name}</h3><p>${t.desc}</p><a href="tools/${t.slug}.html">Open Tool</a>`;
box.appendChild(div);
});
}
function searchTools(){
let v=document.getElementById('search').value.toLowerCase();
document.querySelectorAll('.card').forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)?'block':'none';
});
}
loadTools();
