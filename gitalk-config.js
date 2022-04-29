<div id="gitalk-container"></div>
var gitalk = new Gitalk({
  "clientID": "05fb7151030cefa1a084",
  "clientSecret": "d5013b1052b33b3b69101563018692f8338b38fb",
  "repo": "g.xgss.net",
  "owner": "funet8",
  "admin": ["funet8],
  "id": location.pathname,      
  "distractionFreeMode": false  
});
gitalk.render("gitalk-container");