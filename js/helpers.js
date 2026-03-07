
function byId(id){ return document.getElementById(id); }
function copyText(value){
  navigator.clipboard.writeText(value || '').then(()=>alert('Copied to clipboard'));
}
function downloadText(filename, content, mime='text/plain;charset=utf-8'){
  const blob = new Blob([content], {type:mime});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 500);
}
function downloadCanvas(canvas, filename='image.png'){
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = filename;
  a.click();
}
function readFileAsDataURL(file){
  return new Promise((resolve,reject)=>{
    const r = new FileReader();
    r.onload = ()=>resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
