
function byId(id){return document.getElementById(id);}
function copyText(value){navigator.clipboard.writeText(value||'').then(()=>alert('Copied'));}
function downloadText(filename, content, mime='text/plain;charset=utf-8'){const blob=new Blob([content],{type:mime});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),400);}
function downloadCanvas(canvas, filename='image.png'){const a=document.createElement('a');a.href=canvas.toDataURL('image/png');a.download=filename;a.click();}
function incrementMetric(bucket,key){const data=JSON.parse(localStorage.getItem(bucket)||'{}');data[key]=(data[key]||0)+1;localStorage.setItem(bucket,JSON.stringify(data));}
document.addEventListener('DOMContentLoaded',()=>{const slug=document.body.dataset.slug;if(slug){incrementMetric('smarttools-views',slug);}});
