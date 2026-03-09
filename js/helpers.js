
function byId(id){return document.getElementById(id);}
function copyText(v){navigator.clipboard.writeText(v||'').then(()=>alert('Copied'));}
function downloadText(name,c,m='text/plain;charset=utf-8'){const b=new Blob([c],{type:m});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);}
function downloadCanvas(canvas,name='image.png'){const a=document.createElement('a');a.href=canvas.toDataURL('image/png');a.download=name;a.click();}
