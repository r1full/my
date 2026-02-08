async function loadTemplate(id, url){
  const el = document.getElementById(id);
  if(!el) return;
  try{
    const res = await fetch(url, {cache: 'no-store'});
    if(!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    el.innerHTML = html;
  }catch(e){
    console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadTemplate('pc-header', '/my/pc-header.html');
  loadTemplate('pc-footer', '/my/pc-footer.html');
  loadTemplate('mobile-header', '/my/mobile-header.html');
  loadTemplate('mobile-footer', '/my/mobile-footer.html');
});
