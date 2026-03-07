(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const title = document.title || path;
  const storeKey = 'freeToolsAnalytics';

  function readStore(){
    try{return JSON.parse(localStorage.getItem(storeKey)) || {pageViews:{}, toolOpens:{}, actions:{}, lastVisit:null};}
    catch(e){return {pageViews:{}, toolOpens:{}, actions:{}, lastVisit:null};}
  }
  function saveStore(data){localStorage.setItem(storeKey, JSON.stringify(data));}
  function bump(map,key){map[key]=(map[key]||0)+1;}

  const data = readStore();
  bump(data.pageViews, path);
  if(path !== 'index.html'){ bump(data.toolOpens, title); }
  data.lastVisit = new Date().toISOString();
  saveStore(data);

  window.trackAction = function(name){
    const d = readStore();
    bump(d.actions, name);
    d.lastVisit = new Date().toISOString();
    saveStore(d);
    if(window.gtag){ gtag('event', name, {event_category:'tool_action', event_label:title}); }
  };

  window.getAnalyticsData = readStore;
})();
